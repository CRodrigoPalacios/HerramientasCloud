import React, { useEffect, useRef } from 'react';
import { useChatbot } from './ChatbotContext';
import './chatbot.css';

const ChatMessages: React.FC = () => {
  const { messages } = useChatbot();
  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-body" ref={chatBodyRef}>
      {messages.map((msg, index) => (
        <div key={index} className={`chat-message ${msg.sender}-message`}>
          {msg.text}
        </div>
      ))}
    </div>
  );
};
export default ChatMessages;