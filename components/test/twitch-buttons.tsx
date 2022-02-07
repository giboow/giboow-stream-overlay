import {useTmiContext} from "../../context/tmi.context";

export default function TwitchButtons() {

    const {client} = useTmiContext();


    function launchSuscribeEvent() {
        client.say(process.env.CHANNEL, "subscription");
    }

    return (
        <div>
            <button onClick={launchSuscribeEvent}>Subscriber</button>
        </div>
    )
}
