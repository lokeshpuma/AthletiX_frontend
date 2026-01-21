import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import StarIcon from "@mui/icons-material/Star";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideocamIcon from "@mui/icons-material/Videocam";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Profile = () => {
  const { id } = useParams();
  const { currentUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("posts");
  const [hasStory, setHasStory] = useState(true);
  
  // In a real app, you would fetch user data based on the ID
  // For now, we'll just use currentUser data
  const isCurrentUser = currentUser.id === parseInt(id);
  
  // Sample follower/following data
  const followerCount = 1254;
  const followingCount = 467;
  const postCount = 128;
  
  // User bio/about data
  const userBio = "Passionate sports enthusiast and content creator. I live for game day and sharing the best moments with fellow fans!";
  
  // Sample data for sports fan profile
  const favoriteSports = [
    { id: 1, name: "Soccer", icon: <SportsSoccerIcon />, level: "Expert" },
    { id: 2, name: "Basketball", icon: <SportsBasketballIcon />, level: "Intermediate" },
    { id: 3, name: "Tennis", icon: <SportsTennisIcon />, level: "Beginner" },
  ];
  
  const favoriteTeams = [
    { id: 1, name: "Manchester United", logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg", league: "Premier League" },
    { id: 2, name: "LA Lakers", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg", league: "NBA" },
    { id: 3, name: "New York Yankees", logo: "https://upload.wikimedia.org/wikipedia/en/2/25/NewYorkYankees_PrimaryLogo.svg", league: "MLB" },
  ];
  
  const favoritePlayers = [
    { id: 1, name: "Cristiano Ronaldo", photo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg", team: "Al Nassr" },
    { id: 2, name: "LeBron James", photo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/LeBron_James_crop.jpg", team: "LA Lakers" },
    { id: 3, name: "Serena Williams", photo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Serena_Williams_%2848378153587%29.jpg", team: "Tennis" },
  ];
  
  const achievements = [
    { id: 1, title: "Super Fan", icon: <StarIcon />, description: "Attended 50+ live games" },
    { id: 2, title: "Content Creator", icon: <VideocamIcon />, description: "Published 20 highlight videos" },
    { id: 3, title: "Community Leader", icon: <GroupsIcon />, description: "Created a fan group with 500+ members" },
    { id: 4, title: "Prediction Master", icon: <EmojiEventsIcon />, description: "Won 10 prediction contests" },
  ];
  
  const highlights = [
    { id: 1, title: "Finals Reaction", type: "video", thumbnail: "https://images.unsplash.com/photo-1590964047451-55909000e6c9?q=80&w=1974&auto=format&fit=crop", views: 1234 },
    { id: 2, title: "Meeting the Team", type: "photo", thumbnail: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=2070&auto=format&fit=crop", likes: 421 },
    { id: 3, title: "Game Analysis", type: "video", thumbnail: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2007&auto=format&fit=crop", views: 567 },
    { id: 4, title: "Stadium Tour", type: "photo", thumbnail: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=1923&auto=format&fit=crop", likes: 321 },
  ];
  
  const fanConnections = [
    { id: 1, name: "John Smith", profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop", mutualTeams: 2 },
    { id: 2, name: "Sarah Johnson", profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop", mutualTeams: 1 },
    { id: 3, name: "Michael Brown", profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop", mutualTeams: 3 },
  ];
  
  const upcomingEvents = [
    { id: 1, title: "NBA Lakers vs. Warriors", date: "May 15, 2023", location: "Chase Center, San Francisco" },
    { id: 2, title: "Premier League: Man Utd vs. Chelsea", date: "May 22, 2023", location: "Old Trafford, Manchester" },
  ];
  
  const renderTabContent = () => {
    switch(activeTab) {
      case "posts":
        return <Posts />;
      case "teams":
        return (
          <div className="teams-container">
            <div className="section-header">
              <h3>Favorite Teams</h3>
              {isCurrentUser && (
                <button className="add-btn">
                  <AddIcon /> Add Team
                </button>
              )}
            </div>
            <div className="teams-grid">
              {favoriteTeams.map(team => (
                <div className="team-card" key={team.id}>
                  <img src={team.logo} alt={team.name} className="team-logo" />
                  <div className="team-info">
                    <h4>{team.name}</h4>
                    <span className="team-league">{team.league}</span>
                  </div>
                  {isCurrentUser && (
                    <button className="edit-btn">
                      <EditIcon />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case "players":
        return (
          <div className="players-container">
            <div className="section-header">
              <h3>Favorite Players</h3>
              {isCurrentUser && (
                <button className="add-btn">
                  <AddIcon /> Add Player
                </button>
              )}
            </div>
            <div className="players-grid">
              {favoritePlayers.map(player => (
                <div className="player-card" key={player.id}>
                  <div className="player-photo">
                    <img src={player.photo} alt={player.name} />
                  </div>
                  <div className="player-info">
                    <h4>{player.name}</h4>
                    <span className="player-team">{player.team}</span>
                  </div>
                  {isCurrentUser && (
                    <button className="edit-btn">
                      <EditIcon />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case "highlights":
        return (
          <div className="highlights-container">
            <div className="section-header">
              <h3>My Highlights</h3>
              {isCurrentUser && (
                <div className="add-btns">
                  <button className="add-btn">
                    <VideocamIcon /> Add Video
                  </button>
                  <button className="add-btn">
                    <PhotoLibraryIcon /> Add Photos
                  </button>
                </div>
              )}
            </div>
            <div className="highlights-grid">
              {highlights.map(highlight => (
                <div className="highlight-card" key={highlight.id}>
                  <div className="highlight-thumbnail">
                    <img src={highlight.thumbnail} alt={highlight.title} />
                    {highlight.type === "video" && (
                      <div className="video-overlay">
                        <VideocamIcon />
                      </div>
                    )}
                  </div>
                  <div className="highlight-info">
                    <h4>{highlight.title}</h4>
                    <div className="highlight-stats">
                      {highlight.type === "video" ? (
                        <span>{highlight.views} views</span>
                      ) : (
                        <span>{highlight.likes} likes</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "achievements":
        return (
          <div className="achievements-container">
            <div className="section-header">
              <h3>Achievements & Badges</h3>
            </div>
            <div className="achievements-grid">
              {achievements.map(achievement => (
                <div className="achievement-card" key={achievement.id}>
                  <div className="achievement-icon">
                    {achievement.icon}
                  </div>
                  <div className="achievement-info">
                    <h4>{achievement.title}</h4>
                    <p>{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "connections":
        return (
          <div className="connections-container">
            <div className="section-header">
              <h3>Fan Connections</h3>
              <button className="add-btn">
                <AddIcon /> Find Fans
              </button>
            </div>
            <div className="connections-grid">
              {fanConnections.map(fan => (
                <div className="connection-card" key={fan.id}>
                  <img src={fan.profilePic} alt={fan.name} className="connection-pic" />
                  <div className="connection-info">
                    <h4>{fan.name}</h4>
                    <span>{fan.mutualTeams} mutual teams</span>
                  </div>
                  <button className="connect-btn">Connect</button>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return <Posts />;
    }
  };
  
  return (
    <div className="profile">
      <div className="images">
        <img 
          src="https://static.independent.co.uk/2021/07/29/10/iStock-502301173.jpg?quality=75&width=1250&crop=3%3A2%2Csmart&auto=webp"
          alt=""
          className="cover"
        />
        <div className={`profilePicContainer ${hasStory ? "hasStory" : ""}`}>
          <img
            src={currentUser.profilePic}
            alt=""
            className="profilePic"
          />
          {isCurrentUser && (
            <div className="addStoryBtn" onClick={() => setHasStory(!hasStory)}>
              <AddCircleIcon />
            </div>
          )}
        </div>
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <div className="info-section">
              <h4>Info</h4>
              <div className="info-item">
                <PlaceIcon />
                <span>New York, USA</span>
              </div>
              <div className="info-item">
                <LanguageIcon />
                <span>sportsfan.com</span>
              </div>
              <div className="info-item">
                <InfoIcon />
                <span>Joined Jan 2020</span>
              </div>
            </div>
            
            <div className="verified-badge">
              <CheckCircleIcon className="verified-icon" />
              <span>Verified Fan</span>
            </div>
          </div>
          
          <div className="center">
            <div className="profile-name-container">
              <span className="profile-name">{currentUser.name}</span>
              {!isCurrentUser && (
                <button className="follow-btn">
                  <PersonAddIcon /> Follow
                </button>
              )}
            </div>
            
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-count">{postCount}</span>
                <span className="stat-label">Posts</span>
              </div>
              <div className="stat-item">
                <span className="stat-count">{followerCount}</span>
                <span className="stat-label">Followers</span>
              </div>
              <div className="stat-item">
                <span className="stat-count">{followingCount}</span>
                <span className="stat-label">Following</span>
              </div>
            </div>
          </div>
          
          <div className="right">
            <div className="action-buttons">
              <button className="action-btn email-btn">
                <EmailOutlinedIcon /> Message
              </button>
              {isCurrentUser && (
                <button className="action-btn edit-profile-btn">
                  <EditIcon /> Edit Profile
                </button>
              )}
              <button className="action-btn more-btn">
                <MoreVertIcon />
              </button>
            </div>
            
            <div className="social-profiles">
              <div className="social-icon"><FacebookTwoToneIcon /></div>
              <div className="social-icon"><InstagramIcon /></div>
              <div className="social-icon"><TwitterIcon /></div>
              <div className="social-icon"><LinkedInIcon /></div>
            </div>
          </div>
        </div>
        
        <div className="userSports">
          <h3>My Sports</h3>
          <div className="sports-list">
            {favoriteSports.map(sport => (
              <div className="sport-item" key={sport.id}>
                <div className="sport-icon">{sport.icon}</div>
                <div className="sport-info">
                  <span className="sport-name">{sport.name}</span>
                  <span className="sport-level">{sport.level}</span>
                </div>
              </div>
            ))}
            {isCurrentUser && (
              <div className="sport-item add-sport">
                <AddIcon />
                <span>Add Sport</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="upcoming-events">
          <h3>Upcoming Events</h3>
          <div className="events-list">
            {upcomingEvents.map(event => (
              <div className="event-item" key={event.id}>
                <div className="event-details">
                  <h4>{event.title}</h4>
                  <div className="event-meta">
                    <span className="event-date">{event.date}</span>
                    <span className="event-location">{event.location}</span>
                  </div>
                </div>
                <button className="event-action">Going</button>
              </div>
            ))}
            {isCurrentUser && (
              <button className="find-events-btn">
                <AddIcon /> Find More Events
              </button>
            )}
          </div>
        </div>
        
        <div className="profile-tabs">
          <div className="tab-buttons">
            <button 
              className={`tab-btn ${activeTab === "posts" ? "active" : ""}`}
              onClick={() => setActiveTab("posts")}
            >
              Posts
            </button>
            <button 
              className={`tab-btn ${activeTab === "teams" ? "active" : ""}`}
              onClick={() => setActiveTab("teams")}
            >
              Teams
            </button>
            <button 
              className={`tab-btn ${activeTab === "players" ? "active" : ""}`}
              onClick={() => setActiveTab("players")}
            >
              Players
            </button>
            <button 
              className={`tab-btn ${activeTab === "highlights" ? "active" : ""}`}
              onClick={() => setActiveTab("highlights")}
            >
              Highlights
            </button>
            <button 
              className={`tab-btn ${activeTab === "achievements" ? "active" : ""}`}
              onClick={() => setActiveTab("achievements")}
            >
              Achievements
            </button>
            <button 
              className={`tab-btn ${activeTab === "connections" ? "active" : ""}`}
              onClick={() => setActiveTab("connections")}
            >
              Fan Connections
            </button>
          </div>
          
          <div className="tab-content">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

