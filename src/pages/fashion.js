import React from 'react'
import Blogsection from '../component/blogsection'
import Layout from '../component/layout'
import {useStaticQuery} from "gatsby"


export default function Fashion() {

const data = useStaticQuery(graphql`
    {
      allContentfulFashion {
        edges {
          node {
            slug
            title
            date(fromNow: true)
            shortDescription
          }
        }
      }
    }
  `)



    return (
        <>
        <Layout>
       <div>
       {data.allContentfulFashion.edges.map((edge) =>{
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
