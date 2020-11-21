import React from 'react'
import Layout from '../component/layout'
import Blogsection from "../component/blogsection"
import {useStaticQuery} from "gatsby"
import Banner from "../component/banner"
import pouch from "../image/pouch.png"



export default function Makeup() {
    const data = useStaticQuery(graphql`
{
  allContentfulAllblogs(sort: {order: DESC, fields: date}, filter: {category: {eq: "Makeup"}}) {
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
        <Banner 
          title="MAKEUP"
          image1={pouch}
        />
         <div>
         {data.allContentfulAllblogs.edges.map((edge) =>{
           return (
        <Blogsection 
        title={edge.node.title}
        date={edge.node.date}
        shortdescription={edge.node.shortDescription}
        path={edge.node.slug}
        />
        )})}
         </div>
        </Layout>
        </>
    )
}
