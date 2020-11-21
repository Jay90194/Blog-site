import React from 'react'
import "./styles/Aboutme.css"
import Lips from "../image/aboutmelips.png"
import bb from "../image/bb.png"



export default function Aboutme() {
    return (
        <>
        
    <section className=" overflow-hidden bg-transparent lg:h-129">
        <div className=" mx-auto px-6  py-6">
            <div className=" lg:h-129 pb-5 lg:flex items-center  lg:-ml-64">
            <div className="mt-8 lg:mt-0 lg:w-1/2  lg:mx-20">
                    <div className="flex items-center lg:h-129 justify-center lg:justify-end">
                        <div className="max-w-lg h-autolg:ml-32">
                            <img className=" mx-auto w-48 h-48 lg:h-127 lg:w-127 object-cover object-center rounded-full lg:ml-40" src="https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt=""/>
                        </div>
                        <img className="absolute -mt-40 ml-32 w-56 Lips lg:w-64 lg:-mt-56 lg:mb-20 lg:ml-129" src={Lips} alt="none"/>
                    </div>
                </div>
                <div className="text-center overflow-hidden lg:ml-15 py-16 lg:w-1/2">
                    <h2 className="titleabout text-black  text-2xl lg:pb-5 lg:text-5xl">Disha Agarwal</h2>

                    <p className="text-gray-700 pt-12 lg:mx-auto lg:max-w-md mt-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum in sed non alias, fugiat, commodi nemo ut fugit corrupti dolorem sequi ex veniam consequuntur id, maiores beatae ipsa omnis aliquam?
                    </p>
                </div>
                <img className="bb absolute -mt-10 ml-56 w-40 h-40 lg:w-64 lg:h-64 " src={bb} alt=""none/>
            </div>
        </div>
    </section>
        </>
    )
}
