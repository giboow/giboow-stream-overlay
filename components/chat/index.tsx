import {useTmiContext} from "../../context/tmi";
import {useEffect, useState} from "react";
import {MessageQueue} from "./index.style";
import Message from "./message";


let messageSubscription = null;
export default function Index() {
    const {messageObservable} = useTmiContext();

    const [messages, setMessages] = useState(['Cool', 'Heah']);

    useEffect(() => {
        messageSubscription = messageObservable.subscribe(message => {
            messages.push(message)
            setMessages(messages);
        });

        return () => {
            messageSubscription.unsubscribe();
        }
    }, [])


    return (
        <>

            <MessageQueue>
                {messages.map((message, index) => (
                    <Message key={index}  message={message}/>
                ))}
            </MessageQueue>
        </>
    )
}
