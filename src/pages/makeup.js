import React from 'react'
import Layout from '../component/layout'
import Blogsection from "../component/blogsection"
import {useStaticQuery} from "gatsby"
import Banner from "../component/banner"
import SEO from '../component/SEO'



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
        featureImage {
          fluid(toFormat: WEBP) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
}

`)
    
    
    return (
        <>
        <Layout>
        <SEO
        title="MakeUp" />
        <Banner 
          title="MAKEUP"
       
        />
         <div>
         {data.allContentfulAllblogs.edges.map((edge) =>{
           return (
        <Blogsection 
        title={edge.node.title}
        date={edge.node.date}
        shortdescription={edge.node.shortDescription}
        path={edge.node.slug}
        image={edge.node.featureImage.fluid}
        />
        )})}
         </div>
        </Layout>
        </>
    )
}
