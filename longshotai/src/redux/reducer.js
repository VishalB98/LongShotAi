const initialState = {
    apiJsonData: null,
    keywordResult:[],
    intentMap: null,
    keywordDifficulty:null,
    searchFilter: "",
    keywordMetric: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_JSON_DATA':
            return {
                ...state,
                apiJsonData: action.payload,
            };
        case 'SET_KEYWORD_RESULT':
            return {
                ...state,
                keywordResult: action.payload,
            };
        case 'SET_INTENT_MAP':
            return {
                ...state,
                intentMap: action.payload,
            };
        case 'SET_KEYWORD_DIFFICULTY':
            return {
                ...state,
                keywordDifficulty: action.payload,
            };
        case 'SET_SEARCH_FILTER':
            return {
                ...state,
                searchFilter: action.payload,
            };
        case 'SET_KEYWORD_METRIC':
            return {
                ...state,
                keywordMetric: action.payload,
            };
        default:
            return state
    }
}

export default reducer;