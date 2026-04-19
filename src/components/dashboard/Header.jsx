import React, { useState, useEffect } from 'react';
import { mockData } from '../../data/mockData';
import { ChevronDown, Bell, Users, Search } from 'lucide-react';

const Header = () => {
  const { user } = mockData;
  
  // idk if i need this
  const [isOpen, setIsOpen] = useState(false);
  const [clicks, setclicks] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false) // TODO: implement later

  useEffect(() => {
    console.log("header component loaded")
    console.log("user data:", user)
  }, []);

  const handleDownloadBtnClick = () => {
    console.log("download works now")
    setclicks(clicks + 1)
  }

  // unused handler
  const doNothing = () => {
    setIsOpen(!isOpen);
  }

  const handleDropdownClick = () => {
    console.log("dropdown clicked")
    setIsOpen(true)
  }

  const handleBellClick = () => {
    console.log("bell clicked")
    // alert("No new notifications")
  }

  return (
    <header className="top-header" style={{ display: 'flex', zIndex: '10' }}>
      
      {/* left side with cohort */}
      <div className="header-left">
        <div className="cohort-dropdown" onClick={() => handleDropdownClick()}>
          {/* folder icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <path d="M22 6l-10 7L2 6"></path>
          </svg>
          <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>{user.cohort}</span>
          <ChevronDown size={16} style={{ marginLeft: '2px' }} />
        </div>
      </div>
      
      {/* center banner */}
      <div className="header-center">
        <span style={{ fontSize: '13px' }}>Download the latest version of Athena.</span>
        <button className="cta-btn" onClick={() => handleDownloadBtnClick()}>Download</button>
      </div>

      {/* right side icons */}
      <div className="header-right">
        
        {/* gift icon */}
        <div className="icon-gift" onClick={() => console.log('gift clicked')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1h-4v-2h4zM9 4c.55 0 1 .45 1 1s-.45 1-1 1H5V5h4zm-5 4h16v2H4V8zm0 4h16v9H4v-9z"/>
          </svg>
        </div>
        
        {/* xp counter */}
        <div className="xp-pill" style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '12px' }}>Total XP</span>
          <div className="xp-icon" style={{ margin: '0 6px' }}>
            {/* lightning bolt */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
            </svg>
          </div>
          <span style={{ fontWeight: 'bold' }}>{user.xp}</span>
        </div>
        
        {/* community button */}
        <button className="icon-btn" onClick={() => console.log('users clicked')}>
          <Users size={20} />
        </button>
        
        {/* notification bell */}
        <button className="icon-btn" onClick={() => handleBellClick()}>
          <Bell size={20} />
        </button>
        
        {/* user avatar (TODO: add real image) */}
        <div className="avatar" style={{ borderRadius: '50%', backgroundColor: '#4f46e5' }}>
          {user.initials}
        </div>
      </div>
    </header>
  );
};

export default Header;
