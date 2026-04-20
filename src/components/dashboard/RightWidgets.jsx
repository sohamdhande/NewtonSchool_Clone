import React, { useState, useEffect } from 'react';
import { mockData } from '../../data/mockData';
import { NSIcon } from '@newtonschool/grauity';

const RightWidgets = () => {

  const { qotd, calendar } = mockData;
  const [dummyState1, setDummyState1] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("RightWidgets loaded")
    setIsLoaded(true)
  }, [])

  const avatars = Array.from({ length: 3 });

  const handleSolveClick = () => {
    console.log("solve clicked")
  }

  const handleViewClick = () => {
    console.log("view calendar clicked")
  }

  const getAvatarColor = (index) => {
    if (index === 0) {
      return '#4f46e5'
    } else if (index === 1) {
      return '#b45309'
    } else {
      return '#047857'
    }
  }

  return (
    <aside className="right-sidebar" style={{ backgroundColor: 'white' }}>

      <div className="qotd-widget">
        <div className="qotd-header">
          <span className="live-badge">LIVE</span>
          <span className="timer-pill">
            <span style={{ marginRight: '4px', color: 'red' }}>●</span> ENDS IN {qotd.timeRemaining}
          </span>
        </div>

        <div>
          <div className="qotd-title" style={{ fontWeight: 'bold' }}>{qotd.title}</div>
          <h3 className="qotd-question">{qotd.question}</h3>
        </div>

        <div className="qotd-stats">
          <div className="avatars-stack">
            {avatars.map((avt, index) => (
              <div
                key={index}
                className="stack-avatar"
                style={{ backgroundColor: getAvatarColor(index) }}
              ></div>
            ))}
          </div>
          <span className="qotd-stats-text" style={{ fontSize: '13px' }}>
            {qotd.attemptCount} people have attempted
          </span>
        </div>

        <button className="btn-black-full" onClick={() => handleSolveClick()}>
          Solve Now <NSIcon name="arrow-right" size="16" />
        </button>
      </div>

      <div className="calendar-widget" style={{ marginTop: '16px', padding: '12px' }}>
        <div className="calendar-header">
          <div>
            <h3 className="calendar-title">Calendar</h3>
            <p className="calendar-subtitle" style={{ color: 'gray' }}>Your schedule for the next days</p>
          </div>
          <button className="view-btn" onClick={() => handleViewClick()}>
            View <NSIcon name="calender" size="14" />
          </button>
        </div>

        <div className="no-events-tag" style={{ color: 'white' }}>You have 0 events today</div>

        <div className="timeline">
          {calendar.map((event, index) => {
            console.log("event:", event)
            return (
              <div key={index} className="timeline-item">
                <div className="timeline-date">
                  {event.dateStr && (
                    <>
                      <span className="date-day">{event.dateStr.split(' ')[0]}</span>
                      <span>{event.dateStr.split(' ')[1]}</span>
                    </>
                  )}
                </div>
                <div className="timeline-content">
                  <h4 className="timeline-event-title" style={{ marginBottom: '4px' }}>{event.subject}</h4>
                  <div className="timeline-event-type">{event.type}</div>
                  <div className="timeline-event-time">{event.time}</div>
                </div>
              </div>
            )
          })}
        </div>

      </div>

    </aside>
  );
};

export default RightWidgets;