import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context'

const Stories = () => {
    const { hits, isLoading, removeItem } = useGlobalContext();


    if (isLoading) {
        return (
            <>
                <h1>Loading .....</h1>
            </>
        );
    }

    return (
        <>
            <div className="stories-div">
                {
                    hits.map((item) => {
                        const { title, author, objectID, url, num_comments } = item;
                        return (
                            <NavLink to="/details">
                                <div className="card" key={objectID}>
                                    <h2>{title}</h2>
                                    <p>By <span>{author}</span> !! <span>{num_comments}</span> comments</p>
                                    <div className="card-button">
                                        <a href={url} target="_blank">
                                            Read More
                                        </a>
                                        <a onClick={() => removeItem(objectID)}>
                                            Remove
                                        </a>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })
                }

            </div>
        </>
    )
}
export default Stories