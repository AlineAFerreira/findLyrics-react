export const refreshLoading = bool => {
    return {
        type: 'UPDATE_LOADING',
        payload: bool
    }
}

export const showRecents = bool => ({
    type: 'UPDATE_RECENTS_VISIBILITY',
    payload: bool
})

export const showLyrics = array => {
    return {
        type: 'UPDATE_LYRICS_VISIBILITY',
        payload: array
    }
}

export const refreshResults = results => ({
    type: 'UPDATE_RESULTS',
    payload: results
})

export const refreshNoResults = bool => ({
    type: 'UPDATE_NO_RESULTS',
    payload: bool
})




