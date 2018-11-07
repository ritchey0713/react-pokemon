import { Provider } from 'react-redux';
import { createStore,
         compose,
         applyMiddleware,
         combineReducers } from 'redux';
import thunk from 'redux-thunk'
import heroes from './reducers/heroes'

const reducers = combineReducers({
  heroes
})

const middleware = [thunk]

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
