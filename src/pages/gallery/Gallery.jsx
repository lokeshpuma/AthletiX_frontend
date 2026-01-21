import { useState } from "react";
import "./gallery.scss";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import FilterIcon from "@mui/icons-material/Filter";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VerifiedIcon from "@mui/icons-material/Verified";
import CommentIcon from "@mui/icons-material/Comment";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [savedPhotos, setSavedPhotos] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);

  const categories = [
    { id: "all", name: "All Photos", icon: <GridViewIcon /> },
    { id: "basketball", name: "Basketball", icon: <SportsBasketballIcon /> },
    { id: "soccer", name: "Soccer", icon: <SportsSoccerIcon /> },
    { id: "tennis", name: "Tennis", icon: <SportsTennisIcon /> },
    { id: "football", name: "Football", icon: <SportsFootballIcon /> },
    { id: "highlights", name: "Highlights", icon: <EmojiEventsIcon /> }
  ];

  const filters = [
    { id: "scoreboard", name: "Live Scoreboard", description: "Show live scores on your photos" },
    { id: "stats", name: "Player Stats", description: "Display your favorite player's stats" },
    { id: "prediction", name: "Game Prediction", description: "Add your game predictions" },
    { id: "jerseys", name: "Team Jerseys", description: "Try on your team's jersey virtually" },
    { id: "celebration", name: "Victory Celebration", description: "Add celebration effects" }
  ];
  
  const tips = [
    {
      id: 1,
      title: "Perfect Basketball Jump Shot",
      category: "basketball",
      author: "Coach Mike",
      isVerified: true,
      likes: 342,
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFza2V0YmFsbCUyMHRyYWluaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Soccer Dribbling Technique",
      category: "soccer",
      author: "Pro Soccer Tips",
      isVerified: true,
      likes: 289,
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29jY2VyJTIwdHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "Tennis Serve Mastery",
      category: "tennis",
      author: "TennisLover42",
      isVerified: false,
      likes: 178,
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVubmlzJTIwc2VydmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const galleryImages = [
    {
      id: 1,
      title: "NBA Finals Game-Winning Shot",
      category: "basketball",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFza2V0YmFsbCUyMGdhbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      author: "BasketballFan23",
      likes: 1245,
      comments: 89,
      tags: ["NBA", "finals", "buzzer-beater"],
      timestamp: "2 days ago",
      isOfficial: true
    },
    {
      id: 2,
      title: "World Cup Celebration",
      category: "soccer",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29jY2VyJTIwY2VsZWJyYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      author: "SoccerLover",
      likes: 2187,
      comments: 156,
      tags: ["WorldCup", "celebration", "champions"],
      timestamp: "1 week ago",
      isOfficial: false
    },
    {
      id: 3,
      title: "Tennis Championship Point",
      category: "tennis",
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVubmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      author: "TennisChannel",
      likes: 876,
      comments: 42,
      tags: ["GrandSlam", "championship", "match-point"],
      timestamp: "3 days ago",
      isOfficial: true
    },
    {
      id: 4,
      title: "Super Bowl Touchdown",
      category: "football",
      image: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW1lcmljYW4lMjBmb290YmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      author: "NFLFanatic",
      likes: 1532,
      comments: 103,
      tags: ["SuperBowl", "touchdown", "NFL"],
      timestamp: "5 days ago",
      isOfficial: false
    },
    {
      id: 5,
      title: "Amazing Basketball Dunk",
      category: "basketball",
      image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFza2V0YmFsbCUyMGR1bmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      author: "HoopsHighlight",
      likes: 945,
      comments: 67,
      tags: ["dunk", "highlight", "basketball"],
      timestamp: "1 day ago",
      isOfficial: false
    },
    {
      id: 6,
      title: "Championship Trophy Ceremony",
      category: "highlights",
      image: "https://images.unsplash.com/photo-1571025881047-01f1b1d5a7e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwdHJvcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      author: "SportsChannel",
      likes: 1876,
      comments: 134,
      tags: ["trophy", "championship", "ceremony"],
      timestamp: "2 weeks ago",
      isOfficial: true
    }
  ];

  const userAchievements = [
    {
      id: 1,
      title: "Photo Sharing Pro",
      icon: <ShareIcon />,
      progress: 75,
      total: 100
    },
    {
      id: 2,
      title: "Filter Expert",
      icon: <FilterIcon />,
      progress: 30,
      total: 50
    },
    {
      id: 3,
      title: "Tip Contributor",
      icon: <InfoIcon />,
      progress: 15,
      total: 25
    }
  ];

  const liveScores = [
    {
      id: 1,
      homeTeam: "Lakers",
      awayTeam: "Celtics",
      homeScore: 98,
      awayScore: 95,
      time: "Q4 - 2:45",
      category: "basketball"
    },
    {
      id: 2,
      homeTeam: "Man United",
      awayTeam: "Liverpool",
      homeScore: 2,
      awayScore: 2,
      time: "85'",
      category: "soccer"
    },
    {
      id: 3,
      homeTeam: "Chiefs",
      awayTeam: "49ers",
      homeScore: 24,
      awayScore: 21,
      time: "3rd - 4:20",
      category: "football"
    }
  ];

  const handleToggleLike = (photoId) => {
    if (likedPhotos.includes(photoId)) {
      setLikedPhotos(likedPhotos.filter(id => id !== photoId));
    } else {
      setLikedPhotos([...likedPhotos, photoId]);
    }
  };

  const handleToggleSave = (photoId) => {
    if (savedPhotos.includes(photoId)) {
      setSavedPhotos(savedPhotos.filter(id => id !== photoId));
    } else {
      setSavedPhotos([...savedPhotos, photoId]);
    }
  };

  const filterGallery = () => {
    let filteredImages = galleryImages;
    
    if (activeTab !== "all") {
      filteredImages = filteredImages.filter(image => image.category === activeTab);
    }
    
    if (searchQuery) {
      filteredImages = filteredImages.filter(image => 
        image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    return filteredImages;
  };

  const getCategoryIcon = (categoryName) => {
    const category = categories.find(cat => cat.id === categoryName);
    return category ? category.icon : <GridViewIcon />;
  };

  return (
    <div className="gallery">
      <div className="container">
        <div className="gallery-header">
          <h1 className="title">Sports Gallery</h1>
          <div className="header-actions">
            <div className="search-box">
              <SearchIcon />
              <input 
                type="text" 
                placeholder="Search photos, tags, people..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="view-toggle">
              <button 
                className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <GridViewIcon />
              </button>
              <button 
                className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <ViewListIcon />
              </button>
            </div>
            <button className="upload-btn">
              <PhotoCameraIcon /> Upload
            </button>
          </div>
        </div>

        <div className="gallery-categories">
          {categories.map(category => (
            <button 
              key={category.id}
              className={`category-btn ${activeTab === category.id ? 'active' : ''}`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className="gallery-content">
          <div className="gallery-main">
            <div className="filters-section">
              <h3>Fun Filters & Effects</h3>
              <div className="filters-list">
                {filters.map(filter => (
                  <div 
                    key={filter.id} 
                    className={`filter-item ${activeFilter === filter.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(filter.id)}
                  >
                    <div className="filter-icon">
                      <FilterIcon />
                    </div>
                    <div className="filter-info">
                      <h4>{filter.name}</h4>
                      <p>{filter.description}</p>
                    </div>
                  </div>
                ))}
                <button className="more-filters-btn">
                  <AddCircleIcon /> More Filters
                </button>
              </div>
            </div>

            <div className="live-scores-section">
              <h3>Live Scores</h3>
              <div className="scores-list">
                {liveScores.map(game => (
                  <div key={game.id} className="score-item">
                    <div className="game-info">
                      <span className="game-time">{game.time}</span>
                      <span className="game-category">{getCategoryIcon(game.category)}</span>
                    </div>
                    <div className="teams">
                      <div className="team home">{game.homeTeam}</div>
                      <div className="score">{game.homeScore} - {game.awayScore}</div>
                      <div className="team away">{game.awayTeam}</div>
                    </div>
                  </div>
                ))}
                <button className="view-all-btn">View All Scores</button>
              </div>
            </div>

            <div className={`gallery-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
              {filterGallery().map(photo => (
                <div key={photo.id} className="gallery-item">
                  <div className="photo-container">
                    <img src={photo.image} alt={photo.title} />
                    {photo.isOfficial && (
                      <div className="official-badge">
                        <VerifiedIcon /> Official
                      </div>
                    )}
                    <div className="photo-actions">
                      <button 
                        className={`action-btn like ${likedPhotos.includes(photo.id) ? 'active' : ''}`}
                        onClick={() => handleToggleLike(photo.id)}
                      >
                        {likedPhotos.includes(photo.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                      </button>
                      <button 
                        className={`action-btn save ${savedPhotos.includes(photo.id) ? 'active' : ''}`}
                        onClick={() => handleToggleSave(photo.id)}
                      >
                        {savedPhotos.includes(photo.id) ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                      </button>
                      <button className="action-btn share">
                        <ShareIcon />
                      </button>
                    </div>
                  </div>
                  <div className="photo-info">
                    <h4 className="photo-title">{photo.title}</h4>
                    <div className="photo-meta">
                      <div className="meta-item author">
                        By: {photo.author}
                      </div>
                      <div className="meta-item timestamp">
                        <AccessTimeIcon />
                        {photo.timestamp}
                      </div>
                    </div>
                    <div className="engagement">
                      <div className="engagement-stat">
                        <FavoriteIcon /> {photo.likes}
                      </div>
                      <div className="engagement-stat">
                        <CommentIcon /> {photo.comments}
                      </div>
                    </div>
                    <div className="tags">
                      {photo.tags.map((tag, index) => (
                        <span key={index} className="tag">
                          <LocalOfferIcon /> {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-sidebar">
            <div className="user-achievements">
              <h3>Your Achievements</h3>
              <div className="achievements-list">
                {userAchievements.map(achievement => (
                  <div key={achievement.id} className="achievement-item">
                    <div className="achievement-icon">
                      {achievement.icon}
                    </div>
                    <div className="achievement-info">
                      <h4>{achievement.title}</h4>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                        ></div>
                      </div>
                      <div className="progress-text">
                        {achievement.progress} / {achievement.total}
                      </div>
                    </div>
                  </div>
                ))}
                <button className="view-all-achievements-btn">View All Achievements</button>
              </div>
            </div>

            <div className="tips-section">
              <h3>Sports Tips & Tricks</h3>
              <div className="tips-list">
                {tips.map(tip => (
                  <div key={tip.id} className="tip-item">
                    <div className="tip-image">
                      <img src={tip.image} alt={tip.title} />
                    </div>
                    <div className="tip-info">
                      <h4>{tip.title}</h4>
                      <div className="tip-author">
                        By: {tip.author} {tip.isVerified && <VerifiedIcon className="verified-icon" />}
                      </div>
                      <div className="tip-likes">
                        <FavoriteIcon /> {tip.likes}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="add-tip">
                  <button className="add-tip-btn">
                    <AddCircleIcon /> Share Your Own Tip
                  </button>
                </div>
              </div>
            </div>

            <div className="suggested-content">
              <h3>Suggested For You</h3>
              <div className="suggested-list">
                <div className="suggested-item">
                  <div className="suggested-icon">
                    <FilterIcon />
                  </div>
                  <div className="suggested-info">
                    <h4>Try Scoreboard Filter</h4>
                    <p>Perfect for your basketball game photos</p>
                  </div>
                </div>
                <div className="suggested-item">
                  <div className="suggested-icon">
                    <StarIcon />
                  </div>
                  <div className="suggested-info">
                    <h4>NBA Finals Collection</h4>
                    <p>Photos from the championship series</p>
                  </div>
                </div>
                <div className="suggested-item">
                  <div className="suggested-icon">
                    <InfoIcon />
                  </div>
                  <div className="suggested-info">
                    <h4>Free Throw Techniques</h4>
                    <p>Tips from pro basketball coaches</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery; 