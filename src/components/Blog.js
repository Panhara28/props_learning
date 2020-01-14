import React from 'react';

export const Blog = (props) => (
  <div className={ props.className }>
    <h1> { props.title } </h1>
    <p> { props.author} </p>
    <p> { props.content} </p>
  </div>
)

