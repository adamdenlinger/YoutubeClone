'use client'

import styles from "./page.module.css";
import { useState } from "react";
import { useEffect } from "react";

function add(a: number, b: number): number {
    return a + b;
}



export default function Profile() {

    const [count, setCount] = useState(0);

    return (
        <div className = {styles.mainDiv}>
            <div className = {styles.counterDiv}>
                <button className = {styles.button} onClick = {() => setCount(count - 1)}>-</button>
                <h1 className = {styles.counter}>{count}</h1>
                <button className = {styles.button} onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    )
}