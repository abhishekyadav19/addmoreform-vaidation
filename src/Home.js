import React from 'react'
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