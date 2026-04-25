import React, { useState, useMemo } from 'react';
import "@newtonschool/grauity/dist/css/index.scss";
import { NSIcon } from '@newtonschool/grauity';
import './CalendarPage.scss';
import Navbar from '../components/Navbar';
import Sidebar from '../components/dashboard/Sidebar';


const CALENDAR_EVENTS = [
  
  { id: 1, title: 'Lab', day: 1, startHour: 9.5, endHour: 10.83, color: '#2d8a4e' },
  { id: 2, title: 'Linked List Problems', day: 1, startHour: 11, endHour: 12.5, color: '#2563eb' },
  { id: 3, title: 'React API Integration, Re...', day: 1, startHour: 12.5, endHour: 14, color: '#2563eb' },
  { id: 4, title: 'Buffer lab', day: 1, startHour: 17, endHour: 19, color: '#0d9488' },

  
  { id: 5, title: 'Agentic Error Handling, A...', day: 2, startHour: 9.5, endHour: 11, color: '#2563eb' },
  { id: 6, title: 'Binary Tree, Introduction...', day: 2, startHour: 11, endHour: 12.5, color: '#2563eb' },
  { id: 7, title: 'Unbiased Estimator', day: 2, startHour: 12.5, endHour: 14, color: '#2563eb' },
  { id: 8, title: 'Independent Lecture', day: 2, startHour: 18.5, endHour: 19.5, color: '#2563eb' },

  
  { id: 9, title: 'Statistical Relationship b...', day: 3, startHour: 9.5, endHour: 10.83, color: '#2563eb' },
  { id: 10, title: 'Binary Tree, Introduction...', day: 3, startHour: 11, endHour: 12.5, color: '#2563eb' },
  { id: 11, title: 'React CSS Styling, React...', day: 3, startHour: 12.5, endHour: 14, color: '#2563eb' },
  { id: 12, title: 'React CSS Styling, React...', day: 3, startHour: 15.5, endHour: 17, color: '#2563eb' },

  
  { id: 13, title: 'Lec 23', day: 4, startHour: 9.5, endHour: 11, color: '#2563eb' },
  { id: 14, title: 'Post Order Traversal', day: 4, startHour: 11, endHour: 12.5, color: '#2563eb' },
  { id: 15, title: 'Lecture_24', day: 4, startHour: 12.5, endHour: 14, color: '#2563eb' },
  { id: 16, title: 'React Router', day: 4, startHour: 15.5, endHour: 17, color: '#2563eb' },

  
  { id: 17, title: '', day: 1, startHour: 19, endHour: 19.75, color: '#6b7a2e' },
  
  { id: 18, title: '', day: 2, startHour: 19, endHour: 19.5, color: '#0d9488' },
];

const SUBJECTS = [
  'CP Foundation', 'DSA Architecture', 'DSA Neumann', 'Exam Sem 2',
  'FOAI Architecture', 'FOAI Neumann', 'IKS Neumann', 'Maths-2 Architecture',
  'Maths-2 Neumann', 'PS Neumann', 'Tech Eng Neumann', 'WAP Architecture', 'WAP Neumann'
];

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const HOURS = Array.from({ length: 24 }, (_, i) => i); 

function formatHour(h) {
  if (h === 0 || h === 24) return '12 AM';
  if (h === 12) return '12 PM';
  if (h < 12) return `${h} AM`;
  return `${h - 12} PM`;
}

function formatTime12(h) {
  const hours = Math.floor(h);
  const mins = Math.round((h - hours) * 60);
  const suffix = hours >= 12 ? 'PM' : 'AM';
  const display = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
  return `${String(display).padStart(2, '0')}:${String(mins).padStart(2, '0')} ${suffix}`;
}

function getWeekStart(date) {
  const d = new Date(date);
  const day = d.getDay(); 
  d.setDate(d.getDate() - day);
  d.setHours(0, 0, 0, 0);
  return d;
}

