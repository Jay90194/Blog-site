import React from 'react'
import Blogsection from '../component/blogsection'
import Layout from '../component/layout'
import {useStaticQuery} from "gatsby"
import Banner from '../component/banner'



export default function Fashion() {

const data = useStaticQuery(graphql`
{
  allContentfulAllblogs(sort: {order: DESC, fields: date}, filter: {category: {eq: "Fashion"}}) {
    edges {
      node {
        date(fromNow: true)
        title
        slug
        shortDescription
        topImage {
          fluid {
            ...GatsbyContentfulFluid
          }
          
        }
      }
    }
  }
}

`)
 console.log(data)



    return (
        <>
        <Layout>
        <Banner 
          title="FASHION"
        />
       <div>
       {data.allContentfulAllblogs.edges.map((edge) =>{
           return (
        <Blogsection 
        title={edge.node.title}
        date={edge.node.date}
        shortdescription={edge.node.shortDescription}
        path={edge.node.slug}
        image={edge.node.topImage.fluid}
        />
        )})}
        </div>
        </Layout>

        </>
    )
}
