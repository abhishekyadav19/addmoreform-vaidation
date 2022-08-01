const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "GET_STORIES":
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages
            };
        case "NEXT_PAGE":
            return {
                ...state,
                page: state.page + 1
            };
        case "PREV_PAGE":
            let pageNum = state.page - 1;
            if (pageNum <= 0) {
                pageNum = 0;
            }
            return {
                ...state,
                page: pageNum
            };
        case "SEARCH_POST":
            return {
                ...state,
                query: action.payload
            };
            case "REMOVE_POST":
                alert("Are You Sure to Remove")
                return {
                    ...state,
                    hits:state.hits.filter((item)=>item.objectID!==action.payload)
                }
          
    }
    return state;

}

export default reducer