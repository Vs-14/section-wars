import { Link } from 'react-router-dom'

function Button({ to, href, onClick, variant = 'primary', type = 'button', children }) {
  const className = `btn btn--${variant}`

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
