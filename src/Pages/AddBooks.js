import React from 'react'
import BookForm from '../Components/BookForm'
import { useHistory } from 'react-router-dom';

export default function AddBooks() {
  const history = useHistory();
  const addBookHandler = (bookData) => {
    console.log(bookData);
    
    history.push('/all-books')
  }
  return (
    <React.Fragment>
      <BookForm onAddBook={addBookHandler} />
    </React.Fragment>
  )
}
