import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import PostsContext from '../context/PostsContext';

export default function PostList() {
  const cardsList = useContext(PostsContext).cardsList
  const loading = useContext(PostsContext).loading
  return(
    <div>
      <h1>PostList</h1>
      <NavLink to="/posts/new">Добавить</NavLink>
      <ul>
        {loading && "Грузим"}
        {!loading && cardsList.map(o => <NavLink to={"/posts/"+o.id} key={o.id}>{o.content}</NavLink>)}
      </ul>
    </div>
  )
}