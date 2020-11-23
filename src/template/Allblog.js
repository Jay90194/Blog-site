import React from 'react'
import Layout from '../component/layout'
import marked from "marked"
import Head from '../component/Head'



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
           <h1 className="text-4xl mt-10  font-serif text-center font-bold lg:mt-24 lg:text-6xl">{data.contentfulAllblogs.title} </h1>
           <section className="mx-6 mt-10 text-sm  font-sans leading-7 lg:mx-24" dangerouslySetInnerHTML={{__html :posts}} />
       </Layout>
       </>
    )
}
