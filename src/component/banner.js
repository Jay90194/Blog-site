import React from 'react'
import "./styles/banner.css"
export default function Banner(props) {
    return (
        <div className="w-full h-40">
        <div className="h-full w-129 mx-auto">
            <h3 className="titlehead text-3xl text-center pt-12 mt-4 lg:text-4xl">{props.title} </h3>
            </div>
        </div> 
    )
}
