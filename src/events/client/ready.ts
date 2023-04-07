import Client from "../../classes/Client";
import Event from "../../classes/Event";

module.exports = {
    data: new Event()
        .setName("ready")
        .setOnce(true),
    execute: async (client: Client) => {
        console.log(`Logged in as ${client.user?.tag}!`)
    }
}