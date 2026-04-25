import React from 'react';
import "@newtonschool/grauity/dist/css/index.scss";
import { NSIcon } from '@newtonschool/grauity';
import './ArenaPage.scss';
import Navbar from '../components/Navbar';
import Sidebar from '../components/dashboard/Sidebar';

const arenaData = [
  { id: 1, title: 'Right angle triangle', tags: ['Loops', 'Pattern Making', '+1'], difficulty: 'Easy', xp: '10/10', solvedBy: '18262 (84%)', status: 'solved' },
  { id: 2, title: 'Operators', tags: ['General Maths'], difficulty: 'Easy', xp: '10/10', solvedBy: '13473 (71%)', status: 'solved' },
  { id: 3, title: 'Doctor clinic', tags: ['Loops', 'Python Loops'], difficulty: 'Easy', xp: '0/10', solvedBy: '9623 (76%)', status: 'unsolved' },
  { id: 4, title: 'Leap', tags: ['Switch case'], difficulty: 'Easy', xp: '0/10', solvedBy: '8663 (78%)', status: 'unsolved' },
  { id: 5, title: "Nobita's Text", tags: ['General Maths'], difficulty: 'Easy', xp: '0/10', solvedBy: '7476 (76%)', status: 'unsolved' },
  { id: 6, title: 'Odd or Even', tags: ['Switch case'], extBadges: ['M', '+1'], difficulty: 'Easy', xp: '0/10', solvedBy: '6761 (86%)', status: 'unsolved' },
  { id: 7, title: 'Compute power', tags: ['Recursion'], difficulty: 'Easy', xp: '0/10', solvedBy: '5586 (80%)', status: 'unsolved' },
  { id: 8, title: 'Race', tags: ['Ternary Operator'], difficulty: 'Easy', xp: '0/10', solvedBy: '5220 (68%)', status: 'unsolved' },
  { id: 9, title: 'Check if prime', tags: ['Primes'], difficulty: 'Easy', xp: '0/10', solvedBy: '5133 (68%)', status: 'unsolved' },
  { id: 10, title: 'Smallest String There Is', tags: ['String', 'Python String'], difficulty: 'Easy', xp: '0/10', solvedBy: '4930 (91%)', status: 'unsolved' },
  { id: 11, title: 'Bubble sort in pair array', tags: ['Bubble Sort'], difficulty: 'Easy', xp: '0/10', solvedBy: '4752 (62%)', status: 'unsolved' },
  { id: 12, title: 'Finite input', tags: ['Loops', 'Python Loops'], difficulty: 'Medium', xp: '0/20', solvedBy: '4520 (67%)', status: 'unsolved' },
  { id: 13, title: 'Tortoise Water Game', tags: ['Components of Logic Building'], difficulty: 'Easy', xp: '0/10', solvedBy: '4442 (89%)', status: 'unsolved' },
  { id: 14, title: 'Maximum difference array', tags: ['1-D Array', 'Merge Sort', '+2'], difficulty: 'Medium', xp: '0/20', solvedBy: '3952 (58%)', status: 'unsolved' },
  { id: 15, title: 'RMS of an array', tags: ['1-D Array'], difficulty: 'Easy', xp: '0/10', solvedBy: '3885 (51%)', status: 'unsolved' }
];

const RECENT_TOPICS = ['Linked List', 'Sorting Algorithms', 'Merge Sort', 'Divide & Conquer', 'Recursion', 'Stack', 'Classes & Objects', 'Binary Search', 'Bubble Sort'];

