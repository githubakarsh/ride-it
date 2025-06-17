interface Props {
  items: string[]
}

export const ListComponent = ({ items }: Props) => {
  return (
    <ul className="neo-list">
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
