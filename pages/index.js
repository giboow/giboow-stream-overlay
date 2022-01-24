import {useTmiContext} from "../context/tmi";
import {useEffect} from "react";


let messageObs = null;
let bitsObs = null;
export default function Home() {
    const {messageObservable, bitsObservable, client} = useTmiContext();
    useEffect(() => {
        console.log("subscribing to messages");
        messageObs = messageObservable.subscribe(message => {
            console.log("New message " , message);
        });

        bitsObs = bitsObservable.subscribe(message => {
            console.log("New bits ", message);
        });

        return () => {
            messageObs?.unsubscribe();
            bitsObs?.unsubscribe();
        }
    }, [])

    function click() {
        return client.say(process.env.TMI_CHANNEL, 'bits --bitscount 999999 Woohoo!');
    }

    return (
        <>
            <button onClick={click}>Hello</button>
        </>
    )
}
