import React, { useState, useEffect, useRef } from 'react';
import { ListGroup, Image } from 'react-bootstrap';
import './ChatList.css';

const ChatList = ({ chats, isLoading }) => {
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(null);
  const [displayedMessage, setDisplayedMessage] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isLoading) {
      const lastMessageIndex = chats.length - 1;
      setLoadingMessageIndex(lastMessageIndex);
      setDisplayedMessage('');
    } else {
      setLoadingMessageIndex(null);
    }
  }, [isLoading, chats]);

  useEffect(() => {
    if (loadingMessageIndex !== null) {
      const message = chats[loadingMessageIndex].text.replace(/[*#]/g, '');
      setDisplayedMessage(message);
    }
  }, [loadingMessageIndex, chats]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }, [displayedMessage, chats]);

  const filterText = (text) => {
    return text.replace(/[*#]/g, '');
  };

  return (
    <ListGroup className="chat-list">
      {chats.map((chat, index) => (
        <React.Fragment key={index}>
          <ListGroup.Item 
            className={`message ${chat.type} ${chat.type === 'incoming' && index === loadingMessageIndex ? 'slide-down' : ''}`} 
            style={{ background: 'none', display: 'flex', justifyContent: chat.type === 'outgoing' ? 'flex-end' : 'flex-start', width: '100%' }}
          >
            <div className="message-content" style={{ flexDirection: chat.type === 'outgoing' ? 'row-reverse' : 'row' }}>
              <Image src={chat.type === 'outgoing' ? `${process.env.PUBLIC_URL}/user.jpg` : `${process.env.PUBLIC_URL}/th.png`} roundedCircle className="avatar" />
              <div className="text-container">
                <p className={`text ${chat.type === 'incoming' && index === loadingMessageIndex ? 'unblur' : ''}`}>{filterText(chat.text)}</p>
              </div>
            </div>
          </ListGroup.Item>
          {isLoading && chat.type === 'outgoing' && index === loadingMessageIndex && (
            <ListGroup.Item 
              className="message incoming slide-down" 
              style={{ background: 'none', display: 'flex', justifyContent: 'flex-start', width: '100%', padding: '0 1rem 1rem' }}
            >
              <div className="message-content" style={{ flexDirection: 'row' }}>
                <Image src={`${process.env.PUBLIC_URL}/th.png`} roundedCircle className="avatar rotate" />
                <div className="text-container loading-container">
                  <div className="loading-box">
                    <div className="loading-bar"></div>
                    <div className="loading-bar"></div>
                    <div className="loading-bar"></div>
                  </div>
                </div>
              </div>
            </ListGroup.Item>
          )}
        </React.Fragment>
      ))}
      <div ref={chatEndRef} />
    </ListGroup>
  );
};

export default ChatList;
