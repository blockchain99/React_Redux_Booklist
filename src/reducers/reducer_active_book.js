//arguements of reducer: current state, action
//reducer is only called when action is occurred.
//1st arg, state is not application state, only the
//state , the reducer is responsible for
//preventing undefined err w/ null(es6)
export default function(state = null, action) {
  switch(action.type) {
    case "BOOK_SELECTED":
      return action.payload;//selected book
  }
  return state;
}
