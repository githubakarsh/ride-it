import { useState } from 'react'

export const CommentComponent = () => {
  const [comment, setComment] = useState('')
  return (
    <div className="neo-container">
      <textarea
        className="neo-textbox"
        placeholder="Add a comment"
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <button className="neo-button" style={{ marginTop: '1rem' }}>Submit</button>
    </div>
  )
}
