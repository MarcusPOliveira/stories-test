interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="bg-green-500 p-4 rounded-md" {...props}>
      {children}
    </button>
  )
}

export default Button
