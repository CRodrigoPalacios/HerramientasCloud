import React, { createContext, useState, useContext } from 'react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

interface ChatbotContextType {
  messages: Message[];
  addMessage: (message: Message) => void;
  isOpen: boolean;
  toggleChat: () => void;
  context: string;
  setContext: (context: string) => void;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export const ChatbotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: '¡Hola! Soy tu asistente de relojes. ¿Buscas un reloj nuevo, info sobre envíos o algo más? 🕒' },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [context, setContext] = useState<string>('ventas');

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ChatbotContext.Provider value={{ messages, addMessage, isOpen, toggleChat, context, setContext }}>
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
};