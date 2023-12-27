'use client'
import sty from './page.module.css'
import log from'./images/logo.jpg'
import Image from 'next/image';
import { useSelector } from 'react-redux';

function Homeheader(){
  const count=useSelector((state)=>state.counter.value)
    return(
        <>
        {count}
        <div className={sty.nav}>
            <div className={sty.logo}>
                <Image src={log}/>
            </div>
            <ul className={sty.navas}>
                <li className={sty.navitem}>
                    <a href="/">Home</a>
                </li>
                <li className={sty.navitem}>
                    <a href="/signup">Signup</a>
                </li>
                <li className={sty.navitem}>
                    <a href="/signin">Signin</a>
                </li>
               
            </ul>
        </div>
        </>
    )
}
export default Homeheader;