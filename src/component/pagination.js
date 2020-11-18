import React from 'react'
import {Link} from "gatsby"



export default function Pagination(props) {


    return (
        <>
        
    <div className="flex">
        <Link to={props.prevPage} className="mx-1 px-3 py-2 bg-white text-gray-500 rounded-md cursor-not-allowed">
            previous
        </Link>

        <Link to="#" className="mx-1 px-3 py-2 bg-white text-gray-700 hover:bg-indigo-600 hover:text-white rounded-md">
            1
        </Link>

        <Link to="#" className="mx-1 px-3 py-2 bg-white text-gray-700 hover:bg-indigo-600 hover:text-white rounded-md">
            2
        </Link>

        <Link to="#" className="mx-1 px-3 py-2 bg-white text-gray-700 hover:bg-indigo-600 hover:text-white rounded-md">
            3
        </Link>

        <Link to={props.nextPage} className="mx-1 px-3 py-2 bg-white text-gray-700 hover:bg-indigo-600 hover:text-white rounded-md">
            Next
        </Link>
    </div>

   
        </>
    )
}
