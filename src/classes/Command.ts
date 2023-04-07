import {
  ApplicationCommandOptionType,
  ChatInputCommandInteraction,
} from "discord.js";
import { CommandOptionData } from "../types/CommandOptionData";
import Client from "./Client";
import { StringCommandOptionData } from "../types/StringCommandOptionData";
import { NumberCommandOptionData } from "../types/NumberCommandOptionData";

export default class Command {
  private _name: string | undefined;
  private _description: string | undefined;
  private _execute: Function;
  private _options: CommandOptionData[] = [];

  constructor(name?: string, description?: string) {
    if (name != undefined) this._name = name;
    if (description != undefined) this._description = description;
    this._execute = () => {};
  }

  setName(name: string) {
    this._name = name;
    return this;
  }

  setDescription(description: string) {
    this._description = description;
    return this;
  }

  addStringOption(config: StringCommandOptionData) {
    if (config.required == undefined) config.required = true;
    this._options.push({
      ...config,
      type: ApplicationCommandOptionType.String,
    });
    return this;
  }

  addIntegerOption(config: NumberCommandOptionData) {
    if (config.required == undefined) config.required = true;
    this._options.push({
      ...config,
      type: ApplicationCommandOptionType.Integer,
    });
    return this;
  }

  addBooleanOption(config: CommandOptionData) {
    if (config.required == undefined) config.required = true;
    this._options.push({
      ...config,
      type: ApplicationCommandOptionType.Boolean,
    });
    return this;
  }

  addUserOption(config: CommandOptionData) {
    if (config.required == undefined) config.required = true;
    this._options.push({
      ...config,
      type: ApplicationCommandOptionType.User,
    });
    return this;
  }

  addChannelOption(config: CommandOptionData) {
    if (config.required == undefined) config.required = true;
    this._options.push({
      ...config,
      type: ApplicationCommandOptionType.Channel,
    });
    return this;
  }

  addRoleOption(config: CommandOptionData) {
    if (config.required == undefined) config.required = true;
    this._options.push({
      ...config,
      type: ApplicationCommandOptionType.Role,
    });
    return this;
  }

  addMentionableOption(config: CommandOptionData) {
    if (config.required == undefined) config.required = true;
    this._options.push({
      ...config,
      type: ApplicationCommandOptionType.Mentionable,
    });
    return this;
  }

  addNumberOption(config: NumberCommandOptionData) {
    if (config.required == undefined) config.required = true;
    this._options.push({
      ...config,
      type: ApplicationCommandOptionType.Number,
    });
    return this;
  }

  addAttachmentOption(config: CommandOptionData) {
    if (config.required == undefined) config.required = true;
    this._options.push({
      ...config,
      type: ApplicationCommandOptionType.Attachment,
    });
    return this;
  }

  toJSON() {
    return {
      name: this._name,
      description: this._description,
      options: this._options,
    };
  }

  get name(): string | undefined {
    return this._name;
  }

  get description(): string | undefined {
    return this._description;
  }

  get options(): CommandOptionData[] {
    return this._options;
  }

  get execute(): Function {
    return this._execute;
  }
}
