import { useState } from "react";
import "./work.scss";
import WorkIcon from "@mui/icons-material/Work";
import GroupIcon from "@mui/icons-material/Group";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BusinessIcon from "@mui/icons-material/Business";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Work = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("All Locations");
  const [filterType, setFilterType] = useState("All Types");

  const jobListings = [
    {
      id: 1,
      title: "Social Media Manager",
      company: "Major League Sports",
      location: "New York, NY",
      type: "Full-time",
      description: "Create and manage engaging content across all social platforms for a major sports league. Drive fan engagement and promote sporting events.",
      requirements: ["3+ years experience in social media management", "Sports knowledge", "Content creation skills", "Analytics experience"],
      logo: "https://images.unsplash.com/photo-1580087956754-458460cc6a79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNwb3J0JTIwbG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Content Coordinator",
      company: "Regional Sports Network",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Support the social media team by creating graphics, writing captions, and scheduling posts for a regional sports broadcast network.",
      requirements: ["1-2 years experience", "Design skills", "Strong writing ability", "Sports passion"],
      logo: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnQlMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      company: "Sports Apparel Brand",
      location: "Portland, OR",
      type: "Full-time",
      description: "Develop and execute social media campaigns for a leading sports apparel brand. Work with athletes and influencers to promote products.",
      requirements: ["2+ years in digital marketing", "Campaign management", "Influencer relations", "E-commerce experience"],
      logo: "https://images.unsplash.com/photo-1596114091345-2657acffbc3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3BvcnQlMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      title: "Community Manager",
      company: "eSports Organization",
      location: "Remote",
      type: "Full-time",
      description: "Engage with fans across social platforms, moderate community discussions, and build relationships with the gaming community.",
      requirements: ["Community management experience", "Gaming knowledge", "Crisis management", "Social media tools"],
      logo: "https://images.unsplash.com/photo-1582460231940-58785a7ef7ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGVzcG9ydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 5,
      title: "Social Media Intern",
      company: "University Athletics",
      location: "Austin, TX",
      type: "Internship",
      description: "Assist the marketing team with social media content creation, event coverage, and fan engagement for university athletics department.",
      requirements: ["Currently enrolled student", "Social media knowledge", "Photography skills", "Sports interest"],
      logo: "https://images.unsplash.com/photo-1536823186615-e52d59e0bdc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMHNwb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 6,
      title: "Social Analytics Manager",
      company: "Sports Data Company",
      location: "Boston, MA",
      type: "Full-time",
      description: "Lead social media analytics team to track performance, identify trends, and optimize strategy for sports clients.",
      requirements: ["Advanced analytics experience", "Data visualization", "Strategic thinking", "Sports industry knowledge"],
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMGNvbXBhbnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const locations = ["All Locations", "New York, NY", "Chicago, IL", "Portland, OR", "Remote", "Austin, TX", "Boston, MA"];
  const types = ["All Types", "Full-time", "Part-time", "Contract", "Internship"];

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = filterLocation === "All Locations" || job.location === filterLocation;
    const matchesType = filterType === "All Types" || job.type === filterType;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  const roleCategories = [
    {
      title: "Content Creation",
      icon: <SportsSoccerIcon />,
      description: "Create engaging sports content, manage posting schedules, and develop brand voice across platforms."
    },
    {
      title: "Community Management",
      icon: <GroupIcon />,
      description: "Engage with fans, respond to comments, build online communities, and drive audience growth."
    },
    {
      title: "Analytics & Strategy",
      icon: <DataUsageIcon />,
      description: "Analyze performance data, identify trends, and develop strategies to grow engagement and reach."
    },
    {
      title: "Campaigns & Promotions",
      icon: <SportsBasketballIcon />,
      description: "Plan and execute social media campaigns for sporting events, athlete promotions, and product launches."
    }
  ];

  return (
    <div className="work">
      <div className="container">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="title">Sports Social Media Careers</h1>
            <p className="subtitle">
              Find exciting job opportunities in the sports social media industry
            </p>
            <div className="search-container">
              <div className="search-bar">
                <SearchIcon />
                <input 
                  type="text" 
                  placeholder="Search for jobs, titles, or companies" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="filters">
                <div className="filter">
                  <FilterListIcon />
                  <select 
                    value={filterLocation} 
                    onChange={(e) => setFilterLocation(e.target.value)}
                  >
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
                <div className="filter">
                  <WorkIcon />
                  <select 
                    value={filterType} 
                    onChange={(e) => setFilterType(e.target.value)}
                  >
                    {types.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="info-section">
          <h2>Roles in Sports Social Media</h2>
          <div className="role-categories">
            {roleCategories.map((category, index) => (
              <div className="role-card" key={index}>
                <div className="role-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-card">
            <div className="stat-icon">
              <AccountBalanceIcon />
            </div>
            <div className="stat-content">
              <h3>$55,000 - $85,000</h3>
              <p>Average Salary Range</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <BusinessIcon />
            </div>
            <div className="stat-content">
              <h3>15% Growth</h3>
              <p>Estimated Job Growth</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <WorkIcon />
            </div>
            <div className="stat-content">
              <h3>5,000+</h3>
              <p>Available Positions</p>
            </div>
          </div>
        </div>

        <div className="jobs-section">
          <div className="jobs-header">
            <h2>Available Positions</h2>
            <p>{filteredJobs.length} jobs found</p>
          </div>
          <div className="jobs-container">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <div className="job-card" key={job.id}>
                  <div className="job-logo">
                    <img src={job.logo} alt={job.company} />
                  </div>
                  <div className="job-content">
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-company">{job.company}</div>
                    <div className="job-details">
                      <span className="job-location">
                        <LocationOnIcon /> {job.location}
                      </span>
                      <span className="job-type">
                        <WorkIcon /> {job.type}
                      </span>
                    </div>
                    <p className="job-description">{job.description}</p>
                    <div className="job-skills">
                      {job.requirements.map((req, index) => (
                        <span className="skill" key={index}>
                          <CheckCircleIcon /> {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="apply-btn">
                    Apply Now <ArrowForwardIcon />
                  </button>
                </div>
              ))
            ) : (
              <div className="no-jobs">
                <p>No jobs found matching your search criteria.</p>
                <button onClick={() => {
                  setSearchTerm("");
                  setFilterLocation("All Locations");
                  setFilterType("All Types");
                }}>
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="career-tips">
          <h2>Tips for Sports Social Media Careers</h2>
          <div className="tips-container">
            <div className="tip-card">
              <h3>Build Your Portfolio</h3>
              <p>Create sample content, manage your own sports-focused social accounts, or volunteer for local teams.</p>
            </div>
            <div className="tip-card">
              <h3>Stay Updated</h3>
              <p>Follow industry trends, platform changes, and sports news to keep your knowledge current.</p>
            </div>
            <div className="tip-card">
              <h3>Network Effectively</h3>
              <p>Connect with sports professionals, join industry groups, and attend relevant conferences.</p>
            </div>
            <div className="tip-card">
              <h3>Develop Technical Skills</h3>
              <p>Learn content creation tools, analytics platforms, and scheduling software commonly used in the industry.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work; 