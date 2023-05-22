import React, { useState } from 'react'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'
import BookDetail from '../Pages/BookDetail'

export default function BookItem(props) {
    const [shown, isShown] = useState(false);

    const onShownHandler = (e) => {
        e.preventDefault();
        isShown(true);
    };

    // const closeBookDetails = (e) => {
    //     e.preventDefault();
    //     isShown(false);
    // };

    return (
        <React.Fragment>
            <Card className='book-item allbooks-card'>
                <div className='item-data'>
                    <div className='item-title'>
                        <p>{props.title}</p>
                        <p>~{props.author}</p>
                    </div>
                    <div>
                        <button className='item-btn' onClick={(e) => {onShownHandler(e, props.id)}}>
                            <Link to={`/all-books/${props.id}`} >View Book</Link>
                        </button>
                    </div>
                </div>
                <p className='description'>{props.description}</p>

            </Card>
            {shown &&
                (<Card className='bookdetails-card allbooks-card' >
                    <BookDetail />
                </Card>)}
        </React.Fragment>
    )
}
