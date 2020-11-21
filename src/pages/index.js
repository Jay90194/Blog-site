import React from "react"
import Aboutme from "../component/aboutme"
import Herodiv from "../component/Herodiv"
import Igsection from "../component/igsection"
import Layout from "../component/layout"
import "./global.css"
import {graphql,useStaticQuery} from "gatsby"
import Blogpiece from "../component/blogpiece"



export default function Home() {
  const data = useStaticQuery(graphql`
  {
    allContentfulAllblogs (sort: {order: DESC, fields: date},limit: 6) {
      edges {
        node {
          date(fromNow: true)
          title 
          slug
          shortDescription
        }
      }
    }
  }
 `)

  return (
    <>
    <Layout>
    <Herodiv />
      
    <div className="grid grid-cols-2  lg:grid-cols-3 "> 
         {data.allContentfulAllblogs.edges.map((edge)=>{
           return(
          <Blogpiece 
            title={edge.node.title}
            path={edge.node.slug}
          />
          )
        })}
        </div>
               
    <Igsection />
    <Aboutme  />
    </Layout>

    </>


  )
}
