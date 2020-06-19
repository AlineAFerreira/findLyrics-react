import { UPDATE_LOADING, UPDATE_SEARCH_VALUE, UPDATE_RECENTS_VISIBILITY, UPDATE_LYRICS_VISIBILITY, UPDATE_RESULTS, UPDATE_NO_RESULTS } from './../types/lyrics';

export const refreshLoading = bool => {
    return {
        type: UPDATE_LOADING,
        payload: bool
    }
}

export const updateSearchValue = text => {
    return {
        type: UPDATE_SEARCH_VALUE,
        payload: text
    }
}

export const showRecents = bool => ({
    type: UPDATE_RECENTS_VISIBILITY,
    payload: bool
})

export const showLyrics = array => {
    return {
        type: UPDATE_LYRICS_VISIBILITY,
        payload: array
    }
}

export const refreshResults = results => ({
    type: UPDATE_RESULTS,
    payload: results
})

export const refreshNoResults = bool => ({
    type: UPDATE_NO_RESULTS,
    payload: bool
})




