import {Context, createContext, useContext, useEffect, useState} from "react";
import {tmiClient} from "../lib/Twitch/tmi";
import {Client, Userstate} from "tmi.js";
import {Observable, Subject} from "rxjs";

interface TmiContextStruct {
    /**
     * The tmi client
     */
    client: Client;

    /**
     * Tmi client connected state
     */
    connected: boolean;

    /**
     * Message observable
     */
    messageObservable: Observable<any>;

    /**
     * Sunscription observable
     */
    subscriptionObservable: Observable<any>;

    /**
     * Bits observable
     */
    bitsObservable: Observable<any>;

    /**
     * Subscription observable
     */
    raidObservable: Observable<any>;
}


// Message Subject/Observable
const messageSubject = new Subject();
const messageObservable = messageSubject.asObservable();

// Subscription Subject/Observable
const subscriptionSubject = new Subject();
const subscriptionObservable = subscriptionSubject.asObservable();

// Bits Subject/Observable
const bitsSubject = new Subject();
const bitsObservable = bitsSubject.asObservable();

// Raided Subject/Observable
const raidSubject = new Subject();
const raidObservable = raidSubject.asObservable();


// Default context Value
const contextDefaultValue = {
    client: null, connected: false,
    messageSubject,
    messageObservable, subscriptionObservable, bitsObservable, raidObservable
}

// Init context
const TmiContext: Context<TmiContextStruct> = createContext(contextDefaultValue);


/**
 * Init tmi client
 */
const initTmiAndListen = async () => {
    // Init tmi client
    const client = tmiClient();
    await client.connect();

    // Detect message events
    client.on('message', (channel, userstate, message, self) => {
        // if (self) {
        //     return;
        // }

        console.log(message);
        // Resend original message
        messageSubject.next({
            channel,
            userstate,
            message
        });
    });

    client.on("subscription", (channel, username, method, message, userstate) => {
        subscriptionSubject.next({
            channel,
            username,
            method,
            message,
            userstate
        });
    });

    // Detect Raid events
    client.on("raided", (channel, userstate, message) => {
        raidSubject.next({
            channel, userstate, message
        });
    });


    // Detect Cheer events
    client.on("cheer", (channel, userstate: Userstate, message) => {
        console.log(message);
        bitsSubject.next({
           userstate
        });
    });

    return {
        ...contextDefaultValue,
        client,
        connected: false,
    };
};

// Stop tmi
function stopTmi(): Promise<void> {
    messageSubject.complete();
    subscriptionSubject.complete();
    bitsSubject.complete();
    raidSubject.complete();
    return;
}

/**
 * Tmi context provider
 *
 * @param children
 * @constructor
 */
export const TmiProvider = ({children}) => {

    const [tmiStruct, setTmiStuct] = useState({...contextDefaultValue});

    useEffect(() => {
        (async () => {
            setTmiStuct(await initTmiAndListen());
        })();

        return () => {
            stopTmi()
        }
    }, []);

    return <TmiContext.Provider value={tmiStruct}>{children}</TmiContext.Provider>;
}

/**
 * Use tmi context
 */
export function useTmiContext() {
    return useContext(TmiContext);
}

