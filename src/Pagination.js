import React from 'react'
import { useGlobalContext } from './context';

const Pagination = () => {
    const { page, nbPages,getprevPage,getnextPage } = useGlobalContext();

    return (
        <>
            <div className='pagination-btn'>
                <button onClick={()=>getprevPage()}>PREV</button>
                <p>{page} of {nbPages}</p>
                <button onClick={()=>getnextPage()}>NEXT</button>
            </div>
        </>
    )
}

export default Pagination
