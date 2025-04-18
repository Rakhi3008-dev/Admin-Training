import React from 'react';
import Layout from '../components/Layout';

import Chatbot from '../components/Chatbot.jsx';
import LowConfidenceList from '../components/LowConfidence.jsx';
import ChatbotTest from '../components/ChatbotTest.jsx';
import Analytics from '../components/Analytics.jsx';


export default function AdminPortal() {
  

  return (
    <div className="admin-portal">
      
      <main>
      <Layout>
      
        <Chatbot />
        <LowConfidenceList />
        <ChatbotTest/>
        <Analytics />
        </Layout>
      </main>
    </div>
  );
}
