import { useState } from 'react';
import { ChevronDown, ChevronRight, Users, Bell } from 'lucide-react';
import favicon from '../assets/favicon.svg';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left" style={{ position: 'relative' }}>
        <div className="logo-dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <img src={favicon} alt="logo" className="logo" />
          <span className="dropdown-text">Your Courses</span>
          <ChevronDown size={12} />
        </div>

        {isDropdownOpen && (
          <div className="courses-dropdown">
            <div className="courses-dropdown-header">
              <div className="courses-dropdown-title-area">
                <h3 className="courses-dropdown-title">Your Courses</h3>
                <p className="courses-dropdown-sub">Find your recently opened courses here</p>
              </div>
              <a href="/dashboard" className="show-all-btn">Show All</a>
            </div>
            <div className="courses-dropdown-list">
              <div className="courses-dropdown-item">
                <div className="courses-dropdown-item-info" onClick={() => window.location.href = '/src/pages/Dashboard.jsx'}>
                  <h4>NSTP'25-CS+AIML</h4>
                  <span>Enrolled</span>
                </div>
                <ChevronRight size={16} color="#666" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="nav-center">
        <a href="#" className="nav-link active">Explore</a>
        <a href="#" className="nav-link">Today's Question</a>
        <a href="#" className="nav-link">AI Tryouts</a>
      </div>
      <div className="nav-right">
        <div className="icon-btn">
          <Users size={20} />
        </div>
        <div className="icon-btn">
          <Bell size={20} />
        </div>
        <div className="avatar">NS</div>
      </div>
    </nav>
  );
}

export default Navbar;
