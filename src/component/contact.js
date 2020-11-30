import React from 'react'
import "./styles/contact.css"
import Topline from "../image/TOPLINE.svg"
import lets from '../image/lets.svg'
import arrow from "../image/arrow.svg"




export default function Contact() {

    return (
        <>
        <div>
        <img className="mt-1 h-24 w-full -ml-1 lg:h-full"src={Topline} alt=""/>
      
    </div>  
    <div>
    <img className="mx-auto w-127 mt-5 lg:w-128" src={lets} alt="none" />
        <img className="arrow1 absolute  h-64 ml-65" src={arrow} alt='none'/>
    </div> 
    <div className="forms bg-pink-200 w-full mt-10 text-center max-w-xs rounded-3xl shadow-md overflow-hidden mx-auto lg:max-w-sm">
        <div className="py-4 px-6   ">
            <h2 className="text-center font-bold text-black text-3xl">HIPPIE GIRL</h2>

            <p className="mt-1 text-center text-gray-700">Feel Free To Contact us</p>

            <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/success" name="contact-form" >
            <input type="hidden" name="bot-field" />
            <div className="mt-4 w-full">
        
                    <input className="w-full mt-2 py-2 px-4 bg-white text-gray-700 border border-gray-300 rounded block placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:shadow-outline" name="name" type="text" placeholder="Your Name"/>
                </div>

                <div className="mt-4 w-full">
                    <input className="w-full mt-2 py-2 px-4 bg-white text-gray-700 border border-gray-300 rounded block placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:shadow-outline" name="email" type="email" placeholder="Email Address" aria-label="Email Address"/>
                </div>

                <div className="mt-4 w-full ">
                    <input className="w-full mt-2 h-20 py-2 px-4 bg-white text-gray-700 border border-gray-300 rounded block placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:shadow-outline" name="message" type="text" placeholder="Your Message" />
                </div>
                
                <div className="flex justify-between items-center mt-4">

                    <button className="py-2 px-4 bg-gray-700 mx-auto text-white rounded hover:bg-gray-600 focus:outline-none" type="submit">
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    </div>
   

        </>

    )
}
