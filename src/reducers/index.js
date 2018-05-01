import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

/*{ activeBook: {title: 'Ja.'}, books: [{title: 'J.'},{t:'..'}] }*/
const rootReducer = combineReducers({
//BooksReducer is responsible to create books property
//the state is passed as argument, BooksReducer, which is the
//only state generated by reducer.
  books: BooksReducer,
//Any key to the obj provided by combineReducers(activeBook)
//ends up as a key on a global state(ActiveBook).
  activeBook: ActiveBook
});

export default rootReducer;