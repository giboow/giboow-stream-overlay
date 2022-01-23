import {Client} from "tmi.js";

export const tmiClient = () => {
    return new Client({
        connection: {
            reconnect: true,
            secure: true,
            server: "irc.fdgt.dev"
        },
        identity: {
            username: process.env.TMI_USERNAME,
            password: process.env.TMI_TOKEN
        },
        channels: [process.env.TMI_CHANNEL]
    });
}
