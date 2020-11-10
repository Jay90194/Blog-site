import React from 'react'
import '../pages/global.css'
import Header from "./header"
import Footer from "../component/footer"


export default function Layout(props) {
    return (
        <>
        <Header />
        {props.children}
        <Footer />
        </>
    )
}
