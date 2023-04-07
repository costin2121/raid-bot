import {
  ChatInputApplicationCommandData,
  ChatInputCommandInteraction,
} from "discord.js";
import Command from "../../classes/Command";
import Client from "../../classes/Client";

module.exports = {
  data: new Command().setName("ping").setDescription("Show the bot's ping"),
  execute: async (interaction: ChatInputCommandInteraction, client: Client) => {
    interaction.reply({ content: `Pong! \`${client.ws.ping}\`ms!` });
  },
};
