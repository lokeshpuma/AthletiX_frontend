import { useState, useEffect, useRef } from "react";
import "./messages.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import SendIcon from "@mui/icons-material/Send";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

const Messages = () => {
  const { currentUser } = useContext(AuthContext);
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Mock data for contacts
  const mockContacts = [
    {
      id: 1,
      name: "John Doe",
      profilePic: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      lastMessage: "Hey, how are you?",
      timestamp: "10:30 AM",
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: "Jane Smith",
      profilePic: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      lastMessage: "Let's meet tomorrow",
      timestamp: "Yesterday",
      unread: 0,
      online: true
    },
    {
      id: 3,
      name: "Mike Johnson",
      profilePic: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      lastMessage: "Did you see the game?",
      timestamp: "Yesterday",
      unread: 0,
      online: false
    },
    {
      id: 4,
      name: "Sara Wilson",
      profilePic: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      lastMessage: "Thanks for the help!",
      timestamp: "Monday",
      unread: 1,
      online: false
    },
    {
      id: 5,
      name: "David Brown",
      profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      lastMessage: "I'll send you the files",
      timestamp: "Monday",
      unread: 0,
      online: true
    },
    {
      id: 6,
      name: "Emily Davis",
      profilePic: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      lastMessage: "See you at the meeting",
      timestamp: "Sunday",
      unread: 0,
      online: false
    },
    {
      id: 7,
      name: "Alex Taylor",
      profilePic: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      lastMessage: "Check this new post",
      timestamp: "Sunday",
      unread: 0,
      online: true
    },
    {
      id: 8,
      name: "Linda Miller",
      profilePic: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      lastMessage: "How's the project going?",
      timestamp: "Last week",
      unread: 0,
      online: false
    }
  ];

  // Mock conversation data
  const mockConversations = {
    1: [
      { id: 1, senderId: 1, text: "Hey, how are you?", timestamp: "10:30 AM" },
      { id: 2, senderId: currentUser.id, text: "I'm good, thanks! How about you?", timestamp: "10:31 AM" },
      { id: 3, senderId: 1, text: "Doing well. Did you finish the project?", timestamp: "10:32 AM" },
      { id: 4, senderId: currentUser.id, text: "Almost! Just need to add some final touches.", timestamp: "10:33 AM" },
      { id: 5, senderId: 1, text: "Great! Let me know when it's ready.", timestamp: "10:34 AM" }
    ],
    2: [
      { id: 1, senderId: 2, text: "Let's meet tomorrow", timestamp: "Yesterday" },
      { id: 2, senderId: currentUser.id, text: "Sure, what time works for you?", timestamp: "Yesterday" },
      { id: 3, senderId: 2, text: "How about 2pm at the café?", timestamp: "Yesterday" },
      { id: 4, senderId: currentUser.id, text: "Sounds good to me!", timestamp: "Yesterday" }
    ],
    3: [
      { id: 1, senderId: 3, text: "Did you see the game?", timestamp: "Yesterday" },
      { id: 2, senderId: currentUser.id, text: "Yes! It was incredible!", timestamp: "Yesterday" },
      { id: 3, senderId: 3, text: "That last-minute goal was amazing", timestamp: "Yesterday" }
    ]
  };

  useEffect(() => {
    // Simulate loading contacts with delay
    setTimeout(() => {
      setContacts(mockContacts);
    }, 500);
  }, []);

  // Load more contacts when scrolling (infinite scroll)
  const loadMoreContacts = () => {
    if (loading) return;
    
    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      // In a real app, you would fetch more contacts from an API
      // For demo, we'll just duplicate the existing ones with new IDs
      const newContacts = mockContacts.map(contact => ({
        ...contact,
        id: contact.id + page * mockContacts.length
      }));
      
      setContacts(prev => [...prev, ...newContacts]);
      setPage(prev => prev + 1);
      setLoading(false);
    }, 1000);
  };

  // Handle scroll event for infinite scrolling
  const handleContactsScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      loadMoreContacts();
    }
  };

  // Load messages for selected contact
  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    // Get messages for this contact from mock data
    setMessages(mockConversations[contact.id] || []);
    
    // Scroll to bottom of messages after a slight delay
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  };

  // Auto scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Send new message
  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedContact) return;
    
    const newMsg = {
      id: messages.length + 1,
      senderId: currentUser.id,
      text: newMessage,
      timestamp: "Just now"
    };
    
    setMessages(prev => [...prev, newMsg]);
    setNewMessage("");
    
    // Scroll to bottom after sending
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  };

  // Handle enter key to send message
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="messages">
      <div className="contacts-container">
        <div className="contacts-header">
          <h2>{currentUser.name}</h2>
          <div className="search-messages">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search messages..." />
          </div>
        </div>
        <div className="contacts-list" onScroll={handleContactsScroll}>
          {contacts.map(contact => (
            <div 
              key={contact.id} 
              className={`contact-item ${selectedContact?.id === contact.id ? 'active' : ''}`}
              onClick={() => handleContactSelect(contact)}
            >
              <div className="contact-avatar">
                <img src={contact.profilePic} alt={contact.name} />
                {contact.online && <div className="online-indicator"></div>}
              </div>
              <div className="contact-info">
                <div className="contact-name">{contact.name}</div>
                <div className="contact-last-message">{contact.lastMessage}</div>
              </div>
              <div className="contact-meta">
                <div className="contact-time">{contact.timestamp}</div>
                {contact.unread > 0 && (
                  <div className="unread-badge">{contact.unread}</div>
                )}
              </div>
            </div>
          ))}
          {loading && <div className="loading">Loading more...</div>}
        </div>
      </div>
      
      <div className="chat-container" ref={chatContainerRef}>
        {selectedContact ? (
          <>
            <div className="chat-header">
              <div className="chat-contact">
                <img src={selectedContact.profilePic} alt={selectedContact.name} />
                <div>
                  <h3>{selectedContact.name}</h3>
                  <span className="status">
                    {selectedContact.online ? "Active now" : "Inactive"}
                  </span>
                </div>
              </div>
              <div className="chat-actions">
                <InfoOutlinedIcon />
              </div>
            </div>
            
            <div className="chat-messages">
              {messages.map(message => (
                <div 
                  key={message.id} 
                  className={`message ${message.senderId === currentUser.id ? 'sent' : 'received'}`}
                >
                  {message.senderId !== currentUser.id && (
                    <img 
                      src={selectedContact.profilePic} 
                      alt={selectedContact.name} 
                      className="message-avatar"
                    />
                  )}
                  <div className="message-content">
                    <div className="message-text">{message.text}</div>
                    <div className="message-time">{message.timestamp}</div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="chat-input">
              <EmojiEmotionsOutlinedIcon className="chat-icon" />
              <textarea 
                placeholder="Message..." 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <ImageOutlinedIcon className="chat-icon" />
              <SendIcon 
                className={`send-icon ${newMessage.trim() ? 'active' : ''}`} 
                onClick={handleSendMessage} 
              />
            </div>
          </>
        ) : (
          <div className="no-chat-selected">
            <div className="empty-state">
              <h2>Your Messages</h2>
              <p>Select a conversation or start a new one</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages; 