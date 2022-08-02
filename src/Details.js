import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from './context';


const Details = () => {


    const { hits, isLoading, removeItem } = useGlobalContext();
    const { params } = useParams();

    // useEffect(() => {
    //     console.log(author, "get current url dynamic id");
    // }, [author])


    return (
        <>
            <div className="stories-div stories-details-div">
                {
                    <div className="card" >
                        <h1>Author Name is : {params}</h1>
                        <h2>Title</h2>
                        <p>By <span>author</span> !! <span>num_comments</span> comments</p>
                        <div className="card-button">
                            <Link to="/">
                                Go Back
                            </Link>
                        </div>
                    </div>
                }

            </div>
        </>
    )
}

export default Details