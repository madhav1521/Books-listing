import React from 'react'
import BookForm from '../Components/BookForm'


export default function AddBooks() {
  const addBookHandler = (bookData) => {
    console.log(bookData);
    
  }
  return (
    <React.Fragment>
      <BookForm onAddBook={addBookHandler} />
    </React.Fragment>
  )
}
