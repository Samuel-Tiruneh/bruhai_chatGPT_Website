import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import './TypingArea.css';

const TypingArea = ({ handleSend, addApiResponse, suggestionText }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (suggestionText) {
      setMessage(suggestionText);
    }
  }, [suggestionText]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const outgoingMessage = { text: message, type: 'outgoing', avatar: `${process.env.PUBLIC_URL}/user.jpg` };
    handleSend(outgoingMessage);
    setMessage('');

    // Making API call
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.REACT_APP_API_KEY}`,
        {
          contents: [{
            role: 'user',
            parts: [{ text: message }]
          }]
        }
      );
      const apiResponse = response.data.candidates[0].content.parts[0].text;
      const incomingMessage = { text: apiResponse, type: 'incoming', avatar: `${process.env.PUBLIC_URL}/th.png` };
      addApiResponse(incomingMessage);
    } catch (error) {
      console.error("API call failed: ", error);
      const errorMessage = { text: "Error fetching response from the API", type: 'incoming', avatar: `${process.env.PUBLIC_URL}/th.png` };
      addApiResponse(errorMessage);
    }
  };

  const clearChats = () => {
    localStorage.removeItem('chats');
    window.location.reload(); // Reload the page to refresh the chat list
  };

  return (
    <div className="typing-area">
      <Form onSubmit={onSubmit} className="typing-form">
        <div className="input-wrapper">
          <Form.Control
            type="text"
            placeholder="Enter a prompt here"
            className="typing-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit" className="icon material-icons">
            send
          </button>
          <button type="button" className="clear-button" onClick={clearChats}>
            clear
          </button>
        </div>
      </Form>
      <p className="disclaimer-text">
        This AI is still learning, so always verify the responses!
      </p>
    </div>
  );
};

export default TypingArea;
