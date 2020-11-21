import React from 'react'
import "./styles/banner.css"


export default function Banner(props) {
    return (
        <div className="w-full overflow-hidden h-40">
        <img id="optional1" className="img1 lg:-mt-5  lg:w-40 lg:h-48 lg:float-right" src={props.image1} />
        <img id="optional2" src={props.image2} />
        <div className="h-full w-129 mx-auto">
            <h3 className="titlehead text-xl text-center pt-12 mt-4 lg:text-4xl">{props.title} </h3>
            </div>
        </div> 
    )
}
