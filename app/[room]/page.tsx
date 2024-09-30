"use client";
import { useEffect } from "react";
import { io } from "socket.io-client";
import CharRoom from "./component/chatRoom/chatRoom";
import ParticipantCounter from "./component/ParticipantCounter/ParticipantCounter";
/* 
import React, { useEffect } from 'react'
import io from 'socket.io-client'

export default Test 
let socket
*/

const Test = () => {};

export default function Room(props: any) {
  console.log(props);

  let socket: any;

  const END_POINT = "http://localhost:3000/";

  useEffect(() => {
    socket = io(END_POINT);
    socket.emit("start", { status: "happy" });
  }, []);

  return (
    <main className="shadow-xl w-full mx-2 text-8xl ">
      <div className="w-full flex bg-white h-full">
        <CharRoom room={props.params.room} />
        <ParticipantCounter room={props.params.room} />
      </div>
    </main>
  );
}
