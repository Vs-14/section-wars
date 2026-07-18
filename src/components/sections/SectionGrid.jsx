import { useState } from 'react'
import SectionCard from './SectionCard.jsx'
import SectionModal from './SectionModal.jsx'

function SectionGrid({ sections }) {
  const [activeSection, setActiveSection] = useState(null)

  return (
    <>
      <div className="grid grid--sections">
        {sections.map((section) => (
          <SectionCard key={section.id} section={section} onSelect={setActiveSection} />
        ))}
      </div>
      <SectionModal section={activeSection} onClose={() => setActiveSection(null)} />
    </>
  )
}

export default SectionGrid
