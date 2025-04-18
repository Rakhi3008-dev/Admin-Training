// src/components/LowConfidence.jsx
import React, { useState } from 'react';
import './LowConfidence.css'; // Importing the custom styles

export default function LowConfidence() {
  // Simulated data for low-confidence queries
  const [lowConfidenceQueries, setLowConfidenceQueries] = useState([
    {
      id: 1,
      query: 'What is the weather like today?',
      confidenceScore: 0.45,
      status: 'unresolved',
    },
    {
      id: 2,
      query: 'Can you help me with my account?',
      confidenceScore: 0.32,
      status: 'unresolved',
    },
    {
      id: 3,
      query: 'What is the time in New York?',
      confidenceScore: 0.25,
      status: 'unresolved',
    },
  ]);

  // Handling query actions (resolved, review, add training data)
  const handleAction = (id, action) => {
    setLowConfidenceQueries((prevQueries) => {
      return prevQueries.map((query) => {
        if (query.id === id) {
          switch (action) {
            case 'resolved':
              return { ...query, status: 'resolved' };
            case 'review':
              return { ...query, status: 'flagged for review' };
            case 'addData':
              return { ...query, status: 'training data added' };
            default:
              return query;
          }
        }
        return query;
      });
    });
  };

  return (
    <section className="low-confidence-section">
      <h3 className="section-title">Low Confidence Queries</h3>
      <table className="queries-table">
        <thead>
          <tr>
            <th>Query</th>
            <th>Confidence Score</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {lowConfidenceQueries.map((query) => (
            <tr key={query.id}>
              <td>{query.query}</td>
              <td>{query.confidenceScore}</td>
              <td>{query.status}</td>
              <td>
                <button
                  onClick={() => handleAction(query.id, 'resolved')}
                  className="action-btn resolved-btn"
                >
                  Mark Resolved
                </button>
                <button
                  onClick={() => handleAction(query.id, 'review')}
                  className="action-btn review-btn"
                >
                  Flag for Review
                </button>
                <button
                  onClick={() => handleAction(query.id, 'addData')}
                  className="action-btn addData-btn"
                >
                  Add Training Data
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
