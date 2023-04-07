import { config } from "dotenv";
import Client from "./classes/Client";
config();

const client = new Client({
  intents: ["GuildMessages", "Guilds", "GuildMembers", "MessageContent"],
});

client.loadCommands({
  clientToken: process.env.TOKEN!,
  commandsFolder: "commands",
  clientId: process.env.CLIENT_ID,
  globalCommands: true,
  guildId: process.env.GUILD_ID,
});
client.loadEvents("events");
client.connectToPostgres({
  database: process.env.POSTGRES_DB,
  port: process.env.POSTGRES_PORT,
  host: "localhost",
  user: "postgres",
  password: process.env.POSTGRES_PASSWORD,
});

client.login(process.env.TOKEN);
