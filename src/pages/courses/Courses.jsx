import { useState } from "react";
import "./courses.scss";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import VerifiedIcon from "@mui/icons-material/Verified";
import MessageIcon from "@mui/icons-material/Message";
import VideocamIcon from "@mui/icons-material/Videocam";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("recommended");
  const [searchQuery, setSearchQuery] = useState("");
  
  const categories = [
    { id: "all", name: "All Courses", icon: <EmojiEventsIcon /> },
    { id: "football", name: "Football", icon: <SportsFootballIcon /> },
    { id: "basketball", name: "Basketball", icon: <SportsBasketballIcon /> },
    { id: "tennis", name: "Tennis", icon: <SportsTennisIcon /> },
    { id: "fitness", name: "Fitness", icon: <FitnessCenterIcon /> },
    { id: "soccer", name: "Soccer", icon: <SportsSoccerIcon /> },
    { id: "cricket", name: "Cricket", icon: <SportsCricketIcon /> },
    { id: "volleyball", name: "Volleyball", icon: <SportsVolleyballIcon /> },
    { id: "running", name: "Running", icon: <DirectionsRunIcon /> }
  ];
  
  const courses = [
    {
      id: 1,
      title: "Advanced Basketball Shooting Techniques",
      category: "basketball",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFza2V0YmFsbCUyMHRyYWluaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      coach: {
        name: "Michael Johnson",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        verified: true,
        bio: "Former professional player with 15+ years coaching experience"
      },
      rating: 4.8,
      reviews: 127,
      enrolled: 1243,
      duration: "8 weeks",
      level: "Intermediate",
      schedule: "Mon, Wed, Fri - 7:00 PM",
      price: 79.99,
      isPopular: true,
      achievements: ["Shooting Badge", "Pro Scorer Certificate"],
      badges: ["Trending", "Top Rated"],
      socialShares: 342
    },
    {
      id: 2,
      title: "Football Training for Beginners",
      category: "football",
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vdGJhbGwlMjB0cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      coach: {
        name: "Sarah Williams",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0JTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        verified: true,
        bio: "Youth football coach with specialization in beginner training"
      },
      rating: 4.6,
      reviews: 89,
      enrolled: 875,
      duration: "6 weeks",
      level: "Beginner",
      schedule: "Tue, Thu - 5:30 PM, Sat - 10:00 AM",
      price: 59.99,
      isPopular: false,
      achievements: ["Rookie Badge", "Fundamentals Certificate"],
      badges: ["New"],
      socialShares: 156
    },
    {
      id: 3,
      title: "Tennis Mastery: Serve & Volley Techniques",
      category: "tennis",
      image: "https://images.unsplash.com/photo-1595435934813-e3a70aa84cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlbm5pcyUyMHRyYWluaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      coach: {
        name: "Roger Davis",
        image: "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        verified: true,
        bio: "Former ATP player with focus on technical excellence"
      },
      rating: 4.9,
      reviews: 215,
      enrolled: 1876,
      duration: "10 weeks",
      level: "Advanced",
      schedule: "Mon, Wed, Fri - 6:00 PM",
      price: 89.99,
      isPopular: true,
      achievements: ["Master Server Badge", "Pro Volleyer Certificate"],
      badges: ["Bestseller", "Top Rated"],
      socialShares: 478
    },
    {
      id: 4,
      title: "Complete Fitness Training for Athletes",
      category: "fitness",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGl2ZXJzZSUyMGF0aGxldGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      coach: {
        name: "Alex Martinez",
        image: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        verified: true,
        bio: "Certified personal trainer specializing in sports conditioning"
      },
      rating: 4.7,
      reviews: 168,
      enrolled: 2145,
      duration: "12 weeks",
      level: "All Levels",
      schedule: "Mon-Fri - Various Times",
      price: 99.99,
      isPopular: true,
      achievements: ["Fitness Master Badge", "Strength Certification"],
      badges: ["Bestseller"],
      socialShares: 392
    },
    {
      id: 5,
      title: "Soccer Skills Masterclass",
      category: "soccer",
      image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvY2NlciUyMHRyYWluaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      coach: {
        name: "Carlos Rodriguez",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        verified: true,
        bio: "Former international player with UEFA coaching license"
      },
      rating: 4.9,
      reviews: 203,
      enrolled: 1786,
      duration: "8 weeks",
      level: "Intermediate",
      schedule: "Tue, Thu - 7:00 PM, Sat - 9:00 AM",
      price: 79.99,
      isPopular: true,
      achievements: ["Ball Control Badge", "Pro Dribbler Certificate"],
      badges: ["Trending", "Top Rated"],
      socialShares: 412
    },
    {
      id: 6,
      title: "Cricket Batting Fundamentals",
      category: "cricket",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      coach: {
        name: "Rahul Patel",
        image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0JTIwaW5kaWFuJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        verified: true,
        bio: "Former international player and certified cricket coach"
      },
      rating: 4.8,
      reviews: 156,
      enrolled: 943,
      duration: "6 weeks",
      level: "Beginner to Intermediate",
      schedule: "Mon, Wed - 6:00 PM, Sun - 10:00 AM",
      price: 69.99,
      isPopular: false,
      achievements: ["Master Batter Badge", "Technical Excellence Certificate"],
      badges: ["Popular"],
      socialShares: 287
    }
  ];
  
  const userAchievements = [
    {
      id: 1,
      title: "Advanced Basketball Shooting Techniques",
      progress: 75,
      badge: "Sharpshooter",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFza2V0YmFsbCUyMHRyYWluaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      milestone: "Completed 6/8 weeks"
    },
    {
      id: 2,
      title: "Tennis Mastery: Serve & Volley Techniques",
      progress: 40,
      badge: "Serve Specialist",
      image: "https://images.unsplash.com/photo-1595435934813-e3a70aa84cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlbm5pcyUyMHRyYWluaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      milestone: "Completed 4/10 weeks"
    }
  ];
  
  const upcomingClasses = [
    {
      id: 1,
      title: "Advanced Basketball Shooting Techniques",
      day: "Today",
      time: "7:00 PM",
      remaining: "30 minutes"
    },
    {
      id: 2,
      title: "Tennis Mastery: Serve & Volley Techniques",
      day: "Tomorrow",
      time: "6:00 PM",
      remaining: "1 day"
    }
  ];
  
  const filteredCourses = activeCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === activeCategory);
  
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<StarIcon key={i} className="star-icon filled" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<StarIcon key={i} className="star-icon half" />);
      } else {
        stars.push(<StarOutlineIcon key={i} className="star-icon" />);
      }
    }
    
    return stars;
  };
  
  const renderBadges = (badges) => {
    return badges.map((badge, index) => (
      <span key={index} className={`badge ${badge.toLowerCase().replace(' ', '-')}`}>
        {badge}
      </span>
    ));
  };
  
  const handleEnroll = (courseId) => {
    console.log(`Enrolled in course ${courseId}`);
    // In a real app, this would make an API call to enroll the user
  };
  
  const handleShare = (courseId) => {
    console.log(`Shared course ${courseId}`);
    // In a real app, this would open a sharing dialog
  };
  
  const handleSaveBookmark = (courseId) => {
    console.log(`Bookmarked course ${courseId}`);
    // In a real app, this would save the course to user's bookmarks
  };
  
  const handleCoachContact = (coachName) => {
    console.log(`Contacting coach ${coachName}`);
    // In a real app, this would open messaging interface
  };
  
  const handleShareAchievement = (achievementId) => {
    console.log(`Shared achievement ${achievementId}`);
    // In a real app, this would share the achievement to user's feed
  };

  return (
    <div className="courses">
      <div className="container">
        <div className="courses-header">
          <h1 className="title">Sports Courses</h1>
          <div className="header-actions">
            <div className="search-box">
              <SearchIcon />
              <input 
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="filter-btn">
              <FilterListIcon />
              Filter
            </button>
            <div className="notification-icon">
              <NotificationsIcon />
              <div className="notification-badge">3</div>
            </div>
          </div>
        </div>
        
        <div className="courses-tabs">
          <button 
            className={`courses-tab ${activeTab === "recommended" ? "active" : ""}`}
            onClick={() => setActiveTab("recommended")}
          >
            Recommended
          </button>
          <button 
            className={`courses-tab ${activeTab === "popular" ? "active" : ""}`}
            onClick={() => setActiveTab("popular")}
          >
            Popular
          </button>
          <button 
            className={`courses-tab ${activeTab === "newest" ? "active" : ""}`}
            onClick={() => setActiveTab("newest")}
          >
            Newest
          </button>
          <button 
            className={`courses-tab ${activeTab === "my-courses" ? "active" : ""}`}
            onClick={() => setActiveTab("my-courses")}
          >
            My Courses
          </button>
        </div>
        
        <div className="courses-content">
          <div className="sidebar">
            <div className="categories-section">
              <h3>Categories</h3>
              <div className="categories-list">
                {categories.map((category) => (
                  <div 
                    key={category.id}
                    className={`category-item ${activeCategory === category.id ? "active" : ""}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <span className="category-icon">{category.icon}</span>
                    <span className="category-name">{category.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="user-progress-section">
              <h3>My Progress</h3>
              {userAchievements.length > 0 ? (
                <>
                  <h4>Current Courses</h4>
                  <div className="progress-courses">
                    {userAchievements.map((achievement) => (
                      <div className="progress-course-item" key={achievement.id}>
                        <div className="progress-course-image">
                          <img src={achievement.image} alt={achievement.title} />
                          <div className="progress-badge">{achievement.badge}</div>
                        </div>
                        <div className="progress-info">
                          <h5>{achievement.title}</h5>
                          <div className="progress-bar">
                            <div 
                              className="progress-fill" 
                              style={{ width: `${achievement.progress}%` }}
                            ></div>
                          </div>
                          <div className="progress-meta">
                            <span className="progress-percentage">{achievement.progress}%</span>
                            <span className="progress-milestone">{achievement.milestone}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="no-progress">
                  <p>You haven't started any courses yet.</p>
                  <button className="browse-courses-btn">Browse Courses</button>
                </div>
              )}
            </div>
          </div>
          
          <div className="main-content">
            <div className="featured-course">
              <div className="featured-image">
                <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="Featured Course" />
                <div className="featured-badges">
                  <span className="featured-badge">Featured</span>
                  <span className="featured-badge bestseller">Bestseller</span>
                </div>
                <div className="featured-overlay">
                  <button className="featured-play-btn">
                    <VideocamIcon />
                    Preview
                  </button>
                </div>
              </div>
              
              <div className="featured-info">
                <h2 className="featured-title">Complete Sports Performance Masterclass</h2>
                
                <div className="featured-meta">
                  <div className="featured-coach">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=100&q=60" alt="Coach" />
                    <div className="coach-info">
                      <div className="coach-name">
                        Coach Jessica Smith <VerifiedIcon className="verified-icon" />
                      </div>
                      <div className="coach-title">Professional Trainer & Nutritionist</div>
                    </div>
                  </div>
                  
                  <div className="featured-stats">
                    <div className="stat-item">
                      <span className="stat-value">4.9</span>
                      <div className="stat-stars">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <StarIcon key={i} className={i <= 4 ? "full" : "half"} />
                        ))}
                      </div>
                      <span className="stat-count">(2,145)</span>
                    </div>
                    
                    <div className="stat-item students">
                      <span>3,872 students</span>
                    </div>
                    
                    <div className="stat-item level">
                      <span>All Levels</span>
                    </div>
                  </div>
                </div>
                
                <p className="featured-description">
                  Master every aspect of sports performance with this comprehensive course. 
                  Learn advanced techniques for strength training, nutrition, recovery, and mental performance 
                  to take your athletic abilities to the next level.
                </p>
                
                <div className="featured-pricing">
                  <div className="price">
                    <span className="current-price">$89.99</span>
                    <span className="original-price">$129.99</span>
                    <span className="discount-label">30% off</span>
                  </div>
                  
                  <div className="featured-actions">
                    <button className="enroll-btn">Enroll Now</button>
                    <button className="wishlist-btn">
                      <BookmarkIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="courses-section">
              <div className="section-header">
                <h3>Recommended Courses</h3>
                <button className="view-all-btn">
                  View All <ChevronRightIcon />
                </button>
              </div>
              
              <div className="courses-grid">
                {courses.slice(0, 6).map((course) => (
                  <div className="course-card" key={course.id}>
                    <div className="course-image">
                      <img src={course.image} alt={course.title} />
                      <div className="course-badges">
                        {course.badges.map((badge, index) => (
                          <span 
                            key={index} 
                            className={`course-badge ${badge.toLowerCase().replace(" ", "-")}`}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                      <div className="course-price">${course.price}</div>
                    </div>
                    
                    <div className="course-content">
                      <h4 className="course-title">{course.title}</h4>
                      
                      <div className="course-coach">
                        <img src={course.coach.image} alt={course.coach.name} />
                        <span className="coach-name">
                          {course.coach.name}
                          {course.coach.verified && <VerifiedIcon className="verified-icon" />}
                        </span>
                      </div>
                      
                      <div className="course-meta">
                        <div className="meta-item">
                          <span className="meta-label">Duration:</span>
                          <span className="meta-value">{course.duration}</span>
                        </div>
                        <div className="meta-item">
                          <span className="meta-label">Level:</span>
                          <span className="meta-value">{course.level}</span>
                        </div>
                      </div>
                      
                      <div className="course-rating">
                        <div className="stars">
                          {renderStars(course.rating)}
                        </div>
                        <span className="rating-text">
                          {course.rating} ({course.reviews})
                        </span>
                      </div>
                      
                      <div className="course-actions">
                        <button 
                          className="action-btn enroll-btn"
                          onClick={() => handleEnroll(course.id)}
                        >
                          Enroll
                        </button>
                        <div className="action-icons">
                          <button 
                            className="icon-btn"
                            onClick={() => handleSaveBookmark(course.id)}
                          >
                            <BookmarkIcon />
                          </button>
                          <button 
                            className="icon-btn"
                            onClick={() => handleShare(course.id)}
                          >
                            <ShareIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses; 