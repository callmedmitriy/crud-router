import React, { useState } from 'react';

export default function PostCreate() {

  const [content, setContent] = useState('')

  const addPost = evt => {

    evt.preventDefault()

    fetch('http://localhost:7777/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "content": content
      })
    })
    .then(res => console.log(res))
    .then(setContent(''))
  }

  return(
    <div>
      <h1>PostCreate</h1>
      <form>
        <input type="text" onChange={(el)=>setContent(el.target.value)} value={content}/>
        <button onClick={addPost}>Добавить</button>
      </form>
    </div>
  )
}