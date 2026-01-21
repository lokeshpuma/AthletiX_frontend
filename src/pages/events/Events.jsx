import { useState, useEffect } from "react";
import "./events.scss";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import VerifiedIcon from "@mui/icons-material/Verified";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";

const Events = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [savedEvents, setSavedEvents] = useState([]);
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [filterLocation, setFilterLocation] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  const locations = [
    { id: "all", name: "All Locations" },
    { id: "nyc", name: "New York" },
    { id: "la", name: "Los Angeles" },
    { id: "chi", name: "Chicago" },
    { id: "mia", name: "Miami" },
    { id: "online", name: "Online" }
  ];

  const categories = [
    { id: "all", name: "All Categories", icon: <EmojiEventsIcon /> },
    { id: "basketball", name: "Basketball", icon: <SportsBasketballIcon /> },
    { id: "soccer", name: "Soccer", icon: <SportsSoccerIcon /> },
    { id: "tennis", name: "Tennis", icon: <SportsTennisIcon /> },
    { id: "football", name: "Football", icon: <SportsFootballIcon /> },
    { id: "cricket", name: "Cricket", icon: <SportsCricketIcon /> }
  ];

  const sportsEvents = [
    {
      id: 1,
      title: "NBA Finals - Game 5",
      category: "basketball",
      type: "official",
      image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFza2V0YmFsbCUyMGdhbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      date: "2023-06-15",
      time: "8:00 PM EST",
      location: "Madison Square Garden",
      city: "nyc",
      address: "4 Pennsylvania Plaza, New York, NY 10001",
      isLive: true,
      isVirtual: false,
      description: "Watch the NBA Finals Game 5 live as the top teams battle for the championship! Join thousands of fans for this epic showdown.",
      organizer: {
        name: "NBA Official",
        image: "https://cdn.nba.com/logos/nba/nba-logoman-75-word_white.svg",
        verified: true
      },
      attendees: 18500,
      interested: 24700,
      hasExclusiveContent: true,
      livestreamUrl: "https://watch.nba.com/game/5",
      badges: ["Featured", "Official"],
      updates: [
        {
          id: 1,
          text: "Doors open at 6:30 PM EST",
          time: "2 hours ago"
        },
        {
          id: 2,
          text: "Special half-time performance announced!",
          time: "5 hours ago"
        }
      ]
    },
    {
      id: 2,
      title: "UEFA Champions League Final Watch Party",
      category: "soccer",
      type: "community",
      image: "https://images.unsplash.com/photo-1602674809970-89553ef1a7b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29jY2VyJTIwZmFuc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      date: "2023-06-10",
      time: "3:00 PM EST",
      location: "SoccerFans Bar & Grill",
      city: "la",
      address: "123 Sports Ave, Los Angeles, CA 90001",
      isLive: false,
      isVirtual: false,
      description: "Join fellow soccer fans to watch the UEFA Champions League Final! Food and drink specials available throughout the match.",
      organizer: {
        name: "LA Soccer Fans",
        image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29jY2VyJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        verified: false
      },
      attendees: 320,
      interested: 510,
      hasExclusiveContent: false,
      badges: ["Popular"]
    },
    {
      id: 3,
      title: "Tennis Open - Live Stream and Discussion",
      category: "tennis",
      type: "virtual",
      image: "https://images.unsplash.com/photo-1622279488067-a1691ded703c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVubmlzJTIwbWF0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      date: "2023-07-02",
      time: "11:00 AM EST",
      location: "Online",
      city: "online",
      isLive: false,
      isVirtual: true,
      description: "Watch the Tennis Open live with fellow fans and participate in real-time discussions. Commentary by former champions and tennis experts.",
      organizer: {
        name: "Tennis Enthusiasts",
        image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlbm5pc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        verified: true
      },
      attendees: 1250,
      interested: 2100,
      hasExclusiveContent: true,
      livestreamUrl: "https://watch.tennis.com/open",
      badges: ["Virtual"]
    },
    {
      id: 4,
      title: "Super Bowl Fan Meetup",
      category: "football",
      type: "community",
      image: "https://images.unsplash.com/photo-1516731415730-0c829135b0df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vdGJhbGwlMjBmYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      date: "2023-02-12",
      time: "5:00 PM EST",
      location: "Touchdown Sports Bar",
      city: "mia",
      address: "789 Football Drive, Miami, FL 33101",
      isLive: false,
      isVirtual: false,
      description: "The biggest football event of the year deserves the best fan experience! Join us for food, drinks, and the big game on multiple giant screens.",
      organizer: {
        name: "Football Fanatics Miami",
        image: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1lcmljYW4lMjBmb290YmFsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        verified: false
      },
      attendees: 450,
      interested: 720,
      hasExclusiveContent: false,
      badges: ["Popular", "Trending"]
    },
    {
      id: 5,
      title: "Cricket World Cup - India vs. England",
      category: "cricket",
      type: "official",
      image: "https://images.unsplash.com/photo-1624880357913-a8539238245b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JpY2tldCUyMG1hdGNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      date: "2023-08-20",
      time: "10:00 AM EST",
      location: "International Cricket Stadium",
      city: "nyc",
      address: "450 Cricket Lane, New York, NY 10001",
      isLive: false,
      isVirtual: false,
      description: "Witness the clash of cricket titans as India faces England in this crucial World Cup match. Premium seating and refreshments available.",
      organizer: {
        name: "ICC Official",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        verified: true
      },
      attendees: 35000,
      interested: 42000,
      hasExclusiveContent: true,
      badges: ["Official", "Featured"]
    },
    {
      id: 6,
      title: "Basketball Skills Workshop",
      category: "basketball",
      type: "community",
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFza2V0YmFsbCUyMHRyYWluaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      date: "2023-06-25",
      time: "1:00 PM EST",
      location: "Community Center",
      city: "chi",
      address: "567 Hoops Street, Chicago, IL 60601",
      isLive: false,
      isVirtual: false,
      description: "Improve your basketball skills with this hands-on workshop. Learn dribbling, shooting, and defensive techniques from experienced coaches.",
      organizer: {
        name: "Chicago Basketball Association",
        image: "https://images.unsplash.com/photo-1596387451750-8a6c195f2456?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFza2V0YmFsbCUyMGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        verified: true
      },
      attendees: 78,
      interested: 120,
      hasExclusiveContent: false,
      badges: ["Workshop", "Beginner-Friendly"]
    }
  ];

  const userAttendedEvents = [
    {
      id: 101,
      title: "Lakers vs. Celtics",
      category: "basketball",
      image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFza2V0YmFsbCUyMGdhbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      date: "2023-05-10",
      badge: "Attended",
      photos: 8,
      likes: 76
    },
    {
      id: 102,
      title: "MLS Cup Final",
      category: "soccer",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29jY2VyJTIwc3RhZGl1bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      date: "2023-04-22",
      badge: "Attended",
      photos: 12,
      likes: 104
    }
  ];

  const virtualEvents = sportsEvents.filter(event => event.isVirtual);
  const liveEvents = sportsEvents.filter(event => event.isLive);
  const upcomingEvents = sportsEvents.filter(event => !event.isLive && !event.isVirtual);

  const handleToggleSave = (eventId) => {
    if (savedEvents.includes(eventId)) {
      setSavedEvents(savedEvents.filter(id => id !== eventId));
    } else {
      setSavedEvents([...savedEvents, eventId]);
    }
  };

  const handleExpandEvent = (eventId) => {
    if (expandedEvent === eventId) {
      setExpandedEvent(null);
    } else {
      setExpandedEvent(eventId);
    }
  };

  const filterEvents = () => {
    let filtered = sportsEvents;
    
    if (activeTab !== "all") {
      if (activeTab === "saved") {
        filtered = filtered.filter(event => savedEvents.includes(event.id));
      } else if (activeTab === "live") {
        filtered = filtered.filter(event => event.isLive);
      } else if (activeTab === "virtual") {
        filtered = filtered.filter(event => event.isVirtual);
      } else if (activeTab === "official") {
        filtered = filtered.filter(event => event.type === "official");
      } else if (activeTab === "community") {
        filtered = filtered.filter(event => event.type === "community");
      }
    }
    
    if (filterLocation !== "all") {
      filtered = filtered.filter(event => event.city === filterLocation);
    }
    
    if (filterCategory !== "all") {
      filtered = filtered.filter(event => event.category === filterCategory);
    }
    
    if (searchTerm.trim() !== "") {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(
        event => 
          event.title.toLowerCase().includes(search) || 
          event.description.toLowerCase().includes(search) ||
          (event.location && event.location.toLowerCase().includes(search))
      );
    }
    
    return filtered;
  };

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : null;
  };

  // Close filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isFilterDropdownOpen && !event.target.closest('.filter-dropdown')) {
        setIsFilterDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFilterDropdownOpen]);

  return (
    <div className="events">
      <div className="container">
        <div className="events-header">
          <h1 className="title">Sports Events</h1>
          <div className="header-actions">
            <div className="search-box">
              <SearchIcon />
              <input 
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filter-dropdown">
              <button 
                className="filter-btn"
                onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
              >
                <FilterListIcon />
                Filter
              </button>
              
              {isFilterDropdownOpen && (
                <div className="dropdown-content">
                  <h4>Filter by Location</h4>
                  {locations.map((location) => (
                    <div 
                      key={location.id}
                      className={`dropdown-item ${filterLocation === location.id ? "active" : ""}`}
                      onClick={() => {
                        setFilterLocation(location.id);
                        setIsFilterDropdownOpen(false);
                      }}
                    >
                      {location.name}
                    </div>
                  ))}
                  
                  <h4>Filter by Category</h4>
                  {categories.map((category) => (
                    <div 
                      key={category.id}
                      className={`dropdown-item ${filterCategory === category.id ? "active" : ""}`}
                      onClick={() => {
                        setFilterCategory(category.id);
                        setIsFilterDropdownOpen(false);
                      }}
                    >
                      <span className="category-icon">{category.icon}</span>
                      {category.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="notification-icon">
              <NotificationsIcon />
              <div className="notification-badge">5</div>
            </div>
          </div>
        </div>
        
        <div className="events-tabs">
          <button 
            className={`events-tab ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            <EmojiEventsIcon />
            All Events
          </button>
          <button 
            className={`events-tab ${activeTab === "live" ? "active" : ""}`}
            onClick={() => setActiveTab("live")}
          >
            <LiveTvIcon />
            Live Now
          </button>
          <button 
            className={`events-tab ${activeTab === "official" ? "active" : ""}`}
            onClick={() => setActiveTab("official")}
          >
            <VerifiedIcon />
            Official
          </button>
          <button 
            className={`events-tab ${activeTab === "community" ? "active" : ""}`}
            onClick={() => setActiveTab("community")}
          >
            <GroupsIcon />
            Community
          </button>
          <button 
            className={`events-tab ${activeTab === "virtual" ? "active" : ""}`}
            onClick={() => setActiveTab("virtual")}
          >
            <PersonIcon />
            Virtual
          </button>
          <button 
            className={`events-tab ${activeTab === "saved" ? "active" : ""}`}
            onClick={() => setActiveTab("saved")}
          >
            <BookmarkIcon />
            Saved
          </button>
        </div>
        
        <div className="filter-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${filterCategory === category.id ? "active" : ""}`}
              onClick={() => setFilterCategory(category.id)}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>
        
        <div className="events-grid">
          {filterEvents().length > 0 ? (
            filterEvents().map((event) => (
              <div 
                key={event.id}
                className={`event-card ${expandedEvent === event.id ? "expanded" : ""}`}
              >
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <div className="event-date">
                    {event.date} • {event.time}
                  </div>
                  <div className="event-badges">
                    {event.badges && event.badges.map((badge, index) => (
                      <span 
                        key={index}
                        className={`badge ${badge.toLowerCase().replace(/[- ]/g, "")}`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  {event.isLive && (
                    <div className="live-badge">
                      Live
                    </div>
                  )}
                </div>
                
                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  
                  <div className="event-meta">
                    <LocationOnIcon />
                    <div className="meta-text">{event.location}</div>
                    
                    <CalendarMonthIcon />
                    <div className="meta-text">{event.date}</div>
                    
                    <AccessTimeIcon />
                    <div className="meta-text">{event.time}</div>
                    
                    <PeopleAltIcon />
                    <div className="meta-text">{event.attendees} attending</div>
                  </div>
                  
                  <p className="event-description">{event.description}</p>
                  
                  <div className="event-stats">
                    <div className="stat">
                      <ThumbUpIcon /> {event.interested} interested
                    </div>
                    <div className="stat">
                      <ChatBubbleIcon /> {Math.floor(event.attendees * 0.3)} comments
                    </div>
                  </div>
                  
                  <div className="event-actions">
                    <button 
                      className="action-btn"
                      onClick={() => handleExpandEvent(event.id)}
                    >
                      {expandedEvent === event.id ? "Less Info" : "More Info"}
                    </button>
                    
                    <div className="action-icons">
                      <button 
                        className={`icon-btn ${savedEvents.includes(event.id) ? "active" : ""}`}
                        onClick={() => handleToggleSave(event.id)}
                      >
                        {savedEvents.includes(event.id) ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                      </button>
                      
                      <button className="icon-btn">
                        <ShareIcon />
                      </button>
                    </div>
                  </div>
                </div>
                
                {expandedEvent === event.id && (
                  <div className="event-expanded">
                    <div className="organizer">
                      <div className="organizer-image">
                        <img src={event.organizer.image} alt={event.organizer.name} />
                      </div>
                      <div className="organizer-info">
                        <div className="organizer-name">
                          {event.organizer.name}
                          {event.organizer.verified && (
                            <VerifiedIcon className="verified-icon" />
                          )}
                        </div>
                        <div className="organizer-meta">Event Organizer</div>
                      </div>
                    </div>
                    
                    {event.updates && event.updates.length > 0 && (
                      <div className="updates">
                        <div className="update-title">Recent Updates</div>
                        {event.updates.map((update) => (
                          <div key={update.id} className="update-item">
                            <div className="update-text">{update.text}</div>
                            <div className="update-time">{update.time}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {event.hasExclusiveContent && (
                      <div className="exclusive-content">
                        <div className="exclusive-title">
                          <EmojiEventsIcon /> Exclusive Content Available
                        </div>
                        <div className="exclusive-description">
                          Get access to exclusive videos, photos, and special content from this event.
                        </div>
                        <button className="exclusive-btn">
                          {event.isLive ? "Watch Live Stream" : "Access Exclusive Content"}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="no-events">
              <h3>No Events Found</h3>
              <p>Try changing your filters or search terms</p>
              <button onClick={() => {
                setActiveTab("all");
                setFilterCategory("all");
                setFilterLocation("all");
                setSearchTerm("");
              }}>
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events; 