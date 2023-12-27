'use client'
import Homeheader from "../homeheader";
import tsk from '../task.module.css';
import { SiGnuprivacyguard } from "react-icons/si";
import { FaUserTie } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaMobileButton } from "react-icons/fa6";
import  AXIOS from 'axios';
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { useSelector } from "react-redux";



function Page(){
     const count=useSelector((state)=>state.counter.value)
    const nav=useRouter()
    const [user,setUser]=useState("");
    const[eml,setEMl]=useState("")
    const [mb,setMb]=useState("")
    const[passw,setPassw]=useState("")
    const signUp=(e)=>{
        e.preventDefault();
        alert("button click")
        const url="http://localhost:9000/route/userreg"
         AXIOS.post(url,{user,eml,mb,passw}).then((res)=>{
            setUser("")
            setEMl("")
            setPassw("")
            setMb("")
          
                alert(res.data)
                nav.push("/signin")
        })

    }
    return(
        <>  
        <a href="/" className={tsk.close}>x
        {count}
        </a>
        <div className={tsk.main}>
            <div className={tsk.logo}>
            <SiGnuprivacyguard  className={tsk.signupicon}/>
            </div>
            <span>Signup Here !</span>
            <form onSubmit={signUp}>
                <div className={tsk.formgroup}>
                    <label className={tsk.formlabel}><FaUserTie />&nbsp;Username</label>
                    <input value={user} onChange={(e)=>setUser(e.target.value)} className={tsk.forminput}/>
                </div>
                <div className={tsk.formgroup}>
                    <label className={tsk.formlabel}><AiOutlineMail />&nbsp;Email</label>
                    <input value={eml}onChange={(e)=>setEMl(e.target.value)} type="email" className={tsk.forminput}/>
                </div>
                <div className={tsk.formgroup}>
                    <label className={tsk.formlabel}><RiLockPasswordFill />&nbsp;Password</label>
                    <input value={passw} onChange={(e)=>setPassw(e.target.value)} type="password" className={tsk.forminput}/>
                </div>
                <div className={tsk.formgroup}>
                    <label className={tsk.formlabel}><FaMobileButton />&nbsp;Contact Number</label>
                    <input  value={mb} type="tel"onChange={(e)=>setMb(e.target.value)}  className={tsk.forminput}/>
                </div>
                <div className={tsk.formgroup} align="center">
                    <label className={tsk.formlabel}></label>
                    <button type="submit" className={tsk.btn}>
                            Create account
                    </button>
                </div>
            </form>

        </div>
        <a href="/signin" className={tsk.textlink}>already account created</a>
        <br></br>
        
       
        
        </>
    )
}
export default Page;