import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context'


const Stories = () => {
    const { hits, isLoading, removeItem, query } = useGlobalContext();
    // const {  } = hits;

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
                    hits.filter((element, i) => {
                        if (query === '') {
                            return element
                        } else if (element.author.toLowerCase().includes(query)) {
                            return element

                        }
                    }).
                        map((item) => {
                            const { title, author, objectID, num_comments } = item;
                            return (

                                <div className="card" key={objectID}>
                                    <h2>{title}</h2>
                                    <p>By <span>{author}</span> !! <span>{num_comments}</span> comments</p>
                                    <div className="card-button">
                                        <NavLink to={`details/${objectID}`} >
                                            Details
                                        </NavLink>
                                        <a onClick={() => removeItem(objectID)}>
                                            Remove
                                        </a>
                                    </div>
                                </div>

                            )
                        })
                }

            </div>
        </>
    )
}
export default Stories