import { Client, Collection, REST, Routes } from "discord.js";
import * as pg from "pg";
import { readdirSync } from "node:fs";
import { CommandsLoadOptions } from "../types/CommandsLoadOptions";
import Command from "./Command";
import Event from "./Event";

export default class BaseClient extends Client {
  private _commands: Collection<string, Command> = new Collection<string, Command>();
  private _events: Collection<string, Event> = new Collection<string, Event>();
  private _pg!: pg.Client;
  private _slashCommands: any[] = [];

  async loadCommands(options: CommandsLoadOptions) {
    const cmdFolder = readdirSync(`./src/${options.commandsFolder}`);

    if (options.globalCommands == undefined) options.globalCommands = true;
    else if (options.logs == undefined) options.logs = true;
    else if (!options.globalCommands && !options.guildId)
      throw new Error("Guild ID needs to be specified for guild commands.");

    for (const folder of cmdFolder) {
      const cmdFiles = readdirSync(
        `./src/${options.commandsFolder}/${folder}`
      ).filter((f) => f.endsWith(".ts"));

      for (const file of cmdFiles) {
        const command = await import(`../${options.commandsFolder}/${folder}/${file}`);

        if (command.data.name == undefined)
          throw new Error("Command name is required.");

        this._commands.set(command.data.name, command);
        this._slashCommands.push(command.data.toJSON());
      }
    }

    const rest = new REST({ version: "10" }).setToken(options.clientToken);

    try {
      await rest.put(
        options.globalCommands
          ? Routes.applicationCommands(options.clientId)
          : Routes.applicationGuildCommands(options.clientId, options.guildId!),
        { body: this._slashCommands }
      );
    } catch (e) {
      console.error(e);
    }
  }

  async loadEvents(eventsFolder: string) {
    const evntFolder = readdirSync(`./src/${eventsFolder}`);

    for (const folder of evntFolder) {
      const evntFiles = readdirSync(`./src/${eventsFolder}/${folder}`).filter((f) =>
        f.endsWith(".ts")
      );

      for (const file of evntFiles) {
        const event = await import(`../${eventsFolder}/${folder}/${file}`);

        if (event.data.name == undefined)
          throw new Error("Event name is required.");

        this._events.set(event.data._name, event);


        if (event.data._once)
          this.once(event.data._name, (...args) => event.execute(...args, this));
        else this.on(event.data._name, (...args) => event.execute(...args, this));
      }
    }
  }

  async connectToPostgres(config: string | pg.ClientConfig | undefined) {
    this._pg = new pg.Client(config);

    await this._pg.connect();
    console.log(`Connected to database: ${this._pg.database}`);
  }

  get commands(): Collection<string, Command> {
    return this._commands;
  }
  get events(): Collection<string, Event> {
    return this._events;
  }
  get pg(): pg.Client {
    return this._pg;
  }
}
