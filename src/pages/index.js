import React from "react"
import Aboutme from "../component/aboutme"
import Herodiv from "../component/Herodiv"
import Igsection from "../component/igsection"
import Layout from "../component/layout"
import SimpleSlider from "../component/slider"
import "./global.css"



export default function Home() {
  
  return (
    <>
    <Layout>
    <Herodiv />
    <SimpleSlider />
    <SimpleSlider />
    <Igsection />
    <Aboutme  />
    </Layout>

    </>


  )
}
