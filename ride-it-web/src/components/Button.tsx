interface Props {
  children: string
}

export const Button = ({ children }: Props) => {
  return <button className="neo-button">{children}</button>
}
