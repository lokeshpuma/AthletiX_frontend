import { useState, useEffect } from "react";
import "./friends.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import SearchIcon from "@mui/icons-material/Search";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";

const Friends = () => {
  const { currentUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [liveGames, setLiveGames] = useState([]);
  const [friends, setFriends] = useState([]);
  const [suggestedFriends, setSuggestedFriends] = useState([]);
  const [friendActivities, setFriendActivities] = useState([]);
  const [expandedPrediction, setExpandedPrediction] = useState(null);
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [chatMessage, setChatMessage] = useState("");
  const [gameChats, setGameChats] = useState({});
  const [activityFilter, setActivityFilter] = useState(null);
  const [showComments, setShowComments] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [userLikedActivity, setUserLikedActivity] = useState({});
  const [mockComments, setMockComments] = useState([
    { id: 1, userId: 2, text: "I agree! Lakers are on fire this season. 🔥", timestamp: "10m ago" },
    { id: 2, userId: 3, text: "Not sure about that prediction, Celtics defense is strong.", timestamp: "8m ago" },
    { id: 3, userId: 4, text: "LeBron's stats have been incredible lately!", timestamp: "5m ago" }
  ]);

  // Mock data - LiveGames
  const mockLiveGames = [
    {
      id: 1,
      sport: "basketball",
      homeTeam: "Lakers",
      awayTeam: "Celtics",
      homeScore: 86,
      awayScore: 82,
      quarter: "4th",
      timeLeft: "3:24",
      watching: 1254
    },
    {
      id: 2,
      sport: "soccer",
      homeTeam: "Arsenal",
      awayTeam: "Liverpool",
      homeScore: 2,
      awayScore: 2,
      quarter: "2nd Half",
      timeLeft: "15:00",
      watching: 3421
    },
    {
      id: 3,
      sport: "football",
      homeTeam: "Chiefs",
      awayTeam: "49ers",
      homeScore: 24,
      awayScore: 17,
      quarter: "3rd",
      timeLeft: "8:15",
      watching: 5673
    }
  ];

  // Mock data - Friends
  const mockFriends = [
    {
      id: 1,
      name: "John Smith",
      username: "jsmith",
      profilePic: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      favTeam: "Lakers",
      favSport: "basketball",
      online: true,
      mutualFriends: 12
    },
    {
      id: 2,
      name: "Emma Davis",
      username: "emmad",
      profilePic: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      favTeam: "Arsenal",
      favSport: "soccer",
      online: true,
      mutualFriends: 8
    },
    {
      id: 3,
      name: "Mike Johnson",
      username: "mikej",
      profilePic: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      favTeam: "Red Sox",
      favSport: "baseball",
      online: false,
      mutualFriends: 15
    },
    {
      id: 4,
      name: "Sara Wilson",
      username: "swilson",
      profilePic: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      favTeam: "Chiefs",
      favSport: "football",
      online: true,
      mutualFriends: 5
    }
  ];

  // Mock data - Suggested Friends
  const mockSuggestedFriends = [
    {
      id: 5,
      name: "Alex Rodriguez",
      username: "arod",
      profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      favTeam: "Yankees",
      favSport: "baseball",
      mutualFriends: 3
    },
    {
      id: 6,
      name: "Jessica Taylor",
      username: "jtaylor",
      profilePic: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      favTeam: "Bucks",
      favSport: "basketball",
      mutualFriends: 7
    },
    {
      id: 7,
      name: "David Miller",
      username: "dmiller",
      profilePic: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      favTeam: "Patriots",
      favSport: "football",
      mutualFriends: 2
    }
  ];

  // Mock data - Friend Activities
  const mockFriendActivities = [
    {
      id: 1,
      userId: 1,
      type: "prediction",
      sport: "basketball",
      game: "Lakers vs Celtics",
      content: "Lakers will win by 10 points! LeBron is on fire today! 🔥",
      timestamp: "15m ago",
      likes: 24,
      comments: 7,
      prediction: {
        winner: "Lakers",
        margin: 10,
        mvp: "LeBron James",
        keyStats: "LeBron: 32 pts, 12 reb, 8 ast"
      }
    },
    {
      id: 2,
      userId: 2,
      type: "watching",
      sport: "soccer",
      game: "Arsenal vs Liverpool",
      content: "This game is intense! Can't believe that last goal! 😮",
      timestamp: "32m ago",
      likes: 18,
      comments: 5
    },
    {
      id: 3,
      userId: 4,
      type: "prediction",
      sport: "football",
      game: "Chiefs vs 49ers",
      content: "Chiefs are going to make a comeback in the 4th quarter!",
      timestamp: "1h ago",
      likes: 31,
      comments: 12,
      prediction: {
        winner: "Chiefs",
        margin: 7,
        mvp: "Patrick Mahomes",
        keyStats: "Mahomes: 350 yards, 3 TDs"
      }
    },
    {
      id: 4,
      userId: 3,
      type: "result",
      sport: "baseball",
      game: "Yankees vs Red Sox",
      content: "What a game! Red Sox pulled through in the 9th inning!",
      timestamp: "3h ago",
      likes: 42,
      comments: 15,
      result: {
        winner: "Red Sox",
        score: "8-7",
        mvp: "Rafael Devers"
      }
    }
  ];

  // Mock chat data
  const mockChats = {
    1: [
      { id: 1, userId: 1, username: "jsmith", message: "Lakers defense is looking strong today!", timestamp: "3:20 PM" },
      { id: 2, userId: 2, username: "emmad", message: "LeBron with another amazing assist!", timestamp: "3:22 PM" },
      { id: 3, userId: 4, username: "swilson", message: "Celtics need to step up their game", timestamp: "3:25 PM" }
    ],
    2: [
      { id: 1, userId: 2, username: "emmad", message: "What a goal by Saka!", timestamp: "3:15 PM" },
      { id: 2, userId: 3, username: "mikej", message: "Liverpool's defense is struggling today", timestamp: "3:18 PM" }
    ],
    3: [
      { id: 1, userId: 4, username: "swilson", message: "Mahomes is on fire!", timestamp: "3:10 PM" },
      { id: 2, userId: 1, username: "jsmith", message: "That interception was huge", timestamp: "3:12 PM" }
    ]
  };

  useEffect(() => {
    // Simulate loading data
    setLiveGames(mockLiveGames);
    setFriends(mockFriends);
    setSuggestedFriends(mockSuggestedFriends);
    setFriendActivities(mockFriendActivities);
    setGameChats(mockChats);
  }, []);

  // Get friend by ID
  const getFriendById = (id) => {
    return [...friends, ...suggestedFriends].find(friend => friend.id === id);
  };

  // Filter friends based on search
  const filteredFriends = friends.filter(friend => 
    friend.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    friend.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sport icon mapping
  const getSportIcon = (sport) => {
    switch(sport) {
      case "basketball":
        return <SportsBasketballIcon />;
      case "soccer":
        return <SportsSoccerIcon />;
      case "baseball":
        return <SportsBaseballIcon />;
      case "football":
        return <SportsFootballIcon />;
      case "hockey":
        return <SportsHockeyIcon />;
      case "volleyball":
        return <SportsVolleyballIcon />;
      case "tennis":
        return <SportsTennisIcon />;
      default:
        return <SportsBasketballIcon />;
    }
  };

  // Handle sending a chat message
  const handleSendMessage = () => {
    if (!chatMessage.trim() || !selectedGame) return;

    const newChat = {
      id: (gameChats[selectedGame.id]?.length || 0) + 1,
      userId: currentUser.id,
      username: currentUser.username || "you",
      message: chatMessage,
      timestamp: new Date().toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'})
    };

    setGameChats(prev => ({
      ...prev,
      [selectedGame.id]: [...(prev[selectedGame.id] || []), newChat]
    }));

    setChatMessage("");
  };

  // Handle opening live chat for a game
  const openLiveChat = (game) => {
    setSelectedGame(game);
    setShowLiveChat(true);
  };
  
  // Handle activity options (more menu)
  const handleActivityOptions = (activityId) => {
    // This could open a dropdown menu with options like hide, report, etc.
    console.log(`Options clicked for activity ${activityId}`);
  };
  
  // Handle liking an activity
  const handleLikeActivity = (activityId) => {
    setUserLikedActivity(prev => ({
      ...prev,
      [activityId]: !prev[activityId]
    }));
  };
  
  // Handle adding a comment
  const handleAddComment = (activityId) => {
    if (!commentText.trim()) return;
    
    const newComment = {
      id: mockComments.length + 1,
      userId: currentUser.id,
      text: commentText,
      timestamp: "Just now"
    };
    
    setMockComments(prev => [...prev, newComment]);
    setCommentText("");
  };

  return (
    <div className="friends">
      <div className="friends-container">
        <div className="header">
          <h1>Friends & Team</h1>
          <div className="search-bar">
            <SearchIcon />
            <input 
              type="text" 
              placeholder="Search friends..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="tabs">
          <div 
            className={`tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Friends
          </div>
          <div 
            className={`tab ${activeTab === 'online' ? 'active' : ''}`}
            onClick={() => setActiveTab('online')}
          >
            Online
          </div>
          <div 
            className={`tab ${activeTab === 'suggested' ? 'active' : ''}`}
            onClick={() => setActiveTab('suggested')}
          >
            Suggested
          </div>
          <div 
            className={`tab ${activeTab === 'live' ? 'active' : ''}`}
            onClick={() => setActiveTab('live')}
          >
            Live Games
          </div>
        </div>

        <div className="content">
          {activeTab === 'live' ? (
            <div className="live-games">
              <h2>Live Games</h2>
              <div className="games-list">
                {liveGames.map(game => (
                  <div className="game-card" key={game.id}>
                    <div className="game-header">
                      {getSportIcon(game.sport)}
                      <span className="game-time">{game.quarter} • {game.timeLeft}</span>
                      <span className="watching">{game.watching} watching</span>
                    </div>
                    <div className="teams">
                      <div className="team home">
                        <div className="team-logo">
                          {game.homeTeam.charAt(0)}
                        </div>
                        <div className="team-name">{game.homeTeam}</div>
                        <div className="score">{game.homeScore}</div>
                      </div>
                      <div className="vs">VS</div>
                      <div className="team away">
                        <div className="team-logo">
                          {game.awayTeam.charAt(0)}
                        </div>
                        <div className="team-name">{game.awayTeam}</div>
                        <div className="score">{game.awayScore}</div>
                      </div>
                    </div>
                    <div className="game-actions">
                      <button className="action-btn" onClick={() => openLiveChat(game)}>
                        <ChatIcon /> Chat
                      </button>
                      <button className="action-btn">
                        <NotificationsActiveIcon /> Notify
                      </button>
                      <button className="action-btn">
                        <ShareIcon /> Share
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : activeTab === 'suggested' ? (
            <div className="suggested-friends">
              <h2>Suggested Friends</h2>
              <div className="friends-list">
                {suggestedFriends.map(friend => (
                  <div className="friend-card" key={friend.id}>
                    <img src={friend.profilePic} alt={friend.name} className="friend-avatar" />
                    <div className="friend-info">
                      <h3>{friend.name}</h3>
                      <span className="username">@{friend.username}</span>
                      <div className="friend-details">
                        <span className="fav-team">{getSportIcon(friend.favSport)} {friend.favTeam}</span>
                        <span className="mutual">{friend.mutualFriends} mutual friends</span>
                      </div>
                    </div>
                    <button className="add-friend">
                      <PersonAddAlt1Icon />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="friends-section">
                <h2>{activeTab === 'online' ? 'Online Friends' : 'Your Friends'}</h2>
                <div className="friends-list">
                  {(activeTab === 'online' ? filteredFriends.filter(f => f.online) : filteredFriends).map(friend => (
                    <div className="friend-card" key={friend.id}>
                      <div className="friend-avatar-container">
                        <img src={friend.profilePic} alt={friend.name} className="friend-avatar" />
                        {friend.online && <div className="online-badge"></div>}
                      </div>
                      <div className="friend-info">
                        <h3>{friend.name}</h3>
                        <span className="username">@{friend.username}</span>
                        <div className="friend-details">
                          <span className="fav-team">{getSportIcon(friend.favSport)} {friend.favTeam}</span>
                        </div>
                      </div>
                      <div className="friend-actions">
                        <Link to={`/messages`} className="action-icon">
                          <ChatIcon />
                        </Link>
                        <Link to={`/profile/${friend.id}`} className="action-icon">
                          <MoreHorizIcon />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="activity-feed">
                <h2>Friend Activity</h2>
                <div className="activity-filters">
                  <button 
                    className={`filter-btn ${activityFilter === null ? 'active' : ''}`}
                    onClick={() => setActivityFilter(null)}
                  >
                    All
                  </button>
                  <button 
                    className={`filter-btn ${activityFilter === 'prediction' ? 'active' : ''}`}
                    onClick={() => setActivityFilter('prediction')}
                  >
                    Predictions
                  </button>
                  <button 
                    className={`filter-btn ${activityFilter === 'watching' ? 'active' : ''}`}
                    onClick={() => setActivityFilter('watching')}
                  >
                    Watching
                  </button>
                  <button 
                    className={`filter-btn ${activityFilter === 'result' ? 'active' : ''}`}
                    onClick={() => setActivityFilter('result')}
                  >
                    Results
                  </button>
                </div>
                <div className="activities">
                  {friendActivities
                    .filter(activity => activityFilter === null || activity.type === activityFilter)
                    .map(activity => {
                      const friend = getFriendById(activity.userId);
                      return (
                        <div className="activity-card" key={activity.id}>
                          <div className="activity-header">
                            <img src={friend?.profilePic} alt={friend?.name} className="friend-avatar" />
                            <div className="activity-info">
                              <h4>{friend?.name}</h4>
                              <div className="activity-meta">
                                <span className="activity-type">
                                  {getSportIcon(activity.sport)} {activity.type === 'prediction' ? 'made a prediction' : activity.type === 'watching' ? 'is watching' : 'shared a result'}
                                </span>
                                <span className="activity-time">{activity.timestamp}</span>
                              </div>
                            </div>
                          </div>
                          <div className="activity-content">
                            <p>{activity.content}</p>
                            <div className="game-tag">
                              {getSportIcon(activity.sport)} {activity.game}
                            </div>
                            
                            {activity.type === 'prediction' && (
                              <div className="prediction-box">
                                <div className="prediction-header" onClick={() => setExpandedPrediction(expandedPrediction === activity.id ? null : activity.id)}>
                                  <span>Prediction Details</span>
                                  <span className="expand-icon">{expandedPrediction === activity.id ? '−' : '+'}</span>
                                </div>
                                {expandedPrediction === activity.id && (
                                  <div className="prediction-details">
                                    <div className="prediction-item">
                                      <span className="label">Winner:</span>
                                      <span className="value">{activity.prediction.winner}</span>
                                    </div>
                                    <div className="prediction-item">
                                      <span className="label">Margin:</span>
                                      <span className="value">{activity.prediction.margin} points</span>
                                    </div>
                                    <div className="prediction-item">
                                      <span className="label">MVP:</span>
                                      <span className="value">{activity.prediction.mvp}</span>
                                    </div>
                                    <div className="prediction-item">
                                      <span className="label">Key Stats:</span>
                                      <span className="value">{activity.prediction.keyStats}</span>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                            
                            {activity.type === 'result' && (
                              <div className="result-box">
                                <div className="result-header">
                                  <span>Final Score: {activity.result.score}</span>
                                  <span className="result-winner">Winner: {activity.result.winner}</span>
                                </div>
                                <div className="result-mvp">
                                  MVP: {activity.result.mvp}
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="activity-actions">
                            <div className={`action ${userLikedActivity[activity.id] ? 'liked' : ''}`} 
                                 onClick={() => handleLikeActivity(activity.id)}>
                              <ThumbUpIcon className="action-icon" />
                              <span>{userLikedActivity[activity.id] ? activity.likes + 1 : activity.likes}</span>
                            </div>
                            <div className="action" onClick={() => setShowComments(showComments === activity.id ? null : activity.id)}>
                              <ChatIcon className="action-icon" />
                              <span>{activity.comments}</span>
                            </div>
                            <div className="action">
                              <ShareIcon className="action-icon" />
                            </div>
                            <div className="action" onClick={() => handleActivityOptions(activity.id)}>
                              <MoreHorizIcon className="action-icon" />
                            </div>
                          </div>
                          
                          {showComments === activity.id && (
                            <div className="comments-section">
                              <div className="comments-list">
                                {mockComments.map(comment => {
                                  const commentUser = getFriendById(comment.userId) || currentUser;
                                  return (
                                    <div className="comment" key={comment.id}>
                                      <img 
                                        src={commentUser.profilePic || currentUser.profilePic} 
                                        alt={commentUser.name || "You"} 
                                        className="comment-avatar" 
                                      />
                                      <div className="comment-content">
                                        <div className="comment-header">
                                          <span className="comment-author">{commentUser.name || "You"}</span>
                                          <span className="comment-time">{comment.timestamp}</span>
                                        </div>
                                        <p className="comment-text">{comment.text}</p>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                              <div className="add-comment">
                                <img 
                                  src={currentUser.profilePic} 
                                  alt={currentUser.name} 
                                  className="comment-avatar" 
                                />
                                <input 
                                  type="text"
                                  placeholder="Add a comment..."
                                  value={commentText}
                                  onChange={(e) => setCommentText(e.target.value)}
                                  onKeyPress={(e) => e.key === 'Enter' && handleAddComment(activity.id)}
                                />
                                <button onClick={() => handleAddComment(activity.id)}>Post</button>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {showLiveChat && selectedGame && (
        <div className="live-chat-overlay">
          <div className="live-chat-container">
            <div className="chat-header">
              <div className="game-info">
                {getSportIcon(selectedGame.sport)} 
                <span>{selectedGame.homeTeam} vs {selectedGame.awayTeam}</span>
                <span className="game-time">{selectedGame.quarter} • {selectedGame.timeLeft}</span>
              </div>
              <div className="score-display">
                <span>{selectedGame.homeTeam} {selectedGame.homeScore}</span>
                <span className="separator">-</span>
                <span>{selectedGame.awayScore} {selectedGame.awayTeam}</span>
              </div>
              <button className="close-btn" onClick={() => setShowLiveChat(false)}>×</button>
            </div>
            <div className="chat-messages">
              {(gameChats[selectedGame.id] || []).map(chat => (
                <div className={`chat-message ${chat.userId === currentUser.id ? 'own-message' : ''}`} key={chat.id}>
                  <span className="chat-username">{chat.username}:</span>
                  <span className="chat-text">{chat.message}</span>
                  <span className="chat-time">{chat.timestamp}</span>
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                placeholder="Type a message..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Friends; 