'use client'
import { useRouter } from "next/navigation"
import { useState } from "react";
import AXIOS from 'axios'
export default function Page(){
    const router=useRouter()
    const [user,setUser]=useState("")
    const [passw,setPassw]=useState("")
    const handler=(e)=>
    {
       
        e.preventDefault()
       AXIOS.post(url,{user,passw}).then((res)=>{
         alert(res.data)
       })
      
        if(user=="admin" && passw=="admin123"){
          router.push("/admin/dashboard")

        }
        else{
            alert("increate password or username")
        }
       

    }
    return(
        <>
        <h1>admin Login</h1>
        <form onSubmit={handler}>
            <input type="text" onChange={(e)=>setUser(e.target.value)} placeholder="username"/>
            <br></br>
            <input type="password" onChange={(e)=>setPassw(e.target.value)} placeholder="password"/>
            <br></br>
            <button type="submit">
                login
            </button>
            
                   </form>
        </>
    )
}