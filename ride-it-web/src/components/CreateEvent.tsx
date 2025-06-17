import { useState } from 'react'

export const CreateEvent = () => {
  const [title, setTitle] = useState('')
  return (
    <div className="neo-container">
      <h3>Create Event</h3>
      <input
        className="neo-input"
        placeholder="Event title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button className="neo-button" style={{ marginTop: '1rem' }}>Create</button>
    </div>
  )
}
