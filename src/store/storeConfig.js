import { createStore, combineReducers } from 'redux';
import lyrics from './reducers/lyrics';

const reducers = combineReducers({
    lyrics 
});

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig;