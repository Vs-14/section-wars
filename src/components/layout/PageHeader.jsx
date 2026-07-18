import './PageHeader.css'

function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="page-header">
      <div className="container">
        {eyebrow && <span className="badge">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
      </div>
    </div>
  )
}

export default PageHeader
