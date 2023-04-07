import { Message } from "discord.js";
import Client from "../../classes/Client";
import Event from "../../classes/Event";

module.exports = {
  data: new Event().setName("messageCreate").setOnce(false),
  execute: async (message: Message, client: Client) => {
    if (message.author.bot) return;

    client.pg.query(`select * from account where user_id=${message.author.id};`, (err, res) => {
      // if (err) {
      //   client.pg.query(
      //     `insert into account (user_id, guild_id) values (${message.author.id}, ${message.guild?.id});`
      //   );
      // }
      console.log(res,err);
    });
  },
};
