import { useState } from 'react'

export interface AccordionItem {
  title: string
  content: React.ReactNode
}

interface Props {
  items: AccordionItem[]
}

export const Accordion = ({ items }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <div className="neo-accordion">
      {items.map((item, index) => (
        <div key={index} className="neo-accordion-item">
          <div
            className="neo-accordion-header"
            onClick={() => toggleItem(index)}
          >
            {item.title}
          </div>
          {openIndex === index && (
            <div className="neo-accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  )
}
