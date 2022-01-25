import {useTmiContext} from "../../context/tmi.context";
import {useEffect, useState} from "react";
import {MessageQueue} from "./index.style";
import Message from "./message";


let messageSubscription = null;

export default function Index() {
    const {chatObservable} = useTmiContext();

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        messageSubscription = chatObservable.subscribe(message => {
            setMessages(oldMessages => {
                return [...oldMessages, message];
            });
        });

        return () => {
            messageSubscription?.unsubscribe();
        }
    }, [])


    return (
        <>
            <MessageQueue>
                {messages.map((message, index) => (
                    <Message key={index} message={message}/>
                ))}
            </MessageQueue>
        </>
    )
}


