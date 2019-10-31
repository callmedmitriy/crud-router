import React, { useState, useEffect } from 'react'
import PostsContext from '../context/PostsContext';

export default function PostsProvider(props) {
  const [cardsList, setCardsList] = useState(null)

  useEffect(() => {
    fetch('http://localhost:7777/posts', {
        method: 'GET'
      })
      .then(res => res.json())
      .then(
        (result) => {
          setCardsList(result)
          console.log("provider ===")
          console.log(result)
          console.log("===")
        },
        (error) => console.log(error)
      )

  }, [])

    return (
        <PostsContext.Provider value={cardsList}>
            {props.children}
        </PostsContext.Provider>
    )
}
