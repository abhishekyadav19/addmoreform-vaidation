import React from 'react'
import { useGlobalContext } from './context'

export const Search = () => {
  const {query,searchPost}=useGlobalContext()
  return (
    <>
    <h1>HEllo Find the below</h1>
    <form action="">
        <div>
            <input type="text" placeholder='search here' value={query} onChange={(e)=>searchPost(e.target.value)} />
        </div>
    </form>
    </>
  )
}
