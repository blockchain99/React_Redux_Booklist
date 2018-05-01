import React, {Component} from 'react';
import { connect } from 'react-redux'; //connect state(redux) to view(react)
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}
/*Application state made by reducer
- { books: [{title: 'Hary porter'}, {title: 'Javascript'}],
    activeBook: {title: 'Javascript'} }*/
function mapStateToProps(state) {//array of books & active book
//whatever is returned will show up as props inside of BookList component on
//our contaier.
  return {
    books: state.books
  };
}
/*take some state, map it to prop of our contaier, and the case
in which we want to take action creator and make it available
to be called on side of the container as well.*/
//Anything returned from mapDispa.. will end up as props(this.props.selectBook)
//on component(BookList) in container
function mapDispatchToProps(dispatch) {
//Passing the component { selectBook: selectBook}: 1st, this.props.selectBook
//(props), 2nd is actionCreator, dispatch function is funnel.
//Whenver selectBook(2nd) is called, the result should be passed
//to all of our reducers by dispatch func.
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}
//(func)(component, which produce container:)
//Promote BookList from a component to a container - It need to know
//about the new dispatch method, selectBook. Make it available as prop
export default connect (mapStateToProps, mapDispatchToProps) (BookList);
