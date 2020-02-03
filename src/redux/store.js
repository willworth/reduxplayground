import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};


const middleware = [thunk];  // done this way as we may add more later



const store = createStore(rootReducer, initialState,

    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),

)


export default store;