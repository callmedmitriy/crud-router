import React,{useState,useContext} from 'react';
import PostsContext from '../context/PostsContext';
import { Redirect } from 'react-router-dom'

function findById(posts, id) {
  return posts.find(o => o.id === id);
}


export default function PostCard({match}) {

  const [redirect,setRedirect] = useState(false)

  const postsList = useContext(PostsContext)
  console.log(postsList)

  const idPost = Number(match.params.id)
  console.log(idPost)

  const post = findById(postsList,idPost)
  console.log(post)

  const deletePost = evt => {
    evt.preventDefault()
    console.log(`http://localhost:7777/posts/${idPost}`)
    fetch(`http://localhost:7777/posts/${idPost}`, {
      method: 'DELETE',
    })
    .then(setRedirect(true))
  }

  return(
      <div>
        {redirect && <Redirect to='/'/>}
        <h1>PostCard</h1>
        <span>{post ? post.content : 'Не найден'}</span>
        <button>Изменить</button>
        <button onClick={deletePost}>Удалить</button>
      </div>
  )
}