import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};


const middleware = [thunk];  // done this way as we may add more later



const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));


export default store;