'use client'
import tsk from '../task.module.css';
import { SiGnuprivacyguard } from "react-icons/si";
import { FaUserTie } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaMobileButton } from "react-icons/fa6";
import {increment} from '../counterSlice'
import { useDispatch,useSelector } from "react-redux";
import AXIOS from 'axios'



function Page(){
    const dispatch=useDispatch()
    const count=useSelector((state)=>state.counter.value)
    const testing=()=>{
       

    }
    return(
        <>
    
       <a href="/" className={tsk.close}>x</a>
       <button type="button" onClick={()=>dispatch(increment())}>
        testing server side{count}
       </button>
        <div className={tsk.main}>
            <div className={tsk.logo}>
            <SiGnuprivacyguard  className={tsk.signupicon}/>
            </div>
            <span>Signin Here !</span>
            <form>
            
                <div className={tsk.formgroup}>
                    <label className={tsk.formlabel}><AiOutlineMail />&nbsp;Email</label>
                    <input type="email" className={tsk.forminput}/>
                </div>
                <div className={tsk.formgroup}>
                    <label className={tsk.formlabel}><RiLockPasswordFill />&nbsp;Password</label>
                    <input type="password" className={tsk.forminput}/>
                </div>
                
                <div className={tsk.formgroup} align="center">
                    <label className={tsk.formlabel}></label>
                    <button type="submit" className={tsk.btn}>
                            Signin
                    </button>
                </div>
            </form>

        </div>
        <a href="/signup" className={tsk.textlink}>create a new account created</a>
        <br></br>
        
        </>
    )
}
export default Page;