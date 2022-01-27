import {Client} from "tmi.js";

export function tmiClient(): Client {

    let connection: any = {
        reconnect: true,
        secure: true,
    };

    console.log(process.env.TMI_IS_SERVERTEST);
    if (process.env.TMI_IS_SERVERTEST) {
        connection = {
            ...connection,
            server: 'irc.fdgt.dev'
        }
    }

    const client = new Client({
        connection,
        identity: {
            username: process.env.TMI_USERNAME,
            password: process.env.TMI_TOKEN
        },
        channels: [process.env.TMI_CHANNEL]
    });
console.log(client);

    return client;
}
