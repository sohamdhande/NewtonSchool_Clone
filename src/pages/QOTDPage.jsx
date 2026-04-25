import React from 'react';
import Navbar from '../components/Navbar';
import './QOTDPage.scss';
import { NSIcon } from '@newtonschool/grauity';

const QOTDPage = () => {
  return (
    <div className="qotd-container">
      <div className="qotd-top-banner">
        <div className="banner-content">
          <NSIcon name="info-circle" size="16" />
          <span>Newton School students — your main question for today is waiting. Go solve it now!</span>
          <button className="solve-btn-banner">Solve Question of the Day</button>
        </div>
      </div>
      
      <Navbar />
      
      <main className="qotd-main-content">
        <div className="left-column">
          <div className="greeting-section">
            <h1 className="greeting-title">Hello, Kartik</h1>
            <p className="greeting-subtitle">Level up your skills by solving the Question of the Day</p>
          </div>
          
          <div className="hero-card">
            <div className="live-badge">
              <span className="dot"></span> LIVE
            </div>
            
            <div className="hero-content">
              <div className="question-info">
                <p className="qotd-label">QUESTION OF THE DAY</p>
                <h2 className="question-title">Wealth of the Wealthiest Customer</h2>
                
                <div className="action-row">
                  <button className="solve-now-btn">
                    Solve Now <span className="arrow">→</span>
                  </button>
                  <div className="attempt-info">
                    <div className="avatars-group">
                      <div className="avatar a1">SI</div>
                      <div className="avatar a2">ND</div>
                      <div className="avatar a3">PK</div>
                    </div>
                    <span className="attempt-text">18 people have attempted</span>
                  </div>
                </div>
              </div>
              
              <div className="timer-badge">
                <span className="dot"></span> ENDS IN 10:43:51
              </div>
            </div>
          </div>
          
          <div className="previous-questions">
            <div className="section-header">
              <h2>Previously asked questions</h2>
              <p>Practice previous questions and climb on the all-time leaderboard</p>
            </div>
            
            <div className="search-bar">
              <NSIcon name="search" size="18" className="search-icon" />
              <input type="text" placeholder="Search question id, name..." />
            </div>
            
            <div className="tabs">
              <button className="tab active">Solved</button>
              <button className="tab">Attempted</button>
              <button className="tab">Unattempted</button>
            </div>
            
            <div className="questions-table">
              <div className="table-header">
                <div className="col-status">STATUS</div>
                <div className="col-name">QUESTION NAME</div>
                <div className="col-date">DATE</div>
                <div className="col-attempted">ATTEMPTED BY</div>
                <div className="col-rank">YOUR RANK</div>
              </div>
              
              <div className="table-body">
                {[
                  { name: 'Count Total Subsets', date: '24/4/2026', attempted: '49' },
                  { name: 'Count Subarrays with Power of Two Difference', date: '23/4/2026', attempted: '35' },
                  { name: 'Power House', date: '22/4/2026', attempted: '58' },
                  { name: 'Sum of Even Elements in a Given Range', date: '21/4/2026', attempted: '93' },
                  { name: 'Array Left Rotation', date: '20/4/2026', attempted: '45' },
                  { name: 'Total subarrays with Sum Divisible by k', date: '19/4/2026', attempted: '23' },
                  { name: 'Array Right Rotation', date: '18/4/2026', attempted: '30' }
                ].map((q, idx) => (
                  <div className="table-row" key={idx}>
                    <div className="col-status"><span className="dash">—</span></div>
                    <div className="col-name">{q.name}</div>
                    <div className="col-date">{q.date}</div>
                    <div className="col-attempted">{q.attempted}</div>
                    <div className="col-rank">NA</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="right-column">
          <div className="performance-section">
            <div className="section-header-row">
              <div>
                <h2>Performance</h2>
                <p>Set records for your practice</p>
              </div>
              <div className="lives-badge">
                LIVES <NSIcon name="info-circle" size="12" />
                <div className="hearts">
                  <NSIcon name="heart" size="16" />
                  <NSIcon name="heart" size="16" />
                  <NSIcon name="heart" size="16" />
                  <NSIcon name="heart" size="16" />
                  <NSIcon name="heart" size="16" />
                </div>
              </div>
            </div>
            
            <div className="streak-card">
              <div className="streak-header">
                <div className="streak-info">
                  <span className="streak-label">YOUR STREAK</span>
                  <div className="streak-value">
                    <span className="flame">🔥</span> 7 days
                  </div>
                </div>
                <button className="share-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                  Share
                </button>
              </div>
              
              <div className="streak-stats">
                <div className="stat-item">
                  <span className="stat-label">LONGEST STREAK</span>
                  <span className="stat-value">1 day</span>
                </div>
                <div className="stat-row">
                  <div className="stat-item">
                    <span className="stat-label">SOLVED</span>
                    <span className="stat-value">12</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">ATTEMPTED</span>
                    <span className="stat-value">12</span>
                  </div>
                </div>
              </div>
              
              <div className="sun-pattern"></div>
            </div>
          </div>
          
          <div className="leaderboard-section">
            <div className="section-header">
              <h2>Leaderboard</h2>
              <p>Rank against your friends and other coders</p>
            </div>
            
            <div className="lb-tabs">
              <button className="lb-tab active">Today's Fastest</button>
              <button className="lb-tab">Longest Streak</button>
              <button className="lb-tab">Overall</button>
            </div>
            
            <div className="podium-container">
              {/* 2nd Place */}
              <div className="podium-spot second">
                <div className="avatar-wrap">
                  <div className="avatar-img bg-blue">I</div>
                  <div className="rank-badge silver">2</div>
                </div>
                <div className="user-name">Injora</div>
                <div className="user-time">06:31 am</div>
              </div>
              
              {/* 1st Place */}
              <div className="podium-spot first">
                <div className="avatar-wrap">
                  <div className="avatar-img bg-indigo">KT</div>
                  <div className="rank-badge gold">1</div>
                </div>
                <div className="user-name">Kartik Tripathi</div>
                <div className="user-time">06:39 am</div>
              </div>
              
              {/* 3rd Place */}
              <div className="podium-spot third">
                <div className="avatar-wrap">
                  <div className="avatar-img bg-orange">SD</div>
                  <div className="rank-badge bronze">3</div>
                </div>
                <div className="user-name">Soham Dhande</div>
                <div className="user-time">06:58 am</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QOTDPage;
