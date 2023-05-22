import React, { useState } from 'react'
import { useRef } from 'react'
import Card from '../UI/Card';
import { Prompt, useHistory } from 'react-router-dom';

export default function BookForm(props) {
    const [isEntering, setIsEntering] = useState(false);
    const bookName = useRef();
    const bookAuthor = useRef();
    const bookDescription = useRef();
    const history = useHistory();

    const onSubmitHandler = e => {
        e.preventDefault();
        const book = {
            name: bookName.current.value,
            author: bookAuthor.current.value,
            description: bookDescription.current.value
        }
        console.log(book);
        props.onAddBook({
            name: book.name,
            author: book.author,
            description: book.description

        });
        console.log(book.name);
        history.push('/all-books')
    };
    const enterFormHandler = () => {
        setIsEntering(true);
    }
    const exitFormHandler = () => {
        setIsEntering(false);
    }

    return (
        <div className='form-book'>
            <Prompt when={isEntering} message={() => 'Are you sure want to go back? your data can be lost'} />
            <Card className='book-form-card'>
                <h2>Add your Book</h2>
                <form onFocus={enterFormHandler} onSubmit={onSubmitHandler}>
                    <div className='input-div' >
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" ref={bookName} />
                    </div>
                    <div className='input-div' >
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" name="author" ref={bookAuthor} />
                    </div>
                    <div className='input-div' >
                        <label htmlFor="description">Description</label>
                        <textarea type="text" id="description" name="description" ref={bookDescription} />
                    </div>
                    <div className='input-div' >
                        <button type='submit' onClick={exitFormHandler}> Add Book </button>
                    </div>
                </form>
            </Card>
        </div>
    )
}
