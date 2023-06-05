import React, { useState } from 'react'
import { Link, useParams, useRouteMatch, } from 'react-router-dom'
import Card from '../UI/Card'

export default function Comments(props) {
  const [isCommented, setIsCommented] = useState(false);
  const [comment, setComment] = useState('');
  const [enteredComment, setEnteredComment] = useState('');

  // const params = useParams();
  // const match = useRouteMatch();
  const commentHandler = (e) => {
    e.preventDefault();
    setIsCommented(true);

  }

  const submitCommentHandler = (e) => {
    e.preventDefault();
    setComment((prevComments) => [...prevComments, enteredComment]);
  };

  const inputChangeHandler = (e) => {
    e.preventDefault();
    setEnteredComment(e.target.value);
  }



  return (
    <div>
      <Card className='book-item allbooks-card comments-page'>
        <h2>Book Comments</h2>
        <div className='item-data'>
          <div className='comment-title'>
            <p>Add Comments Here</p>
            {isCommented &&
              <>
                <form onSubmit={submitCommentHandler}>
                  <textarea rows={4} value={enteredComment} onChange={inputChangeHandler} placeholder="Add Comment" />
                  <button className='item-btn'>Comment it</button>
                </form>
                
              </>
            }
            {comment.length > 0 && (
              <ul>
                {comment.map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
            )}
            
            {!isCommented && <>
              <div>
                {!comment && <p>No Comments Yet!</p>}
                {/* {comment} */}
              </div>
              <button onClick={commentHandler} className='item-btn'> Add Comment</button>
            </>}
          </div>
          {/* <p className='description'>{props.description}</p> */}
          <div>
            <button className='item-btn' >
              <Link to={`/all-books`} >go back</Link>
            </button>
          </div>
        </div>
      
      </Card>
    </div>
  )
}
