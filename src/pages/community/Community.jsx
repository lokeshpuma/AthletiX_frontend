import { useState } from "react";
import "./community.scss";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SendIcon from "@mui/icons-material/Send";
import PushPinIcon from "@mui/icons-material/PushPin";
import VerifiedIcon from "@mui/icons-material/Verified";

const Community = () => {
  const [activeChannel, setActiveChannel] = useState("announcements");
  const [message, setMessage] = useState("");

  const channels = [
    { id: "announcements", name: "📢 Announcements", official: true },
    { id: "general", name: "💬 General Chat", official: false },
    { id: "football", name: "⚽ Football", icon: <SportsFootballIcon />, official: false },
    { id: "basketball", name: "🏀 Basketball", icon: <SportsBasketballIcon />, official: false },
    { id: "tennis", name: "🎾 Tennis", icon: <SportsTennisIcon />, official: false },
    { id: "cricket", name: "🏏 Cricket", icon: <SportsCricketIcon />, official: false },
    { id: "baseball", name: "⚾ Baseball", icon: <SportsBaseballIcon />, official: false },
    { id: "tournaments", name: "🏆 Tournaments", icon: <EmojiEventsIcon />, official: false }
  ];

  const officialMessages = [
    {
      id: 1,
      author: "SportsFan App Team",
      avatar: "https://i.pravatar.cc/100?img=1",
      content: "Welcome to our sports community! Share your favorite game moments, cheer for your team, and connect with other fans.",
      timestamp: "2 days ago",
      official: true,
      pinned: true
    },
    {
      id: 2,
      author: "SportsFan Moderator",
      avatar: "https://i.pravatar.cc/100?img=2",
      content: "The World Cup finals watch party is happening this Saturday! Join our Discord server for voice chat during the game.",
      timestamp: "1 day ago",
      official: true,
      pinned: true
    },
    {
      id: 3,
      author: "Event Coordinator",
      avatar: "https://i.pravatar.cc/100?img=3",
      content: "New challenge alert! Post your sports prediction for this weekend using the hashtag #SportsFanZone to enter our prediction contest. Winner gets exclusive app merchandise!",
      timestamp: "5 hours ago",
      official: true,
      pinned: false
    }
  ];

  const generalMessages = [
    {
      id: 1,
      author: "SoccerFan22",
      avatar: "https://i.pravatar.cc/100?img=4",
      content: "Did you see that amazing goal yesterday? Incredible match!",
      timestamp: "3 hours ago",
      official: false,
      pinned: false
    },
    {
      id: 2,
      author: "BasketballKing",
      avatar: "https://i.pravatar.cc/100?img=5",
      content: "I think the Lakers have a real shot at the championship this year. What do you all think?",
      timestamp: "2 hours ago",
      official: false,
      pinned: false
    },
    {
      id: 3,
      author: "TennisLover",
      avatar: "https://i.pravatar.cc/100?img=6",
      content: "Who's watching the Australian Open this weekend? I'm rooting for Nadal!",
      timestamp: "1 hour ago",
      official: false,
      pinned: false
    }
  ];

  const getMessagesForChannel = (channelId) => {
    switch (channelId) {
      case "announcements":
        return officialMessages;
      case "general":
        return generalMessages;
      default:
        return []; // Empty for other channels for demo purposes
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
    
    // In a real app, you would send this message to your backend
    console.log(`Sending message to ${activeChannel}: ${message}`);
    
    // Clear input after sending
    setMessage("");
  };

  return (
    <div className="community">
      <div className="container">
        <h1 className="title">Sports Community</h1>
        
        <div className="discord-layout">
          <div className="channels-sidebar">
            <div className="channels-header">
              <h3>Channels</h3>
              <button className="join-discord-btn">Join Our Discord</button>
            </div>
            <div className="channels-list">
              {channels.map(channel => (
                <div 
                  key={channel.id} 
                  className={`channel-item ${activeChannel === channel.id ? 'active' : ''} ${channel.official ? 'official' : ''}`}
                  onClick={() => setActiveChannel(channel.id)}
                >
                  {channel.icon || null}
                  <span>{channel.name}</span>
                  {channel.official && <VerifiedIcon className="verified-icon" />}
                </div>
              ))}
            </div>
            <div className="community-info">
              <h4>About Our Community</h4>
              <p>Join fun challenges and compete with other fans to see who's the biggest supporter. Use the hashtag <span className="hashtag">#SportsFanZone</span> to get noticed and meet new friends.</p>
              <p className="community-motto">Let's have fun, share our passion, and enjoy sports together!</p>
            </div>
          </div>
          
          <div className="chat-area">
            <div className="chat-header">
              <h2>{channels.find(c => c.id === activeChannel)?.name || "Channel"}</h2>
              {channels.find(c => c.id === activeChannel)?.official && 
                <div className="official-badge">Official Channel</div>
              }
            </div>
            
            <div className="messages-container">
              {activeChannel === "announcements" && (
                <div className="channel-description">
                  <h3>📢 Official Announcements</h3>
                  <p>This channel contains official messages from the SportsFan team. Stay tuned for important updates, events, and announcements!</p>
                </div>
              )}
              
              {getMessagesForChannel(activeChannel).map(msg => (
                <div key={msg.id} className={`message-item ${msg.official ? 'official-message' : ''} ${msg.pinned ? 'pinned-message' : ''}`}>
                  {msg.pinned && <PushPinIcon className="pin-icon" />}
                  <div className="message-avatar">
                    <img src={msg.avatar} alt={msg.author} />
                  </div>
                  <div className="message-content">
                    <div className="message-header">
                      <span className="author-name">{msg.author}</span>
                      {msg.official && <VerifiedIcon className="verified-icon" />}
                      <span className="timestamp">{msg.timestamp}</span>
                    </div>
                    <div className="message-text">{msg.content}</div>
                  </div>
                </div>
              ))}
              
              {getMessagesForChannel(activeChannel).length === 0 && activeChannel !== "announcements" && (
                <div className="empty-channel">
                  <p>No messages yet in this channel. Be the first to start the conversation!</p>
                </div>
              )}
            </div>
            
            <div className="message-input-area">
              <form onSubmit={handleSendMessage}>
                <input 
                  type="text" 
                  placeholder={`Message #${channels.find(c => c.id === activeChannel)?.name.split(' ')[1] || "channel"}`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={activeChannel === "announcements"}
                />
                <button type="submit" disabled={activeChannel === "announcements"}>
                  <SendIcon />
                </button>
              </form>
              {activeChannel === "announcements" && (
                <div className="input-notice">This is an announcement channel. Only administrators can post here.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community; 