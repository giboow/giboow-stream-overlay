import {Component, Context, createContext, useContext, useEffect, useState} from "react";
import {tmiClient} from "../lib/tmi";
import {Client} from "tmi.js";

interface TmiContextStruct {
    /**
     * The tmi client
     */
    client: Client;

    /**
     * Tmi client connected state
     */
    connected: boolean;
}

const TmiContext: Context<TmiContextStruct> = createContext({client: null, connected: false});

export const TmiProvider = ({children}) => {

    const [tmiStruct, setTmiStuct] = useState({client: null, connected: false});

    const getConnectedClient = async () => {
        setTmiStuct({client: await tmiClient().connect(), connected: true});
    };
    useEffect(() => {
        getConnectedClient()
    }, []);
    return <TmiContext.Provider value={tmiStruct}>{children}</TmiContext.Provider>;
}

export function useTmiContext() {
    return useContext(TmiContext);
}

