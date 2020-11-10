import React, {useState} from 'react'
import './header.css'
import {Link} from "gatsby"


export default function Header() {
 const [open,setOpen] = useState(false);
    return (
        <div class={ open? "topnav":"topnav responsive"} id="myTopnav">
        <Link to="/" id="logo">Hippie Girl</Link>
        <Link to="/">Home</Link>
        <Link to="/fashion">Fashion</Link>
        <Link to="/review">Product Reviews</Link>
        <Link to="/blog"> All Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="#" class="icon">
        <i class="fa fa-bars"onClick={() => setOpen(!open)}></i>
        </Link>
        </div>
            )
}