export default function CalendarPage() {
  const [viewMode, setViewMode] = useState('weekly'); 
  const [currentDate, setCurrentDate] = useState(new Date());

  const weekStart = useMemo(() => getWeekStart(currentDate), [currentDate]);

  const weekDays = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(weekStart);
      d.setDate(d.getDate() + i);
      return d;
    });
  }, [weekStart]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const monthLabel = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  const goToday = () => setCurrentDate(new Date());
  const goPrev = () => {
    const d = new Date(currentDate);
    d.setDate(d.getDate() - 7);
    setCurrentDate(d);
  };
  const goNext = () => {
    const d = new Date(currentDate);
    d.setDate(d.getDate() + 7);
    setCurrentDate(d);
  };

  
  const now = new Date();
  const currentHourDecimal = now.getHours() + now.getMinutes() / 60;
  const isTodayInWeek = weekDays.some(d => d.toDateString() === today.toDateString());
  const todayDayIndex = weekDays.findIndex(d => d.toDateString() === today.toDateString());

  return (
    <div className="cal-page-layout">
      <Navbar variant="dashboard" />
      <Sidebar />
      <main className="cal-main-area">
        
        <div className="cal-controls">
          <div className="cal-controls-left">
            <button className="cal-today-btn" onClick={goToday}>Today</button>
            <button className="cal-nav-btn" onClick={goPrev}>
              <NSIcon name="chevron-left" size="16" />
            </button>
            <button className="cal-nav-btn" onClick={goNext}>
              <NSIcon name="chevron-right" size="16" />
            </button>
            <span className="cal-month-label">{monthLabel}</span>
          </div>
          <div className="cal-controls-right">
            <div className="cal-view-toggle">
              <button
                className={`cal-view-btn ${viewMode === 'weekly' ? 'active' : ''}`}
                onClick={() => setViewMode('weekly')}
              >Weekly</button>
              <button
                className={`cal-view-btn ${viewMode === 'monthly' ? 'active' : ''}`}
                onClick={() => setViewMode('monthly')}
              >Monthly</button>
            </div>
            <div className="cal-subjects-dropdown">
              <span>{SUBJECTS.length} selected</span>
              <NSIcon name="chevron-down" size="14" />
            </div>
          </div>
        </div>

        
        <div className="cal-week-grid">
          
          <div className="cal-day-headers">
            <div className="cal-time-gutter-header" />
            {weekDays.map((d, i) => {
              const isToday = d.toDateString() === today.toDateString();
              const isSat = d.getDay() === 6;
              return (
                <div key={i} className={`cal-day-header ${isToday ? 'today' : ''} ${isSat ? 'saturday' : ''}`}>
                  <span className="cal-day-name">{DAY_NAMES[d.getDay()]}</span>
                  <span className={`cal-day-num ${isToday ? 'today-num' : ''}`}>{d.getDate()}</span>
                </div>
              );
            })}
          </div>

          
          <div className="cal-time-body">
            {HOURS.map((hour) => (
              <div className="cal-time-row" key={hour}>
                <div className="cal-time-label">{formatHour(hour)}</div>
                {weekDays.map((_, dayIdx) => (
                  <div className="cal-time-cell" key={dayIdx} />
                ))}
              </div>
            ))}

            
            {CALENDAR_EVENTS.map((evt) => {
              const top = evt.startHour * 54; 
              const height = (evt.endHour - evt.startHour) * 54;
              const colStart = evt.day; 
              return (
                <div
                  key={evt.id}
                  className="cal-event-block"
                  style={{
                    top: `${top}px`,
                    height: `${height}px`,
                    left: `calc(60px + ${colStart} * ((100% - 60px) / 7))`,
                    width: `calc((100% - 60px) / 7 - 4px)`,
                    backgroundColor: evt.color,
                  }}
                >
                  {evt.title && (
                    <>
                      <span className="cal-event-title">{evt.title}</span>
                      <span className="cal-event-time">
                        {formatTime12(evt.startHour)} - {formatTime12(evt.endHour)}
                      </span>
                    </>
                  )}
                </div>
              );
            })}

            
            {isTodayInWeek && todayDayIndex >= 0 && (
              <div
                className="cal-now-line"
                style={{ top: `${currentHourDecimal * 54}px` }}
              >
                <div
                  className="cal-now-dot"
                  style={{
                    left: `calc(60px + ${todayDayIndex} * ((100% - 60px) / 7) - 5px)`,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
