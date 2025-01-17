"use client"

import { useState } from "react"
import axios  from "axios";

export function Signup(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handler = function (){
        axios.post("http://localhost:3000/api/user", {username, password})
    }
    return (
        <div className="flex flex-col h-screen justify-center ">
            <div className="flex justify-center">
                <div className="border rounded pb-4">
                <input type="text" placeholder="Username" className="p-2 m-2 border border-black-400" onChange={((e)=>setUsername(e.target.value))}/>
                <br />
                <input type="password" placeholder="Password" className="p-2 m-2 border border-black-400" onChange={((e)=>setPassword(e.target.value))} />
                <br />
           <div className="flex justify-center mt-4 " >
            <button onClick={handler} className=" bg bg-blue-300 px-3 border rounded py-2">Sign up</button>
           </div>
            
            </div>
        </div>
        </div>
    )
}