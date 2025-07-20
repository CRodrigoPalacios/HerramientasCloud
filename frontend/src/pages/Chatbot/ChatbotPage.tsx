import React, { useState } from 'react';
import ChatMessages from '../../components/chatbot/ChatMessages';
import { useChatbot } from '../../components/chatbot/ChatbotContext';
import axios from 'axios';
import '../../components/chatbot/chatbot.css';

const ChatbotPage: React.FC = () => {
  const { addMessage, isOpen, context, setContext } = useChatbot();
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    addMessage({ sender: 'user', text: input });
    try {
      const response = await axios.post('http://localhost:3000/bot/ecommerce-chat', {
        question: input,
        context,
      });
      addMessage({ sender: 'bot', text: response.data.answer });
    } catch (error) {
      addMessage({ sender: 'bot', text: 'Ups, algo salió mal. Intenta de nuevo.' });
    }
    setInput('');
  };

  return (
    <div className={`chat-container ${isOpen ? 'active' : ''}`}>
      <div className="chat-header">Asistente de Relojes</div>
      <div className="chat-context">
        <select value={context} onChange={(e) => setContext(e.target.value)}>
          <option value="ventas">Ventas</option>
          <option value="envio">Envío</option>
          <option value="garantia">Garantía</option>
          <option value="soporte">Soporte</option>
        </select>
      </div>
      <ChatMessages />
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
};

export default ChatbotPage;