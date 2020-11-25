import React from 'react'
import Layout from "../component/layout"
import {Link} from "gatsby"
import Head from '../component/Head'
export default function Error() {
    return (
       <>
     <Layout>
     <Head 
         title="404 Not Found"
     />
     <div className="h-64 mt-20">
         <h1 className="text-center font-serif text-5xl">ERROR PAGE NOT FOUND</h1>
         <h1 className="text-center font-serif mt-8 text-2xl">Hey! Sexy Are Your Lost?</h1>
         <p className="text-center text-gray-800 mb-10 mt-3 my-auto">Waana Head Home</p>
         <div className="mx-auto text-center ">
         <Link className=" text-2xl font-medium text-purple-700 font-serif" to="/">Home</Link>
         </div>
         </div>
     </Layout>
       </>

    )
}
