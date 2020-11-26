import React from 'react'
import Img from "gatsby-image"
import "../component/styles/Hero.css"



export default function Herodiv(props) {

  
    return (
      <div>
      <p className="Herotitle absolute z-10 text-3xl p-5 font-sans ml-19 font-medium capitalize left-auto tracking-widest mt-48"> beauty without
expression is boring.
</p>
      <Img className="h-129 w-full bg-cover" fluid={props.image} alt="none" />
      <h1 className="text-gray-800 p-4 text-center font-medium capitalize text-xl mb-5 lg:text-2xl" >Recent Blogs</h1>
      </div> 

    
    )
}
