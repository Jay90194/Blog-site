import React, {useState} from 'react'
import './styles/header.css'
import {Link} from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAlignJustify } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
 const [open,setOpen] = useState(true);
    return (
        <>
        <div className={ open? "topnav":"topnav responsive"} id="myTopnav">
        <Link to="/" className="max-w-xs" id="logo">Hippie Girl</Link>
        <Link to="/">Home</Link>
        <Link to="/fashion" >Fashion</Link>
        <Link to="/makeup" >MAKEUP</Link>
        <Link to="/blog" > All Blog</Link>
        <Link to="/contact" >Contact</Link>
        <Link to="#" className="icon hover:bg-white ">
        <i><FontAwesomeIcon icon={faAlignJustify} onClick={() => setOpen(!open)} /></i>
        </Link>
        </div>
        </>
            )
}
