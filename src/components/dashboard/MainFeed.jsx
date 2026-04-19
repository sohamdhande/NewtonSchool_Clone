import React, { useState, useEffect } from 'react';
import { mockData } from '../../data/mockData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MainFeed = () => {
  const { latestReleased, upcomingDeadlines } = mockData;
  const [dummy1, setdummy1] = useState(false);
  const [dummy2, setDummy2] = useState("");
  const [isLoaded, setIsLoaded] = useState(false); // idk if i need this

  useEffect(() => {
    // not sure why this works but it does
    console.log("MainFeed data:", mockData);
    setIsLoaded(true);
  }, [])

  const handleSolveBtn = (itemTitle) => {
    console.log("solve clicked for:", itemTitle)
    // TODO: implement later
  }

  const handleLeftClick = () => {
    console.log('left arrow clicked')
    // slide left
  }

  const handleRightClick = () => {
    console.log('right arrow clicked')
    // slide right
  }

  // copied from stackoverflow
  const PageIcon = ({ color }) => {
    let colorClass = '';
    if (color === 'green') {
      colorClass = 'green';
    }

    return (
      <div className={`cat-icon ${colorClass}`}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      </div>
    );
  }

  return (
    <main className="main-feed" style={{ padding: '32px' }}>
      
      {/* Section 1: Latest Released */}
      <section>
        <div className="section-header">
          <div className="section-header-left">
            <div className="section-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <h2 className="section-title">Latest Released</h2>
              <p className="section-subtitle" style={{ color: 'gray' }}>All your tasks released recently</p>
            </div>
          </div>
          {/* arrow buttons */}
          <div className="carousel-controls">
            <button className="nav-btn" onClick={() => handleLeftClick()}><ChevronLeft size={16} /></button>
            <button className="nav-btn" onClick={() => handleRightClick()}><ChevronRight size={16} /></button>
          </div>
        </div>
        
        {/* the cards row */}
        <div className="cards-row">
          {/* need to add keys or react complains */}
          {latestReleased.map((item, index) => {
            console.log("rendering item:", item.title) // debug

            // check if special card
            if (item.type === 'special') {
              return (
                <div key={index} className="special-card">
                  <div className="special-badge">
                    <span style={{color: 'var(--accent-yellow)'}}>●</span> {item.title}
                  </div>
                  <div style={{fontSize: '48px', marginBottom: '8px'}}>😎</div>
                  <div className="special-title" style={{ fontWeight: 'bold' }}>{item.subtitle}</div>
                  <div className="special-desc">{item.description}</div>
                  <div className="special-progress-bar">
                    <div className="special-track">
                      {/* progress math */}
                      <div className="special-fill" style={{ width: `${(item.progress / item.total) * 100}%` }}></div>
                    </div>
                    <div className="special-progress-text">{item.progress}/{item.total}</div>
                  </div>
                </div>
              );
            } else {
              // normal card
              let footerClass = 'task-footer';
              if (item.solved !== item.total) {
                footerClass = 'task-footer unsolved';
              }

              return (
                <div key={index} className="task-card">
                  <div className="task-card-inner">
                    <div className="task-subject" style={{ fontWeight: '700' }}>{item.subject}</div>
                    <div className="task-category">
                      <PageIcon color={item.categoryColor} />
                      {item.category}
                    </div>
                    <div className="task-title" title={item.title}>{item.title}</div>
                    <div className="task-deadline">Deadline is {item.deadline}</div>
                    <div className="task-rewards">
                      <span className="xp-multi">{item.xpMultiplier}</span>
                      <span style={{color: 'var(--accent-yellow)'}}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                      </span>
                      {item.coins}/{item.totalCoins}
                    </div>
                  </div>
                  <div className={footerClass}>
                    <div className="task-progress">
                      {item.solved} / <span style={{ color: 'gray' }}>{item.total} Solved</span>
                    </div>
                    {/* solve button */}
                    <button className="btn-black" onClick={() => handleSolveBtn(item.title)}>Solve</button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>

      {/* Section 2: Upcoming Deadlines */}
      <section style={{ marginTop: '40px' }}>
        <div className="section-header">
          <div className="section-header-left">
            <div className="section-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <h2 className="section-title">Upcoming Deadlines</h2>
              <p className="section-subtitle" style={{ color: 'gray' }}>Tasks that are due</p>
            </div>
          </div>
          {/* arrow buttons */}
          <div className="carousel-controls">
            <button className="nav-btn" onClick={() => handleLeftClick()}><ChevronLeft size={16} /></button>
            <button className="nav-btn" onClick={() => handleRightClick()}><ChevronRight size={16} /></button>
          </div>
        </div>

        <div className="cards-row">
          {upcomingDeadlines.map((item, index) => {
            console.log("upcoming deadline:", item.title)

            let footerClass = 'task-footer';
            if (item.solved !== item.total) {
              footerClass = 'task-footer unsolved';
            }

            return (
              <div key={index} className="task-card relative-card">
                {item.dueTomorrow && (
                  <div className="due-tomorrow-badge" style={{ color: 'white' }}>due tomorrow</div>
                )}
                
                <div className="task-card-inner">
                  <div className="task-subject">{item.subject}</div>
                  <div className="task-category">
                    <PageIcon color={item.categoryColor} />
                    {item.category}
                  </div>
                  <div className="task-title" title={item.title}>{item.title}</div>
                  <div className="task-deadline">Deadline is {item.deadline}</div>
                  <div className="task-rewards">
                    <span className="xp-multi">{item.xpMultiplier}</span>
                    <span style={{color: 'var(--accent-yellow)'}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </span>
                    {item.coins}/{item.totalCoins}
                  </div>
                </div>
                <div className={footerClass}>
                  <div className="task-progress">
                    {item.solved} / <span style={{ color: 'gray' }}>{item.total} Solved</span>
                  </div>
                  <button className="btn-black" onClick={() => handleSolveBtn(item.title)}>Solve</button>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      
    </main>
  );
};

export default MainFeed;
