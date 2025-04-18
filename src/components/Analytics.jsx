import React, { useState, useEffect } from 'react';
import PerformanceChart from './PerformanceChart';  // Charting component
import './Analytics.css';

export default function AnalyticsDashboard() {
  const [analyticsData, setAnalyticsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Simulate fetching data from an API
  const fetchAnalyticsData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulate an API request with setTimeout (Replace with real API call)
      setTimeout(() => {
        const newAnalytics = [
          { time: "12:00", confidence: 75, responseTime: 120 },
          { time: "12:01", confidence: 85, responseTime: 90 },
          { time: "12:02", confidence: 70, responseTime: 130 },
          // Add more data points
        ];
        setAnalyticsData(newAnalytics);
      }, 1000);
    } catch (err) {
      setError("Failed to load analytics data. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalyticsData();  // Fetch data on mount
  }, []);

  return (
    <div className="analytics-dashboard">
      <h3>Dashboard & Analytics</h3>
      
      {/* Display loading state */}
      {isLoading && <p>Loading analytics data...</p>}
      
      {/* Display error message */}
      {error && <p className="error-message">{error}</p>}

      {/* Button to manually fetch new data */}
      <button onClick={fetchAnalyticsData} disabled={isLoading}>
        {isLoading ? "Loading..." : "Fetch Analytics"}
      </button>

      {/* Only show chart if data is available */}
      {analyticsData.length > 0 && (
        <div className="analytics-container">
          <PerformanceChart data={analyticsData} />
        </div>
      )}
    </div>
  );
}
