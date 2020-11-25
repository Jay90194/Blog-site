import React from 'react'
import Layout from '../component/layout'
import marked from "marked"
import Head from '../component/Head'
import "./Allblog.css"


export const query = graphql`
query MyQuery($slug: String) {
  contentfulAllblogs(slug: {eq: $slug}) {
    title
    body {
      body
    } 
  }
}
`


export default function Allblog({data}) {
const post = data.contentfulAllblogs.body.body
const posts = marked(post)

    return (
       <>
       <Layout>
       <Head 
         title={data.contentfulAllblogs.title}
       />
           <h1 className="title mt-10 font-mono text-center font-bold lg:mt-24 ">{data.contentfulAllblogs.title} </h1>
           <div className=" mx-6 mt-10 text-sm font-sans leading-7 lg:text-xl lg:mx-127" dangerouslySetInnerHTML={{__html :posts}} />
       </Layout>
       </>
    )
}
