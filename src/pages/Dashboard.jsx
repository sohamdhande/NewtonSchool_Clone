import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/dashboard/Sidebar';
import MainFeed from '../components/dashboard/MainFeed';
import RightWidgets from '../components/dashboard/RightWidgets';
import './Dashboard.css';

const Dashboard = () => {
  const [dummyCount, setdummyCount] = useState(0);

  useEffect(() => {
    console.log("dashboard loaded")
  }, []);

  return (
    <div className="dashboard-container">
      <Navbar variant="dashboard" />
      <Sidebar />
      <MainFeed />
      <RightWidgets />
    </div>
  );
};

export default Dashboard;
