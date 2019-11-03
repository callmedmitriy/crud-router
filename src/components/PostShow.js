import React from 'react';

export default function PostShow(props) {
  console.log(props)
  const post = props.post

  const deletePost = (id) => {
    props.delete(id)
  }

  const editPost = () => {
    props.edit()
  }

  return (
    <>
        <span>{post ? post.content : 'Не найден'}</span>
        <button onClick={id => deletePost(post.id)}>Удалить</button>
        <button onClick={editPost}>Изменить</button>
    </>
  )
}