export default function ArenaPage() {
    return (
        <div className="ar-page-layout">
            <Navbar variant="dashboard" />
            <Sidebar />
            <main className="ar-main-area">
                <div className="arena-container">
                    <div className="arena-header-banner">
                        <div className="arena-header-content">
                            <h1>Arena</h1>
                            <p>Master your skills by practicing questions here</p>
                        </div>
                    </div>

                    <div className="arena-content-area">
                        <div className="arena-main-layout">
                            <div className="arena-left-pane">
                                <div className="arena-top-controls">
                                    <div className="arena-search-bar">
                                        <NSIcon name="search" size="16" color="#888" className="ar-search-icon" />
                                        <input type="text" placeholder="Search Questions" />
                                    </div>
                                    
                                    <div className="arena-filters">
                                        <button className="ar-filter-btn">Topic <NSIcon name="chevron-down" size="14" /></button>
                                        <button className="ar-filter-btn">Difficulty <NSIcon name="chevron-down" size="14" /></button>
                                        <button className="ar-filter-btn">Companies <NSIcon name="chevron-down" size="14" /></button>
                                        <button className="ar-filter-btn">Module <NSIcon name="chevron-down" size="14" /></button>
                                    </div>

                                    <div className="arena-tabs">
                                        <div className="ar-tab active">All</div>
                                        <div className="ar-tab">Unsolved <span className="ar-tab-count pill">532</span></div>
                                        <div className="ar-tab">Solved <span className="ar-tab-count pill">2</span></div>
                                    </div>
                                </div>

                                <div className="arena-table">
                                    <div className="ar-thead">
                                        <div className="ar-th ar-status-col">STATUS</div>
                                        <div className="ar-th ar-question-col">QUESTIONS</div>
                                        <div className="ar-th ar-diff-col">DIFFICULTY</div>
                                        <div className="ar-th ar-xp-col">XP EARNED</div>
                                        <div className="ar-th ar-solved-col">SOLVED BY //</div>
                                    </div>
                                    
                                    <div className="ar-tbody">
                                        {arenaData.map(q => (
                                            <div className="ar-trow" key={q.id}>
                                                <div className="ar-td ar-status-col">
                                                    {q.status === 'solved' ? (
                                                        <div className="ar-status-icon solved">
                                                            <NSIcon name="check" size="10" color="#fff" />
                                                        </div>
                                                    ) : (
                                                        <div className="ar-status-icon unsolved"></div>
                                                    )}
                                                </div>
                                                
                                                <div className="ar-td ar-question-col">
                                                    <div className="ar-q-title">{q.title}</div>
                                                    <div className="ar-q-tags">
                                                        {q.tags.map((t, idx) => (
                                                            <span key={idx} className="ar-q-tag">{t}</span>
                                                        ))}
                                                        {q.extBadges && q.extBadges.map((b, idx) => (
                                                            <span key={idx} className="ar-badge-ext">{b}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                
                                                <div className={`ar-td ar-diff-col ar-diff-${q.difficulty.toLowerCase()}`}>
                                                    {q.difficulty}
                                                </div>
                                                
                                                <div className="ar-td ar-xp-col">
                                                    <div className="lb-xp-coin">
                                                        <NSIcon name="thunder-filled" size="10" color="#fff" />
                                                    </div>
                                                    {q.xp}
                                                </div>
                                                
                                                <div className="ar-td ar-solved-col">
                                                    {q.solvedBy} <NSIcon name="chevron-right" size="14" color="#888" style={{marginLeft: "8px"}} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="arena-pagination">
                                    <button className="ar-page-btn"><NSIcon name="chevron-left" size="12" /> Previous</button>
                                    <div className="ar-page-numbers">
                                        <button className="ar-page-num active">1</button>
                                        <button className="ar-page-num">2</button>
                                        <button className="ar-page-num">3</button>
                                        <span className="ar-page-dots">...</span>
                                        <button className="ar-page-num">38</button>
                                    </div>
                                    <button className="ar-page-btn">Next <NSIcon name="chevron-right" size="12" /></button>
                                </div>
                            </div>
                            
                            <div className="arena-right-pane">
                                <div className="ar-sidebar-card">
                                    <div className="ar-card-title">QUESTIONS SOLVED</div>
                                    <div className="ar-solved-stats">
                                        <span className="ar-highlight">2</span><span className="ar-total">/534</span>
                                    </div>
                                    <div className="ar-progress-bar-wrap">
                                        <div className="ar-progress-icon">
                                            <NSIcon name="code" size="10" color="#528cff" />
                                        </div>
                                        <div className="ar-progress-bar">
                                            <div className="ar-progress-fill" style={{width: '2%'}}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="ar-sidebar-card">
                                    <div className="ar-card-title">RECENT TOPICS</div>
                                    <div className="ar-topics-grid">
                                        {RECENT_TOPICS.map((topic, idx) => (
                                            <span key={idx} className="ar-topic-pill">{topic}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
