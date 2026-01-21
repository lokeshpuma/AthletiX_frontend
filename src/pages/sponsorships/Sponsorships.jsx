import { useState } from "react";
import "./sponsorships.scss";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import MicIcon from "@mui/icons-material/Mic";
import CampaignIcon from "@mui/icons-material/Campaign";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import DiamondIcon from "@mui/icons-material/Diamond";
import GroupsIcon from "@mui/icons-material/Groups";
import BusinessIcon from "@mui/icons-material/Business";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PeopleIcon from "@mui/icons-material/People";

const Sponsorships = () => {
  const [activeTab, setActiveTab] = useState("levels");

  const successStories = [
    {
      id: 1,
      brand: "SportGear Pro",
      level: "Gold",
      description: "Increased brand awareness by 45% and gained 10,000+ new customers through our partnership.",
      image: "https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzJTIwYnJhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      logo: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3BvcnRzJTIwbG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      brand: "Athlete Energy",
      level: "Silver",
      description: "Our product sampling at app-sponsored events led to 28% boost in sales and strong user engagement.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoeSUyMGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      logo: "https://images.unsplash.com/photo-1601581987809-a2d2a844a532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZW5lcmd5JTIwZHJpbmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      brand: "Local Fitness Club",
      level: "Bronze",
      description: "Our first-ever sponsorship brought in 350+ new members directly attributed to app visibility.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      logo: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltJTIwbG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Sports Tech Summit",
      date: "June 15-17, 2023",
      location: "San Francisco, CA",
      description: "Connect with sports app users and industry leaders at our flagship event.",
      sponsorshipAvailable: true
    },
    {
      id: 2,
      title: "Community Sports Day",
      date: "July 8, 2023",
      location: "Multiple Cities",
      description: "Family-friendly sports activities organized by our app community.",
      sponsorshipAvailable: true
    },
    {
      id: 3,
      title: "Athletes Meetup",
      date: "August 12, 2023",
      location: "Chicago, IL",
      description: "Meet professional athletes and sports enthusiasts from our platform.",
      sponsorshipAvailable: false
    }
  ];

  const sponsorshipBenefits = [
    {
      id: 'visibility',
      title: "Brand Visibility",
      description: "Get your brand in front of our active sports community.",
      icon: <LanguageIcon />
    },
    {
      id: 'targeted',
      title: "Targeted Audience",
      description: "Reach sports enthusiasts and active lifestyle consumers.",
      icon: <PersonIcon />
    },
    {
      id: 'events',
      title: "Event Access",
      description: "Participate in our community and professional sports events.",
      icon: <EventIcon />
    },
    {
      id: 'content',
      title: "Content Integration",
      description: "Share your brand story through authentic sports content.",
      icon: <CampaignIcon />
    },
    {
      id: 'networking',
      title: "Industry Networking",
      description: "Connect with sports influencers, teams, and businesses.",
      icon: <HandshakeIcon />
    },
    {
      id: 'roi',
      title: "Measurable ROI",
      description: "Track engagement and conversion metrics from your sponsorship.",
      icon: <MonetizationOnIcon />
    }
  ];

  const sponsorshipLevels = [
    {
      id: "bronze",
      title: "Bronze Level",
      price: "$1,500 / month",
      color: "#CD7F32",
      icon: <StarIcon />,
      description: "Perfect for small businesses looking to gain visibility in the sports community",
      benefits: [
        "Logo display on app banners",
        "Social media shout-outs (2 per month)",
        "Brand listing in sponsors directory",
        "Sponsor badge for your website",
        "Monthly analytics report",
        "Discounted rates for event tickets"
      ],
      idealFor: "Small local businesses, sports retailers, and startups",
      buttonText: "Start with Bronze"
    },
    {
      id: "silver",
      title: "Silver Level",
      price: "$3,500 / month",
      color: "#C0C0C0",
      icon: <DiamondIcon />,
      description: "Mid-tier package with enhanced exposure and deeper engagement opportunities",
      benefits: [
        "All Bronze benefits",
        "Featured posts in app feed (2 per month)",
        "Event booth space at community gatherings",
        "Banner ads on website and app",
        "Product sampling opportunities",
        "Athlete meet-and-greet access",
        "Quarterly content collaboration",
        "Community challenge sponsorship"
      ],
      idealFor: "Regional brands, fitness franchises, and sports equipment companies",
      buttonText: "Upgrade to Silver",
      popular: true
    },
    {
      id: "gold",
      title: "Gold Level",
      price: "$7,500 / month",
      color: "#FFD700",
      icon: <DiamondIcon />,
      description: "Premium partnership with maximum exposure and exclusive opportunities",
      benefits: [
        "All Silver benefits",
        "Prime logo placement on all platforms",
        "Speaking opportunities at events",
        "Exclusive event access and VIP tickets",
        "Premium networking with sports celebrities",
        "Dedicated account manager",
        "Custom branded content series",
        "First access to new sponsorship features",
        "Co-branded merchandise opportunities",
        "Exclusive sponsorship category"
      ],
      idealFor: "National brands, sports nutrition companies, and athletic apparel brands",
      buttonText: "Partner at Gold Level"
    }
  ];

  return (
    <div className="sponsorships">
      <div className="container">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="title">Partner With Athletes & Sports Fans</h1>
            <p className="subtitle">
              Connect your brand with our engaged sports community through tiered sponsorship opportunities
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">2.5M+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat">
                <div className="stat-number">85%</div>
                <div className="stat-label">Engagement Rate</div>
              </div>
              <div className="stat">
                <div className="stat-number">150+</div>
                <div className="stat-label">Brand Partners</div>
              </div>
            </div>
            <button className="contact-btn">
              Contact Our Team <ArrowForwardIcon />
            </button>
          </div>
        </div>

        <div className="tabs-container">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'levels' ? 'active' : ''}`}
              onClick={() => setActiveTab('levels')}
            >
              <DiamondIcon /> Sponsorship Levels
            </button>
            <button 
              className={`tab ${activeTab === 'benefits' ? 'active' : ''}`}
              onClick={() => setActiveTab('benefits')}
            >
              <CheckCircleIcon /> Key Benefits
            </button>
            <button 
              className={`tab ${activeTab === 'events' ? 'active' : ''}`}
              onClick={() => setActiveTab('events')}
            >
              <EventIcon /> Upcoming Events
            </button>
            <button 
              className={`tab ${activeTab === 'success' ? 'active' : ''}`}
              onClick={() => setActiveTab('success')}
            >
              <BusinessIcon /> Success Stories
            </button>
          </div>
        </div>

        {activeTab === 'levels' && (
          <div className="sponsorship-levels-section">
            <div className="section-header">
              <h2>Choose Your Sponsorship Level</h2>
              <p>Select the partnership tier that aligns with your brand goals and budget</p>
            </div>
            <div className="levels-container">
              {sponsorshipLevels.map(level => (
                <div key={level.id} className={`level-card ${level.popular ? 'popular' : ''}`}>
                  {level.popular && <div className="popular-tag">Most Popular</div>}
                  <div className="level-header" style={{ backgroundColor: level.color }}>
                    <div className="level-icon">{level.icon}</div>
                    <h3>{level.title}</h3>
                    <div className="level-price">{level.price}</div>
                  </div>
                  <div className="level-content">
                    <p className="level-description">{level.description}</p>
                    <div className="benefits-list">
                      <h4>What's Included:</h4>
                      <ul>
                        {level.benefits.map((benefit, index) => (
                          <li key={index}>
                            <CheckCircleIcon /> {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="level-footer">
                      <div className="ideal-for">
                        <h4>Ideal For:</h4>
                        <p>{level.idealFor}</p>
                      </div>
                      <button className="level-btn">{level.buttonText}</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="custom-package">
              <div className="custom-content">
                <div className="custom-icon">
                  <ShoppingBagIcon />
                </div>
                <div className="custom-info">
                  <h3>Need a Custom Package?</h3>
                  <p>We can create tailored sponsorship solutions for your specific goals and budget</p>
                </div>
                <button className="custom-btn">Request Custom Proposal</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'benefits' && (
          <div className="benefits-section">
            <div className="section-header">
              <h2>Why Partner With Us</h2>
              <p>Discover the advantages of sponsoring our sports community platform</p>
            </div>
            <div className="benefits-grid">
              {sponsorshipBenefits.map(benefit => (
                <div key={benefit.id} className="benefit-card">
                  <div className="benefit-icon">
                    {benefit.icon}
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
            <div className="audience-section">
              <div className="audience-header">
                <h3>Our Audience Demographics</h3>
                <p>Connect with a diverse and engaged sports community</p>
              </div>
              <div className="audience-stats">
                <div className="audience-stat">
                  <div className="stat-header">
                    <PeopleIcon />
                    <h4>Age Distribution</h4>
                  </div>
                  <div className="stat-content">
                    <div className="stat-item">
                      <span className="stat-label">18-24</span>
                      <div className="stat-bar">
                        <div className="stat-fill" style={{ width: '25%' }}></div>
                      </div>
                      <span className="stat-value">25%</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">25-34</span>
                      <div className="stat-bar">
                        <div className="stat-fill" style={{ width: '40%' }}></div>
                      </div>
                      <span className="stat-value">40%</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">35-44</span>
                      <div className="stat-bar">
                        <div className="stat-fill" style={{ width: '20%' }}></div>
                      </div>
                      <span className="stat-value">20%</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">45+</span>
                      <div className="stat-bar">
                        <div className="stat-fill" style={{ width: '15%' }}></div>
                      </div>
                      <span className="stat-value">15%</span>
                    </div>
                  </div>
                </div>
                <div className="audience-stat">
                  <div className="stat-header">
                    <GroupsIcon />
                    <h4>Sports Interests</h4>
                  </div>
                  <div className="stat-content">
                    <div className="stat-item">
                      <span className="stat-label">Basketball</span>
                      <div className="stat-bar">
                        <div className="stat-fill" style={{ width: '35%' }}></div>
                      </div>
                      <span className="stat-value">35%</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Soccer</span>
                      <div className="stat-bar">
                        <div className="stat-fill" style={{ width: '30%' }}></div>
                      </div>
                      <span className="stat-value">30%</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Running</span>
                      <div className="stat-bar">
                        <div className="stat-fill" style={{ width: '20%' }}></div>
                      </div>
                      <span className="stat-value">20%</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Other</span>
                      <div className="stat-bar">
                        <div className="stat-fill" style={{ width: '15%' }}></div>
                      </div>
                      <span className="stat-value">15%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="events-section">
            <div className="section-header">
              <h2>Upcoming Sponsorship Opportunities</h2>
              <p>Engage with our community at these upcoming events</p>
            </div>
            <div className="events-grid">
              {upcomingEvents.map(event => (
                <div key={event.id} className="event-card">
                  <div className="event-header">
                    <EventIcon />
                    <h3>{event.title}</h3>
                    {event.sponsorshipAvailable ? (
                      <span className="available-tag">Sponsorship Available</span>
                    ) : (
                      <span className="unavailable-tag">Fully Sponsored</span>
                    )}
                  </div>
                  <div className="event-details">
                    <div className="event-date">{event.date}</div>
                    <div className="event-location">{event.location}</div>
                    <p className="event-description">{event.description}</p>
                  </div>
                  <div className="event-footer">
                    <button className="event-btn" disabled={!event.sponsorshipAvailable}>
                      {event.sponsorshipAvailable ? "Inquire About Sponsoring" : "Sponsorship Closed"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="calendar-link">
              <a href="#calendar">View Full Event Calendar <ArrowForwardIcon /></a>
            </div>
          </div>
        )}

        {activeTab === 'success' && (
          <div className="success-section">
            <div className="section-header">
              <h2>Sponsor Success Stories</h2>
              <p>See how brands have grown through our partnership opportunities</p>
            </div>
            <div className="success-stories">
              {successStories.map(story => (
                <div key={story.id} className="success-card">
                  <div className="success-image">
                    <img src={story.image} alt={story.brand} />
                    <div className="success-logo">
                      <img src={story.logo} alt={`${story.brand} Logo`} />
                    </div>
                  </div>
                  <div className="success-content">
                    <div className="success-header">
                      <h3>{story.brand}</h3>
                      <span className={`level-badge ${story.level.toLowerCase()}`}>{story.level} Sponsor</span>
                    </div>
                    <p className="success-description">{story.description}</p>
                    <button className="read-more-btn">Read Full Case Study</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="cta-section">
          <div className="cta-content">
            <h2>Ready to Connect With Sports Enthusiasts?</h2>
            <p>Join our growing list of brand partners and reach an engaged audience of sports fans</p>
            <div className="cta-buttons">
              <button className="primary-btn">Download Sponsorship Kit</button>
              <button className="secondary-btn">Schedule a Call</button>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <h3>How long do sponsorship contracts typically last?</h3>
              <p>Most sponsors start with a 6-month commitment, but we offer flexible terms ranging from 3 months to annual partnerships.</p>
            </div>
            <div className="faq-item">
              <h3>Can we upgrade our sponsorship level mid-contract?</h3>
              <p>Yes! You can upgrade to a higher tier at any time during your contract period. We'll prorate the difference.</p>
            </div>
            <div className="faq-item">
              <h3>How are sponsorship results measured and reported?</h3>
              <p>All sponsors receive regular analytics reports showing impressions, engagement, click-through rates, and conversion metrics specific to your sponsored content.</p>
            </div>
            <div className="faq-item">
              <h3>Are there opportunities for product sampling?</h3>
              <p>Yes, Silver and Gold level sponsors have opportunities for product sampling at our events and through select digital promotions to targeted user segments.</p>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <div className="contact-card">
            <div className="contact-icon">
              <RecentActorsIcon />
            </div>
            <h3>Speak With Our Sponsorship Team</h3>
            <p>Have questions or ready to get started? Our team is here to help.</p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="label">Email:</span>
                <span className="value">sponsors@sportsapp.com</span>
              </div>
              <div className="contact-item">
                <span className="label">Phone:</span>
                <span className="value">(555) 123-4567</span>
              </div>
            </div>
            <button className="contact-form-btn">Contact Form</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsorships; 