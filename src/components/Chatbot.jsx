import React, { useState } from "react";
import "./Chatbot.css";

const models = ["OpenAI", "Gemini", "LLaMA"];

export default function ChatbotWithUserInfo() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [selectedModel, setSelectedModel] = useState(models[0]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { user: true, text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    if (selectedModel === "OpenAI") {
      try {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content: "You are a helpful school assistant.",
              },
              { role: "user", content: input },
            ],
            temperature: 0.7,
          }),
        });

        const data = await res.json();
        const aiText = data.choices?.[0]?.message?.content || "No response";
        const confidence = Math.floor(Math.random() * 31) + 70;

        setMessages((prev) => [
          ...prev,
          {
            user: false,
            text: `[OpenAI] ${aiText}`,
            confidence,
          },
        ]);
      } catch (err) {
        console.error("OpenAI error:", err);
        setMessages((prev) => [
          ...prev,
          {
            user: false,
            text: `[OpenAI] Sorry, something went wrong.`,
            confidence: 0,
          },
        ]);
      }
    } else {
      const responses = [
        "Here’s what I found!",
        "This might help based on my training.",
        "Interesting! Here's a suggestion.",
      ];
      const confidence = Math.floor(Math.random() * 41) + 60;
      const text = responses[Math.floor(Math.random() * responses.length)];

      setMessages((prev) => [
        ...prev,
        {
          user: false,
          text: `[${selectedModel}] ${text}`,
          confidence,
        },
      ]);
    }
  };

  return (
    <div className="chatbot-userinfo-container">
      {/* Left Side: User Info */}
      <div className="user-info-box">
      <img src="img.jpg" alt="Admin" className="admin-image" />

        <h3>Hello, Admin</h3>
        <p className="user-role">Admin</p>
      </div>

      {/* Right Side: Chatbot */}
      <div className="chatbot">
        <div className="chatbot-header">
          <h3>Ask the School Assistant</h3>
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
          >
            {models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>

        <div className="chat-window">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`chat-message ${msg.user ? "user" : "bot"}`}
            >
              <p>{msg.text}</p>
              {!msg.user && (
                <div className="confidence-bar">
                  <div
                    className="confidence-fill"
                    style={{
                      width: `${msg.confidence}%`,
                      backgroundColor:
                        msg.confidence > 85
                          ? "#4caf50"
                          : msg.confidence > 70
                          ? "#ffc107"
                          : "#f44336",
                    }}
                  />
                  <span className="confidence-label">
                    Confidence: {msg.confidence}%
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Ask something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}
