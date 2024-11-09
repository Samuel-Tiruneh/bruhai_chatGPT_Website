import React, { useState } from 'react';
import TypingArea from './TypingArea'; // Adjust the path if necessary
import SuggestionList from './SuggestionList'; // Adjust the path if necessary
import ChatList from './ChatList'; // Adjust the path if necessary

const ParentComponent = () => {
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestionText, setSuggestionText] = useState('');

  const handleSend = (message) => {
    setChats(prevChats => [...prevChats, message]);
    setIsLoading(true);
  };

  const addApiResponse = (response) => {
    setChats(prevChats => [...prevChats, response]);
    setIsLoading(false);
  };

  return (
    <div>
      <SuggestionList setSuggestionText={setSuggestionText} />
      <ChatList chats={chats} isLoading={isLoading} />
      <TypingArea handleSend={handleSend} addApiResponse={addApiResponse} suggestionText={suggestionText} />
    </div>
  );
};

export default ParentComponent;
