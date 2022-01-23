import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Tmi from "../lib/tmi";
import {useTmiContext} from "../context/tmi";
import {Client} from "tmi.js";

export default function Home() {

    const {client, connected} = useTmiContext();
    console.log(client, connected);

    return (
        <>
            <div>Hello</div>
        </>
    )
}
