import { config } from "dotenv";
import Client from "./classes/Client";
config();

const client = new Client({
  intents: ["GuildMessages", "Guilds", "GuildMembers", "MessageContent"],
});

client.loadCommands({
  clientToken: process.env.TOKEN!,
  commandsFolder: "commands",
  clientId: "",
  globalCommands: true,
  guildId: "",
});
client.loadEvents("events");
client.connectToPostgres({
  database: "",
  port: 0000,
  host: "localhost",
  user: "postgres",
  password: process.env.POSTGRES_PASSWORD,
});

client.login(process.env.TOKEN);
