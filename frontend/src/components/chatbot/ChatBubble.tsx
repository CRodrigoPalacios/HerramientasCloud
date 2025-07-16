import React from 'react';
import { useChatbot } from './ChatbotContext';
import './chatbot.css';

const ChatBubble: React.FC = () => {
  const { toggleChat } = useChatbot();

  return (
    <div className="chat-bubble" onClick={toggleChat}>
      🕒
    </div>
  );
};

export default ChatBubble;