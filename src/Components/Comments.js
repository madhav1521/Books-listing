import React from 'react'
import { Link, } from 'react-router-dom'
import Card from '../UI/Card'

export default function Comments(props) {
  return (
    <div>
      <Card className='book-item allbooks-card'>
        <h2>Book Comments</h2>
        <div className='item-data'>
          <div className='item-title'>
            <p>{props.title}</p>
            <p>~{props.author}</p>
          </div>
          <div>
            <button className='item-btn' >
              <Link to={`/all-books/`} >go back</Link>
            </button>
          </div>
        </div>
        <p className='description'>{props.description}</p>
         {/* {props.comments.map(comment => (
          <div key={comment.id}>
            <p>{comment.text}</p>
            <p>By: {comment.author}</p>
          </div>
        ))} */}

      </Card>
    </div>
  )
}
