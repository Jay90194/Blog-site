import React from 'react'
import Blogsection from '../component/blogsection'
import Layout from "../component/layout"
import { graphql,StaticQuery } from "gatsby"



export default function blog() {

    const datafetch = StaticQuery(graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`)

    return (
        <>
        <Layout >
        </Layout>
      
       
        </>
    )
}
