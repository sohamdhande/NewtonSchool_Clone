import { useState } from 'react';
import { NSIcon } from '@newtonschool/grauity';
import favicon from '../assets/favicon.svg';
import { mockData } from '../data/mockData';

function Navbar({ variant = 'default' }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user } = mockData;

  if (variant === 'dashboard') {
    return (
      <header className="top-header" style={{ display: 'flex', zIndex: '10', height: '64px', width: '100%', boxSizing: 'border-box' }}>
        <div className="header-left">
          <div className="cohort-dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <img src={favicon} alt="logo" className="logo" style={{ width: '16px', height: '16px' }} />
            <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>{user.cohort}</span>
            <NSIcon name="chevron-down" size="16" style={{ marginLeft: '2px' }} />
          </div>

          {isDropdownOpen && (
            <div className="courses-dropdown" style={{ position: 'absolute', top: '52px', left: '20px' }}>
              <div className="courses-dropdown-header">
                <div className="courses-dropdown-title-area">
                  <h3 className="courses-dropdown-title">Your Courses</h3>
                  <p className="courses-dropdown-sub">Find your recently opened courses here</p>
                </div>
                <a href="/" className="show-all-btn">Show All</a>
              </div>
              <div className="courses-dropdown-list">
                <div className="courses-dropdown-item" onClick={() => window.location.href = '/'}>
                  <div className="courses-dropdown-item-info">
                    <h4>NSTP'25-CS+AIML</h4>
                    <span>Enrolled</span>
                  </div>
                  <NSIcon name="chevron-right" size="16" style={{ color: '#666' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="header-center">
          <span style={{ fontSize: '13px' }}>Download the latest version of Athena.</span>
          <button className="cta-btn" onClick={() => console.log("download clicked")}>Download</button>
        </div>

        <div className="header-right">

          <div className="xp-pill" style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '12px' }}>Total XP</span>
            <div className="xp-icon" style={{ margin: '0 6px' }}>
              <NSIcon name="thunder" size="12" />
            </div>
            <span style={{ fontWeight: 'bold' }}>{user.xp}</span>
          </div>

          <button className="icon-btn" onClick={() => console.log('users clicked')}>
            <NSIcon name="users" size="20" />
          </button>

          <button className="icon-btn" onClick={() => console.log('bell clicked')}>
            <NSIcon name="bell" size="20" />
          </button>

          <div className="avatar" style={{ borderRadius: '50%', backgroundColor: '#4f46e5' }}>
            {user.initials}
          </div>
        </div>
      </header>
    );
  }

  return (
    <nav className="navbar">
      <div className="nav-left" style={{ position: 'relative' }}>
        <div className="logo-dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <img src={favicon} alt="logo" className="logo" />
          <span className="dropdown-text">Your Courses</span>
          <NSIcon name="chevron-down" size="12" />
        </div>

        {isDropdownOpen && (
          <div className="courses-dropdown">
            <div className="courses-dropdown-header">
              <div className="courses-dropdown-title-area">
                <h3 className="courses-dropdown-title">Your Courses</h3>
                <p className="courses-dropdown-sub">Find your recently opened courses here</p>
              </div>
              <a href="/" className="show-all-btn">Show All</a>
            </div>
            <div className="courses-dropdown-list">
              <div className="courses-dropdown-item" onClick={() => window.location.href = '/'} style={{ cursor: 'pointer' }}>
                <div className="courses-dropdown-item-info">
                  <h4>NSTP'25-CS+AIML</h4>
                  <span>Enrolled</span>
                </div>
                <NSIcon name="chevron-right" size="16" style={{ color: '#666' }} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="nav-center">
        <a href="/" className={`nav-link ${window.location.pathname === '/' ? 'active' : ''}`}>Explore</a>
        <a href="#" className="nav-link">Today's Question</a>
        <a href="/tryouts" className={`nav-link ${window.location.pathname === '/tryouts' ? 'active' : ''}`}>AI Tryouts</a>
      </div>
      <div className="nav-right">
        <div className="icon-btn">
          <NSIcon name="users" size="20" />
        </div>
        <div className="icon-btn">
          <NSIcon name="bell" size="20" />
        </div>
        <div className="avatar">NS</div>
      </div>
    </nav>
  );
}

export default Navbar;
