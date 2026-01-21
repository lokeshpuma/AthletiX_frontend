import { useState, useRef, useEffect } from "react";
import "./sportsChatbot.scss";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import SportsIcon from "@mui/icons-material/Sports";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const SportsChatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Hi there! I'm your sports assistant. Ask me anything about sports scores, players, schedules, or news!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const chatbotRef = useRef(null);

  // Sample responses for demo purposes
  const sportResponses = {
    basketball: [
      "The Lakers defeated the Celtics 114-106 in their last matchup.",
      "LeBron James is averaging 27.4 points, 8.3 rebounds, and 7.1 assists this season.",
      "The NBA Finals are scheduled to begin on June 1st.",
      "Steph Curry holds the record for most 3-pointers in a single season with 402."
    ],
    football: [
      "The Chiefs won the last Super Bowl, defeating the 49ers 31-20.",
      "Tom Brady has won 7 Super Bowl championships in his career.",
      "The upcoming NFL season will kick off on September 8th.",
      "Patrick Mahomes passed for 4,839 yards last season with 37 touchdowns."
    ],
    soccer: [
      "Real Madrid won the Champions League last season.",
      "Lionel Messi has won the Ballon d'Or 7 times, the most of any player.",
      "The FIFA World Cup will be held in 2026 across the United States, Canada, and Mexico.",
      "Cristiano Ronaldo has scored over 800 official career goals."
    ],
    tennis: [
      "Rafael Nadal has won the French Open 14 times, the most of any player at a single Grand Slam.",
      "The Wimbledon Championships will begin on July 3rd this year.",
      "Novak Djokovic currently holds the record for most Grand Slam titles in men's singles with 24.",
      "The US Open is played on hard courts at Flushing Meadows in New York."
    ],
    generic: [
      "I'm your sports assistant! Feel free to ask about any sport, team, or player.",
      "I can provide information about scores, statistics, schedules, and the latest sports news.",
      "Would you like to know about recent sporting events or upcoming matches?",
      "I can help with information on basketball, football, soccer, tennis, baseball, and more!"
    ]
  };

  // Auto-scroll to the bottom of the chat
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle user sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (input.trim() === "") return;
    
    // Add user message
    const userMessage = {
      type: "user",
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate response delay
    setTimeout(() => {
      // Generate bot response
      const botResponse = generateResponse(input);
      
      setMessages(prev => [...prev, {
        type: "bot",
        content: botResponse,
        timestamp: new Date()
      }]);
      
      setIsTyping(false);
    }, 1000);
  };

  // Simple response generator (for demo purposes)
  const generateResponse = (input) => {
    input = input.toLowerCase();
    
    if (input.includes("basketball") || input.includes("nba") || input.includes("lakers") || 
        input.includes("lebron") || input.includes("jordan")) {
      return sportResponses.basketball[Math.floor(Math.random() * sportResponses.basketball.length)];
    } else if (input.includes("football") || input.includes("nfl") || input.includes("super bowl") || 
              input.includes("quarterback") || input.includes("touchdown")) {
      return sportResponses.football[Math.floor(Math.random() * sportResponses.football.length)];
    } else if (input.includes("soccer") || input.includes("fifa") || input.includes("world cup") || 
              input.includes("messi") || input.includes("ronaldo") || input.includes("premier league")) {
      return sportResponses.soccer[Math.floor(Math.random() * sportResponses.soccer.length)];
    } else if (input.includes("tennis") || input.includes("grand slam") || input.includes("wimbledon") || 
              input.includes("nadal") || input.includes("federer") || input.includes("djokovic")) {
      return sportResponses.tennis[Math.floor(Math.random() * sportResponses.tennis.length)];
    } else if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      return "Hi there! How can I help with your sports questions today?";
    } else if (input.includes("thank")) {
      return "You're welcome! Let me know if you have any other sports questions.";
    } else {
      return sportResponses.generic[Math.floor(Math.random() * sportResponses.generic.length)];
    }
  };

  // Format timestamp for messages
  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Handle clicking outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Prevent scrolling when chatbot is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <div className={`chatbot-overlay ${isOpen ? "open" : ""}`} onClick={onClose}></div>
      <div className={`sports-chatbot ${isOpen ? "open" : ""}`} ref={chatbotRef}>
        <div className="chatbot-header">
          <div className="header-title">
            <SportsIcon />
            <h3>Sports Assistant</h3>
          </div>
          <button className="close-btn" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        
        <div className="chatbot-body">
          <div className="messages-container">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.type}`}
              >
                {message.type === "bot" && (
                  <div className="message-avatar">
                    <SportsIcon />
                  </div>
                )}
                <div className="message-content">
                  <div className="message-text">{message.content}</div>
                  <div className="message-time">{formatTime(message.timestamp)}</div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot typing">
                <div className="message-avatar">
                  <SportsIcon />
                </div>
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        <div className="suggestion-chips">
          <button onClick={() => setInput("Latest NBA scores")}>
            <SportsBasketballIcon /> NBA Scores
          </button>
          <button onClick={() => setInput("Champions League schedule")}>
            <SportsSoccerIcon /> Soccer
          </button>
          <button onClick={() => setInput("NFL standings")}>
            <SportsFootballIcon /> NFL
          </button>
          <button onClick={() => setInput("Tennis grand slam dates")}>
            <SportsTennisIcon /> Tennis
          </button>
        </div>
        
        <form className="chatbot-input" onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Ask about sports..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" disabled={input.trim() === ""}>
            <SendIcon />
          </button>
        </form>
      </div>
    </>
  );
};

export default SportsChatbot; 