import React from 'react';
import MyBarChart from '../MyChart/MyBarChart';
import MyLineChart from '../MyChart/MyLineChart';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <div className='chart-container'>
                <div className='line-chart'>
                    <h2>Month wise Sell</h2><MyLineChart></MyLineChart></div>
                <div className='bar-chart'>
                    <h2>Investment vs Revenue</h2><MyBarChart></MyBarChart></div>
            </div>
        </div>
    );
};

export default Dashboard;