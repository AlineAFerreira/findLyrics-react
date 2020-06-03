import { createStore, combineReducers } from 'redux';

const INITIAL_STATE = {
    isFirstLoad: true,
    results: [],
    noResults: false,
    recents: [],
    lyrics: [],
    loading: false,
    showRecents: true
}

const reducers = combineReducers({
    lyrics: function(state = INITIAL_STATE, action){
        state.recents = JSON.parse(localStorage.getItem('lastSearches'));

        switch (action.type) {
            case 'UPDATE_LOADING':
                return {
                    ...state,
                    loading: action.payload
                }
            case 'UPDATE_RESULTS':
                return {
                    ...state,
                    results: action.payload
                }
            case 'UPDATE_NO_RESULTS':
                return {
                    ...state,
                    noResults: action.payload
                }
            case 'UPDATE_RECENTS_VISIBILITY':
                return {
                    ...state,
                    showRecents: action.payload
                }
            case 'UPDATE_LYRICS_VISIBILITY':
                return {
                    ...state,
                    lyrics: action.payload
                }    
            // case 'UPDATE_RESULTS':
            //   return state.map(user =>
            //     user.id === action.user.id ? { ...action.user } : user
            //   )
            default:
              return state
        }
    }
});

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig;