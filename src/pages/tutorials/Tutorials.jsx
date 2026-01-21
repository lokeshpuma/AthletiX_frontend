import { useState, useEffect } from "react";
import "./tutorials.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import VerifiedIcon from "@mui/icons-material/Verified";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";

const Tutorials = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeLevel, setActiveLevel] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [tutorials, setTutorials] = useState([]);
  const [savedTutorials, setSavedTutorials] = useState({});
  const [likedTutorials, setLikedTutorials] = useState({});
  const [completedSteps, setCompletedSteps] = useState({});
  const [expandedTutorial, setExpandedTutorial] = useState(null);
  
  const categories = [
    { id: "all", name: "All Tutorials", icon: <SchoolIcon /> },
    { id: "basketball", name: "Basketball", icon: <SportsBasketballIcon /> },
    { id: "soccer", name: "Soccer", icon: <SportsSoccerIcon /> },
    { id: "training", name: "Training", icon: <FitnessCenterIcon /> },
    { id: "running", name: "Running", icon: <DirectionsRunIcon /> },
    { id: "strategy", name: "Strategy", icon: <EmojiEventsIcon /> }
  ];
  
  const levels = [
    { id: "all", name: "All Levels" },
    { id: "beginner", name: "Beginner" },
    { id: "intermediate", name: "Intermediate" },
    { id: "advanced", name: "Advanced" }
  ];
  
  const sampleTutorials = [
    {
      id: 1,
      title: "Perfect Your Free Throw Technique",
      category: "basketball",
      level: "beginner",
      author: "Coach Mike",
      authorVerified: true,
      imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFza2V0YmFsbCUyMHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-basketball-player-scoring-a-three-point-shot-40683-large.mp4",
      description: "Master the perfect free throw with this step-by-step tutorial. Learn the correct stance, grip, and shooting motion to improve your accuracy.",
      duration: "15 min",
      rating: 4.8,
      views: 24500,
      likes: 3200,
      comments: 452,
      steps: [
        "Position yourself at the free throw line with feet shoulder-width apart",
        "Hold the ball with your dominant hand, supporting it with your other hand",
        "Bend your knees slightly and focus on the basket",
        "Take a deep breath and establish a consistent pre-shot routine",
        "Push through your legs and extend your shooting arm",
        "Follow through with your wrist, creating a smooth arc"
      ]
    },
    {
      id: 2,
      title: "Improve Your Soccer Ball Control",
      category: "soccer",
      level: "intermediate",
      author: "Pro Soccer Tips",
      authorVerified: true,
      imageUrl: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29jY2VyJTIwYmFsbCUyMGNvbnRyb2x8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-soccer-player-dribbling-a-ball-40479-large.mp4",
      description: "Take your ball control to the next level with these essential drills. Perfect for intermediate players looking to improve their touch and feel.",
      duration: "22 min",
      rating: 4.6,
      views: 18700,
      likes: 2100,
      comments: 312,
      steps: [
        "Practice juggling the ball using both feet",
        "Perform small touch drills against a wall",
        "Practice receiving the ball with different parts of your foot",
        "Work on changing direction quickly with the ball",
        "Practice tight dribbling around cones",
        "Develop the ability to shield the ball from defenders"
      ]
    },
    {
      id: 3,
      title: "HIIT Workout for Athletes",
      category: "training",
      level: "advanced",
      author: "Sports Fitness Pro",
      authorVerified: true,
      imageUrl: "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGlpdCUyMHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-side-lunge-exercise-726-large.mp4",
      description: "High-intensity interval training designed specifically for athletes. This advanced workout will improve your stamina, agility, and explosive power.",
      duration: "35 min",
      rating: 4.9,
      views: 32000,
      likes: 4800,
      comments: 627,
      steps: [
        "Warm up with dynamic stretches for 5 minutes",
        "Perform 45 seconds of burpees followed by 15 seconds rest",
        "Complete 45 seconds of mountain climbers followed by 15 seconds rest",
        "Do 45 seconds of squat jumps followed by 15 seconds rest",
        "Perform 45 seconds of high knees followed by 15 seconds rest",
        "Repeat for 5 rounds with 1 minute rest between rounds"
      ]
    },
    {
      id: 4,
      title: "Beginners Guide to Proper Running Form",
      category: "running",
      level: "beginner",
      author: "RunRight",
      authorVerified: true,
      imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cnVubmluZyUyMGZvcm18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-jogging-in-the-city-6536-large.mp4",
      description: "Learn the basics of proper running form to prevent injuries and improve efficiency. Perfect for beginners starting their running journey.",
      duration: "18 min",
      rating: 4.5,
      views: 41200,
      likes: 3600,
      comments: 514,
      steps: [
        "Stand tall with good posture and engage your core",
        "Relax your shoulders and keep elbows at approximately 90 degrees",
        "Land midfoot, not on your heels or toes",
        "Maintain a short stride length with feet landing under your body",
        "Look ahead, not down at your feet",
        "Breathe rhythmically and naturally"
      ]
    },
    {
      id: 5,
      title: "Mastering Zone Defense in Basketball",
      category: "strategy",
      level: "intermediate",
      author: "Basketball Strategy Coach",
      authorVerified: false,
      imageUrl: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFza2V0YmFsbCUyMGRlZmVuc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-basketball-team-making-a-strategy-before-the-game-40817-large.mp4",
      description: "Understand the principles of zone defense and learn how to implement this strategy effectively with your team.",
      duration: "25 min",
      rating: 4.7,
      views: 15300,
      likes: 1800,
      comments: 287,
      steps: [
        "Understand the basic 2-3 zone positioning",
        "Learn proper communication between teammates",
        "Practice shifting as the ball moves around the perimeter",
        "Master the technique of boxing out from zone positions",
        "Develop strategies for handling screens against your zone",
        "Practice transitioning between man-to-man and zone defenses"
      ]
    },
    {
      id: 6,
      title: "Soccer Shooting Drills",
      category: "soccer",
      level: "beginner",
      author: "Soccer Fundamentals",
      authorVerified: true,
      imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29jY2VyJTIwc2hvb3Rpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-soccer-player-attempting-a-shot-and-failing-40478-large.mp4",
      description: "Learn the fundamentals of shooting in soccer with these simple but effective drills. Perfect your technique and improve accuracy.",
      duration: "20 min",
      rating: 4.4,
      views: 29800,
      likes: 2700,
      comments: 342,
      steps: [
        "Set up cones or markers as targets in the goal",
        "Practice proper body positioning with non-kicking foot beside the ball",
        "Focus on striking the ball with the instep of your foot",
        "Keep your head down and eyes on the ball when shooting",
        "Follow through with your kicking foot toward the target",
        "Practice from various angles and distances"
      ]
    }
  ];
  
  // Initialize tutorials on component mount
  useEffect(() => {
    filterTutorials();
  }, [activeCategory, activeLevel, searchQuery]);
  
  // Filter tutorials based on active filters and search query
  const filterTutorials = () => {
    let filtered = [...sampleTutorials];
    
    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(tutorial => tutorial.category === activeCategory);
    }
    
    // Filter by level
    if (activeLevel !== "all") {
      filtered = filtered.filter(tutorial => tutorial.level === activeLevel);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(tutorial => 
        tutorial.title.toLowerCase().includes(query) || 
        tutorial.description.toLowerCase().includes(query) ||
        tutorial.author.toLowerCase().includes(query)
      );
    }
    
    setTutorials(filtered);
  };
  
  const handleSave = (tutorialId) => {
    setSavedTutorials(prev => ({
      ...prev,
      [tutorialId]: !prev[tutorialId]
    }));
  };
  
  const handleLike = (tutorialId) => {
    setLikedTutorials(prev => ({
      ...prev,
      [tutorialId]: !prev[tutorialId]
    }));
  };
  
  const toggleExpandTutorial = (tutorialId) => {
    setExpandedTutorial(expandedTutorial === tutorialId ? null : tutorialId);
  };
  
  const toggleStepCompletion = (tutorialId, stepIndex) => {
    setCompletedSteps(prev => {
      const tutorialSteps = prev[tutorialId] || [];
      const updatedSteps = [...tutorialSteps];
      
      if (updatedSteps.includes(stepIndex)) {
        return {
          ...prev,
          [tutorialId]: updatedSteps.filter(i => i !== stepIndex)
        };
      } else {
        return {
          ...prev,
          [tutorialId]: [...updatedSteps, stepIndex]
        };
      }
    });
  };
  
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };
  
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<StarIcon key={i} className="star full" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<StarIcon key={i} className="star half" />);
      } else {
        stars.push(<StarBorderIcon key={i} className="star empty" />);
      }
    }
    
    return stars;
  };
  
  const getProgressPercentage = (tutorialId) => {
    const tutorial = sampleTutorials.find(t => t.id === tutorialId);
    if (!tutorial) return 0;
    
    const stepsCompleted = (completedSteps[tutorialId] || []).length;
    return Math.round((stepsCompleted / tutorial.steps.length) * 100);
  };
  
  return (
    <div className="tutorials">
      <div className="container">
        <div className="header">
          <div className="title-section">
            <h1 className="title">Sports Tutorials</h1>
            <p className="subtitle">Learn new skills, training methods, and strategies</p>
          </div>
          
          <div className="search-filters">
            <div className="search-bar">
              <SearchIcon />
              <input 
                type="text" 
                placeholder="Search tutorials..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="filters">
              <div className="filter-group">
                <label>Category:</label>
                <div className="category-buttons">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.icon}
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="filter-group">
                <label>Level:</label>
                <select 
                  value={activeLevel}
                  onChange={(e) => setActiveLevel(e.target.value)}
                >
                  {levels.map(level => (
                    <option key={level.id} value={level.id}>{level.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <div className="featured-tutorial">
          <div className="featured-tutorial-media">
            <img src="https://images.unsplash.com/photo-1526676037777-05a232554d77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFza2V0YmFsbCUyMHRyYWluaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Featured Tutorial" />
            <div className="play-overlay">
              <button className="play-btn">
                <PlayArrowIcon />
              </button>
            </div>
          </div>
          
          <div className="featured-tutorial-content">
            <div className="featured-label">FEATURED TUTORIAL</div>
            <h2 className="featured-title">Advanced Basketball Dribbling Masterclass</h2>
            
            <div className="featured-meta">
              <div className="author">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=100&q=60" alt="Coach Smith" />
                <div className="author-info">
                  <div className="author-name">
                    Coach Smith <VerifiedIcon className="verified-icon" />
                  </div>
                  <div className="author-stats">124K followers • NBA Certified Trainer</div>
                </div>
              </div>
              
              <div className="featured-stats">
                <div className="stat">
                  <span className="stat-value">4.9</span>
                  <div className="stars">
                    {renderStars(4.9)}
                  </div>
                </div>
                <div className="stat">
                  <span className="stat-value">45 min</span>
                  <span className="stat-label">Duration</span>
                </div>
                <div className="stat">
                  <span className="stat-value">Intermediate</span>
                  <span className="stat-label">Level</span>
                </div>
              </div>
            </div>
            
            <p className="featured-description">
              Take your basketball handling skills to the next level with this comprehensive dribbling masterclass. 
              Learn advanced crossovers, behind-the-back moves, and how to create space against defenders.
            </p>
            
            <div className="featured-actions">
              <button className="primary-btn">Start Tutorial</button>
              <button className="secondary-btn">Save for Later</button>
            </div>
          </div>
        </div>
        
        <div className="tutorials-grid">
          {tutorials.length > 0 ? (
            tutorials.map(tutorial => (
              <div key={tutorial.id} className="tutorial-card">
                <div className="tutorial-header">
                  <div className="tutorial-image">
                    <img src={tutorial.imageUrl} alt={tutorial.title} />
                    <div className="tutorial-overlay">
                      <button className="play-button">
                        <PlayArrowIcon />
                      </button>
                      <div className="tutorial-duration">{tutorial.duration}</div>
                    </div>
                  </div>
                  
                  <div className="level-badge">{tutorial.level}</div>
                  
                  {getProgressPercentage(tutorial.id) > 0 && (
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${getProgressPercentage(tutorial.id)}%` }}
                      ></div>
                      <div className="progress-text">{getProgressPercentage(tutorial.id)}% completed</div>
                    </div>
                  )}
                </div>
                
                <div className="tutorial-content">
                  <div className="tutorial-info">
                    <h3 className="tutorial-title">{tutorial.title}</h3>
                    
                    <div className="tutorial-author">
                      <div className="author-avatar">
                        <PersonIcon />
                      </div>
                      <span>
                        {tutorial.author}
                        {tutorial.authorVerified && <VerifiedIcon className="verified-icon" />}
                      </span>
                    </div>
                    
                    <p className="tutorial-description">{tutorial.description}</p>
                    
                    <div className="tutorial-meta">
                      <div className="rating">
                        {renderStars(tutorial.rating)}
                        <span className="rating-value">{tutorial.rating}</span>
                      </div>
                      
                      <div className="views">{formatNumber(tutorial.views)} views</div>
                    </div>
                  </div>
                  
                  <div className="tutorial-actions">
                    <button
                      className={`action-btn like-btn ${likedTutorials[tutorial.id] ? 'active' : ''}`}
                      onClick={() => handleLike(tutorial.id)}
                    >
                      {likedTutorials[tutorial.id] ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
                      <span>{formatNumber(tutorial.likes)}</span>
                    </button>
                    
                    <button className="action-btn comment-btn">
                      <ForumOutlinedIcon />
                      <span>{formatNumber(tutorial.comments)}</span>
                    </button>
                    
                    <button className="action-btn share-btn">
                      <ShareOutlinedIcon />
                      <span>Share</span>
                    </button>
                    
                    <button
                      className={`action-btn save-btn ${savedTutorials[tutorial.id] ? 'active' : ''}`}
                      onClick={() => handleSave(tutorial.id)}
                    >
                      {savedTutorials[tutorial.id] ? <BookmarkIcon /> : <BookmarkBorderOutlinedIcon />}
                      <span>Save</span>
                    </button>
                  </div>
                  
                  <button 
                    className="steps-toggle"
                    onClick={() => toggleExpandTutorial(tutorial.id)}
                  >
                    {expandedTutorial === tutorial.id ? 'Hide Steps' : 'Show Steps'}
                    <ExpandMoreIcon className={expandedTutorial === tutorial.id ? 'expanded' : ''} />
                  </button>
                  
                  {expandedTutorial === tutorial.id && (
                    <div className="tutorial-steps">
                      <h4>Step-by-Step Guide:</h4>
                      <ul>
                        {tutorial.steps.map((step, index) => (
                          <li 
                            key={index} 
                            className={completedSteps[tutorial.id]?.includes(index) ? 'completed' : ''}
                            onClick={() => toggleStepCompletion(tutorial.id, index)}
                          >
                            <span className="step-checkbox">
                              {completedSteps[tutorial.id]?.includes(index) ? 
                                <CheckCircleIcon className="completed-icon" /> : 
                                <div className="empty-checkbox"></div>
                              }
                            </span>
                            <span className="step-text">{step}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="track-progress">
                        <button className="start-practice-btn">
                          Start Practice <ArrowForwardIcon />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="no-tutorials">
              <h3>No tutorials found</h3>
              <p>Try adjusting your filters or search query</p>
              <button onClick={() => {
                setActiveCategory("all");
                setActiveLevel("all");
                setSearchQuery("");
              }}>
                Reset Filters
              </button>
            </div>
          )}
        </div>
        
        <div className="tutorials-footer">
          <h3>Share Your Knowledge</h3>
          <p>Have a skill to teach? Share your own tutorial with the community.</p>
          <button className="create-tutorial-btn">
            Create a Tutorial <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tutorials; 