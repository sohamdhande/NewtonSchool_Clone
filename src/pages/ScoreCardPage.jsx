import React from 'react';
import { NSIcon } from '@newtonschool/grauity';
import './ScoreCardPage.scss';
import Navbar from '../components/Navbar';
import Sidebar from '../components/dashboard/Sidebar';

const marksData = [
  { component: 'Contest 1', obtained: 88, total: 100, percentage: '88.00 %', currentWeight: '2.08', finalWeight: '2.08' },
  { component: 'Contest 2', obtained: 73, total: 100, percentage: '73.00 %', currentWeight: '2.08', finalWeight: '2.08' },
  { component: 'Mid Semester Exam', obtained: 81, total: 100, percentage: '81.00 %', currentWeight: '16.67', finalWeight: '16.67' },
  { component: 'Contest 3', obtained: 64, total: 100, percentage: '64.00 %', currentWeight: '2.08', finalWeight: '2.08' },
  { component: 'End Term Project', obtained: 76, total: 100, percentage: '76.00 %', currentWeight: '12.5', finalWeight: '12.5' },
  { component: 'Interviews', obtained: 90, total: 100, percentage: '90.00 %', currentWeight: '4.17', finalWeight: '4.17' },
  { component: 'Class Participation', obtained: 85, total: 100, percentage: '85.00 %', currentWeight: '12.5', finalWeight: '12.5' },
  { component: 'Semester Exam', obtained: 71, total: 100, percentage: '71.00 %', currentWeight: '41.66', finalWeight: '41.66' },
  { component: 'Contests', obtained: 68, total: 100, percentage: '68.00 %', currentWeight: '12.5', finalWeight: '12.5' },
  { component: 'Contest 4', obtained: 55, total: 100, percentage: '55.00 %', currentWeight: '2.08', finalWeight: '2.08' },
];

export default function ScoreCardPage() {
  return (
    <div className="sc-page-layout">
      <Navbar variant="dashboard" />
      <Sidebar />
      <main className="sc-main-area">
        <div className="sc-header">
          <div className="sc-subject-info">
            <h1 className="sc-subject-name">WAP Ramanujan</h1>
            <p className="sc-credit">3 Credit</p>
            <p className="sc-updated">Last Updated - 20 Apr 2026, 3:45 pm</p>
          </div>
          <div className="sc-summary-pill">
            <span>Percentage : 82.00 %</span>
            <span className="sc-pill-divider"></span>
            <span>GPA : -</span>
          </div>
        </div>

        <div className="sc-table-container">
          <table className="sc-table">
            <thead>
              <tr>
                <th>COMPONENT</th>
                <th>MARKS OBTAINED</th>
                <th>TOTAL MARKS</th>
                <th>PERCENTAGE (%)</th>
                <th>CURRENT WEIGHTAGE</th>
                <th>FINAL WEIGHTAGE</th>
              </tr>
            </thead>
            <tbody>
              {marksData.map((row, idx) => (
                <tr key={idx}>
                  <td className="sc-component-name">{row.component}</td>
                  <td>{row.obtained}</td>
                  <td>{row.total}</td>
                  <td>{row.percentage}</td>
                  <td>{row.currentWeight}</td>
                  <td>{row.finalWeight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
