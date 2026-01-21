import { useState, useRef, useEffect } from "react";
import "./videos.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import ReplayIcon from "@mui/icons-material/Replay";
import FilterListIcon from "@mui/icons-material/FilterList";
import PersonIcon from "@mui/icons-material/Person";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VerifiedIcon from "@mui/icons-material/Verified";

const Videos = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [videos, setVideos] = useState([]);
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [muted, setMuted] = useState(true);
  const videoRefs = useRef({});

  const categories = [
    { id: "all", name: "All Videos" },
    { id: "highlights", name: "Game Highlights" },
    { id: "interviews", name: "Interviews" },
    { id: "behindscenes", name: "Behind the Scenes" },
    { id: "fanmade", name: "Fan Content" },
    { id: "live", name: "Live Now" }
  ];

  const sampleVideos = [
    {
      id: 1,
      title: "Last-minute winning shot by Thompson",
      category: "highlights",
      username: "NBA Official",
      verified: true,
      views: "2.4M",
      timestamp: "12 hours ago",
      likes: 45200,
      comments: 3240,
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-basketball-player-scoring-a-three-point-shot-40683-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFza2V0YmFsbCUyMHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      hasSlowMo: true,
      isLive: false
    },
    {
      id: 2,
      title: "Pre-game interview with coach Rodriguez",
      category: "interviews",
      username: "Sports Now",
      verified: true,
      views: "145K",
      timestamp: "1 day ago",
      likes: 3200,
      comments: 128,
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-talking-on-tv-interview-program-7558-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1610635219073-9585432aead9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJ2aWV3fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      hasSlowMo: false,
      isLive: false
    },
    {
      id: 3,
      title: "LIVE: Championship finals - Wolves vs Tigers",
      category: "live",
      username: "SportsStream",
      verified: true,
      views: "540K",
      timestamp: "LIVE NOW",
      likes: 18700,
      comments: 4560,
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-skateboarding-down-a-street-at-night-42465-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFza2V0YmFsbCUyMGdhbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      hasSlowMo: true,
      isLive: true
    },
    {
      id: 4,
      title: "Locker room celebration after championship win",
      category: "behindscenes",
      username: "InsideSports",
      verified: true,
      views: "890K",
      timestamp: "2 days ago",
      likes: 32400,
      comments: 1250,
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-friends-having-fun-indoors-4659-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1519766304817-3450e0e308cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VsZWJyYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      hasSlowMo: false,
      isLive: false
    },
    {
      id: 5,
      title: "My reaction to the championship game!",
      category: "fanmade",
      username: "SportsFanatic",
      verified: false,
      views: "52K",
      timestamp: "1 day ago",
      likes: 4300,
      comments: 320,
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-excited-man-watching-tv-on-the-sofa-42010-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1606836591695-4d58a73eba1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFuJTIwcmVhY3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      hasSlowMo: false,
      isLive: false
    },
    {
      id: 6,
      title: "Amazing penalty save in yesterday's match",
      category: "highlights",
      username: "SoccerHighlights",
      verified: true,
      views: "1.2M",
      timestamp: "18 hours ago",
      likes: 28500,
      comments: 1870,
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-men-playing-soccer-at-night-8547-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1508098682722-e99c643e7f3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29jY2VyJTIwZ29hbGtlZXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      hasSlowMo: true,
      isLive: false
    },
    {
      id: 7,
      title: "LIVE: Post-game press conference",
      category: "live",
      username: "Sports Now",
      verified: true,
      views: "87K",
      timestamp: "LIVE NOW",
      likes: 2100,
      comments: 430,
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-talking-in-an-interview-42300-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1603123853880-a92fafb7809f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJlc3MlMjBjb25mZXJlbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      hasSlowMo: false,
      isLive: true
    },
    {
      id: 8,
      title: "Incredible slam dunk competition highlights",
      category: "highlights",
      username: "BasketballFever",
      verified: true,
      views: "3.8M",
      timestamp: "3 days ago",
      likes: 156000,
      comments: 8790,
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-basketball-player-doing-a-slam-dunk-40539-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2xhbSUyMGR1bmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      hasSlowMo: true,
      isLive: false
    }
  ];

  useEffect(() => {
    if (activeCategory === "all") {
      setVideos(sampleVideos);
    } else {
      setVideos(sampleVideos.filter(video => video.category === activeCategory));
    }
  }, [activeCategory]);

  const handleVideoClick = (videoId) => {
    // Pause any currently playing video
    if (activeVideoId && videoRefs.current[activeVideoId]) {
      videoRefs.current[activeVideoId].pause();
    }

    // Set the new active video
    setActiveVideoId(videoId);

    // Play the new video
    if (videoRefs.current[videoId]) {
      videoRefs.current[videoId].play();
    }
  };

  const togglePlay = (videoId, e) => {
    e.stopPropagation();
    const video = videoRefs.current[videoId];
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setMuted(!muted);
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  const [likedVideos, setLikedVideos] = useState({});
  const [savedVideos, setSavedVideos] = useState({});

  const handleLike = (videoId, e) => {
    e.stopPropagation();
    setLikedVideos(prev => ({
      ...prev,
      [videoId]: !prev[videoId]
    }));
  };

  const handleSave = (videoId, e) => {
    e.stopPropagation();
    setSavedVideos(prev => ({
      ...prev,
      [videoId]: !prev[videoId]
    }));
  };

  return (
    <div className="videos">
      <div className="container">
        <div className="header">
          <h1 className="title">Sports Videos</h1>
          <div className="subtitle">Watch and share exciting sports moments</div>
          
          <div className="categories-container">
            <div className="categories">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? "active" : ""}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.id === "live" && <LiveTvIcon className="category-icon" />}
                  {category.id === "highlights" && <SlowMotionVideoIcon className="category-icon" />}
                  {category.name}
                  {category.id === "live" && <span className="live-dot"></span>}
                </button>
              ))}
            </div>
            <button className="filter-btn">
              <FilterListIcon />
              Filter
            </button>
          </div>
        </div>

        <div className="featured-video">
          <div className="featured-video-player">
            <video 
              src="https://assets.mixkit.co/videos/preview/mixkit-basketball-player-scoring-a-three-point-shot-40683-large.mp4"
              poster="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFza2V0YmFsbCUyMHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=80"
              controls
            ></video>
          </div>
          <div className="featured-video-info">
            <div className="featured-video-header">
              <div className="featured-video-title">FEATURED: Championship Winning Moments</div>
              <div className="featured-video-meta">
                <span className="views">4.2M views</span>
                <span className="dot">•</span>
                <span className="time">2 days ago</span>
              </div>
            </div>
            <div className="featured-video-creator">
              <img 
                src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3BvcnRzJTIwbG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=100&q=60" 
                alt="NBA Official" 
              />
              <div className="creator-info">
                <div className="creator-name">
                  NBA Official <VerifiedIcon className="verified-icon" />
                </div>
                <div className="creator-followers">2.4M followers</div>
              </div>
              <button className="follow-btn">Follow</button>
            </div>
            <div className="featured-video-description">
              Relive the most exciting moments from this year's championship game! Watch as the underdogs make an incredible comeback in the final minutes.
            </div>
            <div className="featured-video-tags">
              <span className="tag">#Basketball</span>
              <span className="tag">#Championship</span>
              <span className="tag">#Highlights</span>
            </div>
          </div>
        </div>

        <div className="videos-section">
          <h2 className="section-title">
            {activeCategory === "all" ? "All Videos" : 
             activeCategory === "highlights" ? "Game Highlights" :
             activeCategory === "interviews" ? "Player Interviews" :
             activeCategory === "behindscenes" ? "Behind the Scenes" :
             activeCategory === "fanmade" ? "Fan Content" : "Live Streams"}
          </h2>
          
          <div className="videos-grid">
            {videos.map((video) => (
              <div 
                className="video-card" 
                key={video.id}
                onClick={() => handleVideoClick(video.id)}
              >
                <div className="video-container">
                  <video
                    ref={el => videoRefs.current[video.id] = el}
                    src={video.videoUrl}
                    poster={video.thumbnail}
                    loop
                    muted={muted}
                    playsInline
                  ></video>

                  <div className="video-overlay">
                    <div className="video-controls">
                      <button 
                        className="control-btn play-btn"
                        onClick={(e) => togglePlay(video.id, e)}
                      >
                        {activeVideoId === video.id && !videoRefs.current[video.id]?.paused ? 
                          <PauseIcon /> : <PlayArrowIcon />}
                      </button>
                      <button 
                        className="control-btn volume-btn"
                        onClick={toggleMute}
                      >
                        {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
                      </button>
                    </div>
                    
                    {video.hasSlowMo && (
                      <button className="slow-mo-btn">
                        <SlowMotionVideoIcon /> Slow-Mo
                      </button>
                    )}

                    {video.isLive && (
                      <div className="live-badge">
                        <LiveTvIcon /> LIVE
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="video-info">
                  <div className="video-header">
                    <div className="user-avatar">
                      <PersonIcon />
                    </div>
                    <div className="video-details">
                      <h3 className="video-title">{video.title}</h3>
                      <div className="video-meta">
                        <span className="video-username">
                          {video.username}
                          {video.verified && <VerifiedIcon className="verified-icon" />}
                        </span>
                        <div className="video-stats">
                          <span className="views">{video.views} views</span>
                          <span className="dot">•</span>
                          <span className="timestamp">{video.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="video-actions">
                    <button 
                      className={`action-btn like-btn ${likedVideos[video.id] ? 'active' : ''}`}
                      onClick={(e) => handleLike(video.id, e)}
                    >
                      {likedVideos[video.id] ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
                      <span>{formatNumber(video.likes)}</span>
                    </button>
                    <button className="action-btn comment-btn">
                      <ChatBubbleOutlineIcon />
                      <span>{formatNumber(video.comments)}</span>
                    </button>
                    <button className="action-btn share-btn">
                      <ShareOutlinedIcon />
                      <span>Share</span>
                    </button>
                    <button 
                      className={`action-btn save-btn ${savedVideos[video.id] ? 'active' : ''}`}
                      onClick={(e) => handleSave(video.id, e)}
                    >
                      {savedVideos[video.id] ? <BookmarkIcon /> : <BookmarkBorderOutlinedIcon />}
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="load-more">
            <button className="load-more-btn">
              Load More Videos <ArrowForwardIcon />
            </button>
          </div>
        </div>

        <div className="trending-tags">
          <h3>Trending Tags</h3>
          <div className="tags">
            <a href="#" className="tag">#NBA</a>
            <a href="#" className="tag">#WorldCup</a>
            <a href="#" className="tag">#Olympics</a>
            <a href="#" className="tag">#Football</a>
            <a href="#" className="tag">#Tennis</a>
            <a href="#" className="tag">#UFC</a>
            <a href="#" className="tag">#Baseball</a>
            <a href="#" className="tag">#Highlights</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos; 