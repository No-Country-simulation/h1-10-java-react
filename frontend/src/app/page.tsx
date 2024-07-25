'use client'
import Login from "@/components/Login/Logear";
import { useState } from "react";

export default function Home() {
const [logeado,setLOgeado] = useState(false)
return <main className='container mx-auto' >
    {!logeado && <Login/> }
  </main>
}
