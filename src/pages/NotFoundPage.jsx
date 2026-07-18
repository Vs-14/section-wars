import Button from '../components/common/Button.jsx'

function NotFoundPage() {
  return (
    <section className="section container container--narrow" style={{ textAlign: 'center' }}>
      <span className="badge">404</span>
      <h1>This section didn&apos;t campaign here.</h1>
      <p className="text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Button to="/" variant="primary">
        Back to Home
      </Button>
    </section>
  )
}

export default NotFoundPage
