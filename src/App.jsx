import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import ScrollToTop from './components/common/ScrollToTop.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import SectionsPage from './pages/SectionsPage.jsx'
import EventsPage from './pages/EventsPage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import ArchivePage from './pages/ArchivePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sections" element={<SectionsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
