import { useState } from 'react'

const tabs = ['My Events', 'Upcoming Events', 'Deleted Events']

export const Tabs = () => {
  const [active, setActive] = useState(tabs[0])
  return (
    <div className="neo-tabs">
      {tabs.map(tab => (
        <div
          key={tab}
          className={`neo-tab ${active === tab ? 'active' : ''}`}
          onClick={() => setActive(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  )
}
