import React from 'react'

export default function HighBookDetail(props) {
  return (
    <div className='highlighted-book'>
      <h1>{props.title}</h1>
      <p className='author'>{props.author}</p>   
      <p className='description-author'>{props.description}</p>  
    </div>
  )
}
