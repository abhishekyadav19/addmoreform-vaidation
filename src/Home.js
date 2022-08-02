import React from 'react'
import { useParams } from 'react-router-dom'
import Pagination from './Pagination'
import { Search } from './Search'
import Stories from './Stories'

const Home = () => {
    
    return (
        <>
            <Search />
            <Pagination />
            <Stories/>
        </>
    )
}

export default Home