import React from 'react'
import "./styles/banner.css"


export default function Banner(props) {
    return (
        <div className="w-full overflow-hidden h-40">
            <h3 className="titlehead text-xl text-center pt-12 mt-4 lg:text-4xl">{props.title} </h3>
        </div>

    )
}
