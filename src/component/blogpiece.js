import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'


export default function Blogpiece(props) {

    return (
        <>
    
        <div>
         <div className="box-border mt-10 max-w-xs mx-auto px-1 lg:max-w-sm lg:mt-5  lg:ml-12 overflow-hidden ">
            <Img className="w-48 h-64  object-cover rounded-xl  lg:w-full " fluid={props.image} alt="avatar"/>
            <div className="text-center h-32">
            <Link to={`/blog/${props.path}`} className="block text-base  -ml-5 mb-4 lg:mb-6  font-serif pt-4 px-3 lg:text-3xl text-gray-800 font-bold">{props.title}</Link>
             <Link to={`/blog/${props.path}`} className="px-2 py-3 mt-10 my-2 text-center  bg-pink-200 text-xs text-gray-900 font-bold uppercase hover:text-yellow-600 focus:bg-gray-400">READ MORE</Link>
            </div>
        </div> 
        </div>

        </>
    )
}
