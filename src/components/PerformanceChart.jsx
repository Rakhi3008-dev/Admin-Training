import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './PerformanceChart.css';

const PerformanceChart = ({ data }) => {
  return (
    <div className="performance-chart-wrapper">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Line for Confidence Trend */}
          <Line type="monotone" dataKey="confidence" stroke="#8884d8" />
          {/* Line for Response Time Trend */}
          <Line type="monotone" dataKey="responseTime" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
