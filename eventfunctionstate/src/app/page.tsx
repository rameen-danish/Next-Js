"use client"
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  // Making state
  const [name,setName] = useState("One")
  // creating a function for state
  const func1 = () =>{
     setName("Two")                // Updating value of state
  }      
  //creating function for event
  const func =(allow:any)=>{
    alert(allow)
  }
  return (
    <main className={styles.main}>
      <h1>Event , Function and State {name}</h1>
      <button onClick={()=>func("First Event")}>Event</button>
      <button onClick={()=>func1()}>State Update Click Me</button>
    </main>
  );
}
