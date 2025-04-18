// src/components/ChatbotTest.jsx
import React, { useState } from 'react';
import './ChatbotTest.css';

export default function ChatbotTest() {
  // Real-time testing variables
  const [testQuery, setTestQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState('');

  // Handle real-time testing of the chatbot
  const handleTestSubmit = () => {
    if (!testQuery) return; // Prevent empty queries

    setIsProcessing(true);
    setFeedbackMessage('');
    setFeedbackType('');

    // Simulate a network call or chatbot response processing
    setTimeout(() => {
      setIsProcessing(false);
      setFeedbackMessage(`Test query "${testQuery}" processed successfully!`);
      setFeedbackType('success');
      setTestQuery('');
    }, 2000); // Simulating delay
  };

  return (
    <section className="chatbot-test-section">
      <h3 className="section-title">Real-Time Chatbot Test</h3>

      {/* Real-Time Chatbot Testing Section */}
      <div className="test-chatbot-section">
        <label htmlFor="testQuery" className="test-query-label">Test Chatbot:</label>
        <input
          type="text"
          id="testQuery"
          value={testQuery}
          onChange={(e) => setTestQuery(e.target.value)}
          className="test-query-input"
          aria-label="Enter your query to test the chatbot"
        />
        <button
          onClick={handleTestSubmit}
          className="action-btn test-submit-btn"
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Submit Query'}
        </button>

        {isProcessing && <div className="loading-spinner">Processing...</div>}
        {feedbackMessage && (
          <div
            className={`feedback-message ${feedbackType}`}
            role="alert"
          >
            {feedbackMessage}
          </div>
        )}
      </div>
    </section>
  );
}
