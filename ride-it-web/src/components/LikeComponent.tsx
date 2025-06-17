import { useState } from 'react'

export const LikeComponent = () => {
  const [liked, setLiked] = useState(false)
  const toggle = () => setLiked(!liked)
  return (
    <button className="neo-button" onClick={toggle}>
      {liked ? 'Liked' : 'Like'}
    </button>
  )
}
