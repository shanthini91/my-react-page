import React, { useState } from "react";
import axios from "axios";
import "./ChatbotPopup.css";

const ChatbotPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "system", content: "You are a helpful assistant." }
  ]);
  const [input, setInput] = useState("");

  const togglePopup = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.post("http://localhost:5000/api/chat", {
        messages: newMessages,
      },
      
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const reply = response.data.choices[0].message;
      setMessages([...newMessages, reply]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={togglePopup}>💬</button>

      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <span>Hi!!! I'M Your Chat Assistant</span>
            <button onClick={togglePopup}>✖</button>
          </div>
          <div className="chatbot-messages">
            {messages
              .filter(msg => msg.role !== "system")
              .map((msg, idx) => (
                <div
                  key={idx}
                  className={`chatbot-message ${msg.role === "user" ? "user" : "bot"}`}
                >
                  {msg.content}
                </div>
              ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              placeholder="Type a message..."
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotPopup;
