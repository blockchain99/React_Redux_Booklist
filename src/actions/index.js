export function selectBook(book) {
 //console.log('A book has been selected : ', book.title);
 //selectBook is an ActionCreator, it need to return an action,
 //an javascript object with a type property.
 return {
   type: "BOOK_SELECTED", //type is purpose of the action
   payload: book  //payload further describe conditioin of action to be triggered
 };
}
