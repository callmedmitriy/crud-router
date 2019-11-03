import React,{useState,useContext} from 'react';
import PostsContext from '../context/PostsContext';
import { Redirect } from 'react-router-dom'

import PostShow from './PostShow'
import PostEdit from './PostEdit'

function findById(posts, id) {
  return posts.find(o => o.id === id);
}


export default function PostCard({match}) {

  const [redirect,setRedirect] = useState(false)
  const [edit, setEdit] = useState(false)

  const postsList = useContext(PostsContext).cardsList
  const loading = useContext(PostsContext).loading
  const reload = useContext(PostsContext).reloader

  const idPost = Number(match.params.id)

  let post
  if (!loading) {
    post = findById(postsList,idPost)
  }

  const deletePost = id => {
    console.log(`http://localhost:7777/posts/${idPost}`)
    fetch(`http://localhost:7777/posts/${idPost}`, {
      method: 'DELETE',
    })
    .then(reload())
    .then(setRedirect(true))
  }

  const editPost = () => {
    console.log('edit')
    edit ? setEdit(false) : setEdit(true)
  }

  return(
      <div>
        {redirect && <Redirect to='/'/>}
        <h1>PostCard</h1>
        {edit ? <PostEdit post={post}/> : <PostShow edit={editPost} delete={id => deletePost(id)} post={post}/>}
      </div>
  )
}