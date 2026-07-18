function SocialLinks({ links = [] }) {
  if (links.length === 0) return null

  return (
    <ul className="social-links">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks
