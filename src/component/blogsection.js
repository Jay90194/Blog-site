import React from 'react'
import '../css/index.css'
import {Link} from "gatsby"
import Img from "gatsby-image"


export default function Blogsection(props) {
    return (
        <> 
        <section className=" lg:p-20 lg:flex lg:justify-center">
        <div className="bg-pink-200 m-5 overflow-hidden lg:overflow-hidden lg:min-w-full rounded-t-lg  lg:-my-8 lg:mx-8 lg:flex  lg:max-w-full lg:h-200 lg:shadow-lg lg:rounded-lg">
            <div className=" overflow-hidden lg:w-1/2">
            <div className=" h-65  rounded-lg bg-cover border-black border-solid border lg:rounded-lg lg:h-full" >
                <Img className=" rounded-lg " fluid={props.image} />
            </div>
            </div>

            <div className="py-6 px-6 max-w-xl lg:max-w-6xl lg:w-full">
          
                <h2 className="text-4xl text-gray-800 font-bold md:text-5xl">{props.title} </h2>
              
                <p className="mt-4 text-gray-600">{props.shortdescription}</p>
                
                <div className="mt-20 lg:mt-32">
                <Link to={`/blog/${props.path}`} className="bg-white text-gray-900 px-5 py-3 hover:text-yellow-500 font-semibold rounded ">READ</Link>
                     <p className="float-right  bg-white font-normal text-xs rounded-xl p-1 lg:ml-20">{props.date}</p>
                </div>
            </div>
        </div>
    </section>  

        </>
   
    )
}
