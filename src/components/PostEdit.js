import React, {useState, useContext} from 'react';
import PostsContext from '../context/PostsContext';
import { Redirect } from 'react-router-dom'

export default function PostEdit(props) {

  const post = props.post
  const [content, setContent] = useState(post.content)
  const [redirect, setRedirect] = useState(false)
  const reload = useContext(PostsContext).reloader

  const changePost = () => {
    fetch(`http://localhost:7777/posts/${post.id}`, {
      method: 'DELETE',
    })

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
    .then(reload())
    .then(setRedirect(true))
  }

  return (
    <>
        {redirect && <Redirect to='/'/>}
        <input type="text" onChange={(el)=>setContent(el.target.value)} value={content}/>
        <button onClick={changePost}>Сохранить</button>
    </>
  )
}