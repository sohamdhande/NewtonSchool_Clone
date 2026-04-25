import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/dashboard/Sidebar';
import './TimelinePage.scss';

const timelineData = [
  { date: '21 Apr 2026', type: 'Lectur...', name: 'Independent Lecture', completed: '--', xp: '' },
  { date: '18 Apr 2026', type: 'Lectur...', name: 'Implementation', completed: '--', xp: '' },
  { date: '15 Apr 2026', type: 'Lectur...', name: 'Binary Search on Answer', completed: '--', xp: '' },
  { date: '7 Apr 2026', type: 'Lectur...', name: 'CP Binary Search', completed: '--', xp: '' },
  { date: '2 Apr 2026', type: 'Lectur...', name: 'Arrays - Two Pointer & Sliding Window', completed: '--', xp: '' },
  { date: '1 Apr 2026', type: 'Lectur...', name: 'Deleted', completed: '--', xp: '' },
  { date: '28 Mar 2026', type: 'Lectur...', name: 'Deleted', completed: '--', xp: '' },
  { date: '26 Mar 2026', type: 'Lectur...', name: 'Arrays - Two Pointer', completed: '--', xp: '' },
  { date: '24 Mar 2026', type: 'Lectur...', name: 'Deleted', completed: '--', xp: '' },
];

const TimelinePage = () => {
  return (
    <div className="timeline-container">
      <Navbar variant="dashboard" />
      <Sidebar />
      
      <main className="timeline-main">
        <div className="timeline-page-header">
          <span className="breadcrumb">Newton School of Technology/25 (ADYPU) ...</span>
          <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        <div className="timeline-card">
          <div className="filters-section">
            <h3 className="filters-title">Filters</h3>
            <div className="filter-buttons">
              <button className="filter-btn active">All</button>
              <button className="filter-btn">Lectures</button>
              <button className="filter-btn">Assignments</button>
              <button className="filter-btn">Contests</button>
              <button className="filter-btn">Quizzes</button>
            </div>
          </div>

          <div className="timeline-table">
            <div className="table-header">
              <div className="col-date">Date</div>
              <div className="col-name">Name</div>
              <div className="col-completed">Completed</div>
              <div className="col-xp">XP Earned</div>
            </div>
            
            <div className="table-body">
              {timelineData.map((row, index) => (
                <div className="table-row" key={index}>
                  <div className="col-date">{row.date}</div>
                  <div className="col-name">
                    <span className="type-badge">{row.type}</span>
                    <a href="#" className="name-link">{row.name}</a>
                  </div>
                  <div className="col-completed">{row.completed}</div>
                  <div className="col-xp">{row.xp}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TimelinePage;
