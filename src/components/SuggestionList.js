import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './SuggestionList.css';

const suggestions = [
  { text: "Build a weather app using React", icon: "code" },
  { text: "Try abstract painting techniques", icon: "brush" },
  { text: "Top 10 football skills to practice", icon: "sports_soccer" },
  { text: "Explore the Amazon rainforest", icon: "nature" }
];

const SuggestionList = ({ setSuggestionText }) => {
  const handleSuggestionClick = (text) => {
    setSuggestionText(text);
  };

  return (
    <ListGroup className="suggestion-list d-flex flex-row overflow-auto">
      {suggestions.map((suggestion, index) => (
        <ListGroup.Item
          key={index}
          className="d-flex flex-column justify-content-between align-items-end suggestion"
          onClick={() => handleSuggestionClick(suggestion.text)}
        >
          <h4 className="text">{suggestion.text}</h4>
          <span className="material-icons-outlined">{suggestion.icon}</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default SuggestionList;
