import { CommandInteraction } from "discord.js";
import Client from "../../classes/Client";
import Event from "../../classes/Event";

module.exports = {
  data: new Event().setName("interactionCreate").setOnce(false),
  execute: async (interaction: CommandInteraction, client: Client) => {
    if (interaction.isChatInputCommand()) {
      const cmd = client.commands.get(interaction.commandName);

      if (!cmd) return;

      await cmd.execute(interaction, client);
    }
  },
};
