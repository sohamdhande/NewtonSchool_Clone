import React from 'react';
import "@newtonschool/grauity/dist/css/index.scss";
import { NSIcon } from '@newtonschool/grauity';
import './LeaderboardPage.scss';
import Navbar from '../components/Navbar';

const leaderboardData = [
    { rank: 1, name: "Injora", xp: 8500, change: "+5", submission: "2 mins ago", avatarStr: "IN" },
    { rank: 2, name: "Kartik Tripathi", xp: 7900, change: "+2", submission: "1 hr ago", avatarStr: "KT" },
    { rank: 3, name: "Soham Dhande", xp: 7500, change: "-", submission: "3 hrs ago", avatarStr: "SD" },
    { rank: 4, name: "Priya Sharma", xp: 7200, change: "+1", submission: "4 hrs ago", avatarStr: "PS" },
    { rank: 5, name: "Rahul Verma", xp: 7000, change: "-", submission: "4 hrs ago", avatarStr: "RV" },
    { rank: 6, name: "Sneha Patel", xp: 6800, change: "-1", submission: "5 hrs ago", avatarStr: "SP" },
    { rank: 7, name: "Amit Singh", xp: 6500, change: "+3", submission: "5 hrs ago", avatarStr: "AS" },
    { rank: 8, name: "Neha Gupta", xp: 6300, change: "-", submission: "6 hrs ago", avatarStr: "NG" },
    { rank: 9, name: "Rohan Desai", xp: 6100, change: "+2", submission: "8 hrs ago", avatarStr: "RD" },
    { rank: 10, name: "Pooja Reddy", xp: 5900, change: "-2", submission: "10 hrs ago", avatarStr: "PR" },
    { rank: 11, name: "Vivek Kumar", xp: 5800, change: "+1", submission: "12 hrs ago", avatarStr: "VK" },
    { rank: 12, name: "Anjali Joshi", xp: 5600, change: "-", submission: "12 hrs ago", avatarStr: "AJ" },
    { rank: 13, name: "Rohit Malhotra", xp: 5400, change: "-1", submission: "14 hrs ago", avatarStr: "RM" },
    { rank: 14, name: "Kavita Nair", xp: 5200, change: "+4", submission: "15 hrs ago", avatarStr: "KN" },
    { rank: 15, name: "Karan Mehta", xp: 5000, change: "-", submission: "16 hrs ago", avatarStr: "KM" },
    { rank: 16, name: "Divya Rao", xp: 4900, change: "-3", submission: "18 hrs ago", avatarStr: "DR" },
    { rank: 17, name: "Suresh Iyer", xp: 4800, change: "+1", submission: "20 hrs ago", avatarStr: "SI" },
    { rank: 18, name: "Ashwin Alwa", xp: 4500, change: "-", submission: "21 hrs ago", avatarStr: "AA" },
    { rank: 19, name: "Ritesh Kumar", xp: 4200, change: "-2", submission: "22 hrs ago", avatarStr: "RK" },
    { rank: 20, name: "Shivam Sirsat", xp: 4000, change: "+2", submission: "23 hrs ago", avatarStr: "SS" }
];

export default function LeaderboardPage() {
    const top3 = [leaderboardData[1], leaderboardData[0], leaderboardData[2]];

    return (
        <>
            <Navbar variant="dashboard" />
            <div className="lb-container">
            <div className="lb-header">
        <div className="lb-filters">
            <button className="lb-filter-btn">
                All Time
            </button>
            <button className="lb-filter-btn active">
                Apr 26 <NSIcon name="chevron-down" size="14" style={{ marginLeft: '4px' }} />
            </button>
        </div>

                <div className="lb-title-section">
                    <div className="lb-tag-wrapper">
                        <div className="lb-tag-line"></div>
                        <div className="lb-tag">
                            <NSIcon name="crown" size="12" /> APRIL 2026 CONTEST
                        </div>
                        <div className="lb-tag-line"></div>
                    </div>
                    <h1 className="lb-title">Leaderboard</h1>
                </div>

                <button className="lb-how-it-works">
                    How it Works
                </button>
            </div>

            <div className="lb-podium">
                {top3.map((user, idx) => {
                    const isCenter = idx === 1;
                    const podiumClass = isCenter ? "lb-podium-1" : (idx === 0 ? "lb-podium-2" : "lb-podium-3");
                    return (
                        <div key={user.rank} className={`lb-podium-item ${podiumClass}`}>
                            <div className="lb-avatar-wrap">
                                <div className="lb-avatar">{user.avatarStr}</div>
                                <div className="lb-rank-badge">{user.rank}</div>
                            </div>
                            <div className="lb-podium-name">{user.name}</div>
                            <div className="lb-podium-xp">
                                <div className="lb-xp-coin">
                                    <NSIcon name="thunder-filled" size="12" color="#fff" />
                                </div>
                                {user.xp}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="lb-main-card">
                <div className="lb-banner">
                    <div className="lb-banner-text">
                        <h3>Increase your XP to climb the leaderboard!</h3>
                        <p>Solve assignments, arena questions, contests, and quizzes.</p>
                    </div>
                    <div className="lb-banner-actions">
                        <button className="lb-banner-btn">Solve Assignments</button>
                        <button className="lb-banner-btn">Go To Arena</button>
                    </div>
                </div>

                <table className="lb-table">
                    <thead>
                        <tr>
                            <th className="lb-th lb-rank-col">
                                <div>
                                    <NSIcon name="crown" size="14" color="#f5b041" /> RANK
                                </div>
                            </th>
                            <th className="lb-th lb-change-col">CHANGE</th>
                            <th className="lb-th">NAME</th>
                            <th className="lb-th">XP THIS MONTH</th>
                            <th className="lb-th text-right">LATEST SUBMISSION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardData.map((user) => {
                            const isCurrentUser = user.name === "Injora";

                            let changeEl = "—";
                            if (user.change.startsWith('+')) {
                                changeEl = <span className="lb-change-up"><NSIcon name="caret-up" size="14" /> {user.change.slice(1)}</span>;
                            } else if (user.change.startsWith('-') && user.change.length > 1) {
                                changeEl = <span className="lb-change-down"><NSIcon name="caret-down" size="14" /> {user.change.slice(1)}</span>;
                            }

                            let rankEl = user.rank;
                            if (user.rank <= 3) {
                                rankEl = (
                                    <div className={`lb-rank-pill lb-rank-${user.rank}`}>
                                        <NSIcon name="crown" size="14" color="#fff" style={{ marginRight: '4px' }} /> {user.rank}
                                    </div>
                                );
                            }

                            return (
                                <tr key={user.rank} className={`lb-tr ${isCurrentUser ? 'active-user' : ''}`}>
                                    <td className="lb-td">{rankEl}</td>
                                    <td className="lb-td">{changeEl}</td>
                                    <td className="lb-td">
                                        <div className="lb-name-cell">
                                            <div className="lb-row-avatar">{user.avatarStr}</div>
                                            {user.name}
                                        </div>
                                    </td>
                                    <td className="lb-td">
                                        <div className="lb-xp-col">
                                            <div className="lb-xp-coin">
                                                <NSIcon name="thunder-filled" size="12" color="#fff" />
                                            </div>
                                            {user.xp}
                                        </div>
                                    </td>
                                    <td className="lb-td lb-time-col">{user.submission}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}