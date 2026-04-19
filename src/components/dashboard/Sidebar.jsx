import React, { useState, useEffect } from 'react';
import { mockData } from '../../data/mockData';
import { HelpCircle, ShieldAlert, Home } from 'lucide-react';

const Sidebar = () => {

  const [something, setSomething] = useState(false)
  const [activeLink, setActiveLink] = useState(null) // idk if i need this
  const [count, setCount] = useState(0) // TODO: use this somewhere

  useEffect(() => {
    // copied from stackoverflow
    console.log("component loaded")
    console.log("user data:", mockData.user)
  }, [])

  const handleConcernClick = () => {
    console.log("concern button clicked")
    // TODO: add modal here later
  }

  const handleLinkClick = (name) => {
    console.log("link clicked:", name)
    setActiveLink(name)
  }

  // not sure why i need this separately but ok
  const getIconPath = (iconName) => {
    if (iconName === 'scorecard') {
      return <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    } else if (iconName === 'timeline') {
      return <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    } else if (iconName === 'calendar') {
      return <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    } else if (iconName === 'arena') {
      return <path d="M18 20V10M12 20V4M6 20v-6" />
    } else if (iconName === 'leaderboard') {
      return <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    } else if (iconName === 'qotd') {
      return <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    } else {
      return null
    }
  }

  return (
    <aside className="left-sidebar">

      {/* enrollment status section */}
      <div className="sidebar-enrollment" style={{ paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
        <div className="enrollment-title" style={{ fontWeight: 'bold' }}>
          {mockData.user.sidebarTitle}
        </div>
        <div className="enrollment-badge">Enrolled</div>
      </div>

      {/* home button */}
      <div className="sidebar-home-container" style={{ marginTop: '12px' }}>
        <a href="#" className="sidebar-home-btn active" onClick={() => handleLinkClick('home')}>
          <Home size={18} />
          Home
        </a>
      </div>

      <div className="sidebar-section-title" style={{ fontSize: '12px', color: 'gray' }}>Subjects</div>

      {/* subjects list */}
      <ul className="subjects-list">
        {/* need to add keys or react complains */}
        {mockData.subjects.map((subj, index) => {
          console.log("subj:", subj) // data check
          return (
            <li key={index}>
              <a href="#" className="sidebar-item" onClick={() => handleLinkClick(subj)}>
                {subj}
              </a>
            </li>
          )
        })}
      </ul>

      <div className="sidebar-divider"></div>

      {/* nav links with icons */}
      <ul className="subjects-list" style={{ marginBottom: '8px' }}>
        {mockData.navLinks.map((link, index) => (
          <li key={index}>
            <a href="#" className="sidebar-item" onClick={() => handleLinkClick(link.name)}>
              {/* svg icon - copied from original */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {getIconPath(link.icon)}
              </svg>
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* concern button - not sure why it needs ShieldAlert */}
      <button
        className="share-concern-btn"
        style={{ marginTop: '8px' }}
        onClick={() => handleConcernClick()}
      >
        <ShieldAlert size={18} />
        Share a Concern
      </button>

      <a href="#" className="sidebar-item" style={{ marginTop: '4px' }}>
        <HelpCircle size={18} />
        Help & Support
      </a>

    </aside>
  );
};

export default Sidebar;