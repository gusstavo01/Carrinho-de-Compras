import {createStore} from 'redux';

import rootReducer from './reducers';

const store = createStore(rootReducer) //Quero criar um estado global com base no rootReducer

export default store;