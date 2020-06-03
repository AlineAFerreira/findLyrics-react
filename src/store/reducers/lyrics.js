import { UPDATE_LOADING,UPDATE_RECENTS_VISIBILITY, UPDATE_LYRICS_VISIBILITY, UPDATE_RESULTS, UPDATE_NO_RESULTS } from './../types/lyrics';

const INITIAL_STATE = {
    isFirstLoad: true,
    results: [],
    noResults: false,
    recents: [],
    lyrics: [],
    loading: false,
    showRecents: true
}

export default function(state = INITIAL_STATE, action){
    state.recents = JSON.parse(localStorage.getItem('lastSearches'));

    switch (action.type) {
        case UPDATE_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case UPDATE_RESULTS:
            return {
                ...state,
                results: action.payload
            }
        case UPDATE_NO_RESULTS:
            return {
                ...state,
                noResults: action.payload
            }
        case UPDATE_RECENTS_VISIBILITY:
            return {
                ...state,
                showRecents: action.payload
            }
        case UPDATE_LYRICS_VISIBILITY:
            return {
                ...state,
                lyrics: action.payload
            }    

        default:
          return state
    }
}



