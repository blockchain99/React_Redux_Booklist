import React, {Component} from 'react';
import { connect } from 'react-redux';

// export default class BookDetail extends Component {
//   render() {
//     return (
//       <div>Book Detail!</div>
//     );
//   }
// }
class BookDetail extends Component {
  render() {
//When first start prog, state= null-> Javascript error
//so following if module needed. After click book in browser
//it update application state,which cause our container rerendered.
//bcoz we hookup this container to redux, when rerender,
//this.props.book defined ! , successfully print 2nd return <div> ..</div>
    if(!this.props.book) {
      return <div>Select a book to get started.</div>
    }

    return(
      <div>
        <h3>Details for: </h3>
        <div>Title: {this.props.book.title} </div>
        <div>Title: {this.props.book.pages} </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}
export default connect(mapStateToProps)(BookDetail);
