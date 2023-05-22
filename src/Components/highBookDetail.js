import React from 'react'

export default function HighBookDetail(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.author}</p>   
      <p>{props.description}</p>  
    </div>
  )
}
