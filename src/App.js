import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Pricing from './components/Pricing';
import ContactUs from './components/ContactUs';
import FAQ from './components/FAQ';
import TermsOfUse from './components/Terms';
import SuggestionList from './components/SuggestionList';
import ChatList from './components/ChatList';
import TypingArea from './components/TypingArea';
import PrivateRoute from './components/PrivateRoute';
import { Container } from 'react-bootstrap';
import './App.css';

const App = () => {
  const [chats, setChats] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showChatList, setShowChatList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestionText, setSuggestionText] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  // Load chats from localStorage on component mount
  useEffect(() => {
    const savedChats = localStorage.getItem('chats');
    if (savedChats) {
      setChats(JSON.parse(savedChats));
    }
  }, []);

  // Save chats to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('chats', JSON.stringify(chats));
  }, [chats]);

  const handleSend = (message) => {
    setChats((prevChats) => {
      const updatedChats = [...prevChats, message];
      localStorage.setItem('chats', JSON.stringify(updatedChats)); // Save to localStorage
      return updatedChats;
    });
    setShowSuggestions(false);
    setShowChatList(true);
    setIsLoading(true);
  };

  const addApiResponse = (response) => {
    setTimeout(() => {
      setChats((prevChats) => {
        const updatedChats = [...prevChats, response];
        localStorage.setItem('chats', JSON.stringify(updatedChats)); // Save to localStorage
        return updatedChats;
      });
      setIsLoading(false);
    }, 3000);
  };

  const LoadingEffect = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }, [location]);

    return loading ? (
      <div className="loading-overlay">
        <img src={`${process.env.PUBLIC_URL}/th.png`} alt="Loading..." className="loading-image" />
      </div>
    ) : null;
  };

  return (
    <Router>
      <div>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Sidebar />
        <LoadingEffect />
        <Container className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/try-free" element={<Navigate to="/login" />} />
            <Route path="/chat" element={
              <PrivateRoute>
                <>
                  {showSuggestions && <SuggestionList setSuggestionText={setSuggestionText} />}
                  {showChatList && <ChatList chats={chats} isLoading={isLoading} />}
                  <TypingArea handleSend={handleSend} addApiResponse={addApiResponse} suggestionText={suggestionText} />
                </>
              </PrivateRoute>
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
