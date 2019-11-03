import React, { useState, useEffect } from 'react'
import PostsContext from '../context/PostsContext';

export default function PostsProvider(props) {
  const [cardsList, setCardsList] = useState(null)
  const [reload, setReload] = useState(true)
  const [loading, setLoading] = useState(true)

  const reloader = () => {
    console.log('run reloader')
    setReload(true)
  }

  useEffect(() => {
    if (reload) {
      setLoading(true)
      fetch('http://localhost:7777/posts', {
          method: 'GET'
        })
        .then(res => res.json())
        .then(
          (result) => {
            setCardsList(result)
            setLoading(false)
            console.log("provider ===")
            console.log(result)
            console.log("===")
          },
          (error) => console.log(error)
        )
        .then(setReload(false))
      }

  }, [reload])

    return (
        <PostsContext.Provider value={{cardsList, reloader, loading}}>
            {props.children}
        </PostsContext.Provider>
    )
}
