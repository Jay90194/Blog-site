import React, {useState} from 'react'
import './styles/header.css'
import {Link} from "gatsby"


export default function Header() {
 const [open,setOpen] = useState(true);
    return (
        <>
        <div className={ open? "topnav":"topnav responsive"} id="myTopnav">
        <Link to="/" className="max-w-xs " id="logo">Hippie Girl</Link>
        <Link to="/">Home</Link>
        <Link to="/fashion" >Fashion</Link>
        <Link to="/makeup" >MAKEUP</Link>
        <Link to="/blog" > All Blog</Link>
        <Link to="/contact" >Contact</Link>
        <Link to="#" className="icon hover:bg-white ">
        <i className="fa fa-bars  "onClick={() => setOpen(!open)}></i>
        </Link>
        </div>
        </>
            )
}
