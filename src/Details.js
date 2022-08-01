import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from './context';


const Details = () => {
    const { hits, isLoading, removeItem } = useGlobalContext();
    const { objectID } = useParams();


    return (
        <>
            <div className="stories-div">
                {/* {
                    hits.map((item) => {
                        // const { title, author, objectID, url, num_comments } = item;
                        return ( */}

                            <div className="card" >
                                <h2>{hits.title}</h2>
                                <p>By <span>author</span> !! <span>num_comments</span> comments</p>
                                <div className="card-button">
                                    <a href="url" target="_blank">
                                        Read More
                                    </a>
                                </div>
                            </div>

                        {/* )
                    })
                } */}

            </div>
        </>
    )
}

export default Details