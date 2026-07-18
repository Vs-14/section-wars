function ThemeBanner({ edition }) {
  return (
    <section className="section theme-banner">
      <div className="container container--narrow section-title--center">
        <span className="badge">This Year&apos;s Theme</span>
        <h2>{edition.theme}</h2>
        <p>{edition.intro}</p>
      </div>
    </section>
  )
}

export default ThemeBanner
