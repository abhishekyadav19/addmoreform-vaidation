import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';

const AppContext = createContext();

let url = "https://hn.algolia.com/api/v1/search?";
// let url = "https://www.omdbapi.com/?apikey=10d214da%20&s=titanic";


const initialState = {
  isLoading: true,
  query:"",
  tags:"",
  objectID:"",
  nbPages: 0,
  page: 0,
  hits: []
}

const Context = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)


  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages
        },
      })
    } catch (error) {
    }
  }

  const getnextPage = () => {
    dispatch({
      type: "NEXT_PAGE"
    })
  }

  const getprevPage = () => {
    dispatch({
      type: "PREV_PAGE"
    })
  }
  useEffect(() => {
   let timer = setTimeout(() => {
      fetchApiData(`${url}query=${state.query}&page=${state.page}`)
      // fetchApiData(`${url}&page=${state.page}&tags=${state.tags}`)

    }, 1000);
    return () => {
      clearTimeout(timer)
    }
  }, [state.query,state.page])

  const searchPost = (searchquery) => {
    dispatch({
      type: "SEARCH_POST",
      payload: searchquery
    })
  }

  const removeItem=(id)=>{
    dispatch(
      {
        type:"REMOVE_POST",
        payload:id
      }
    )
  }
  return (
    <>
      <AppContext.Provider value={{ ...state, getnextPage, getprevPage, searchPost,removeItem }}>{children}</AppContext.Provider>
    </>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { Context, useGlobalContext, AppContext };