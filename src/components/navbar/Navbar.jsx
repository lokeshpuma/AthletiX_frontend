import "./navbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ScheduleIcon from '@mui/icons-material/Schedule';
import SportsIcon from '@mui/icons-material/Sports';
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import SportsChatbot from "../sportsChatbot/SportsChatbot";
import NotificationsPanel from "../notifications/NotificationsPanel";
import LogoAnimation from "../logoAnimation/LogoAnimation";
import EmailPanel from "../emailPanel/EmailPanel";
import UserSwitch from "../userSwitch/UserSwitch";
import SchedulePanel from "../schedule/SchedulePanel";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isEmailPanelOpen, setIsEmailPanelOpen] = useState(false);
  const [isUserSwitchOpen, setIsUserSwitchOpen] = useState(false);
  const [isSchedulePanelOpen, setIsSchedulePanelOpen] = useState(false);

  const toggleChatbot = () => {
    closeAllPanels();
    setIsChatbotOpen(!isChatbotOpen);
  };

  const toggleNotifications = () => {
    closeAllPanels();
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  const toggleEmailPanel = () => {
    closeAllPanels();
    setIsEmailPanelOpen(!isEmailPanelOpen);
  };

  const toggleUserSwitch = () => {
    closeAllPanels();
    setIsUserSwitchOpen(!isUserSwitchOpen);
  };

  const toggleSchedulePanel = () => {
    closeAllPanels();
    setIsSchedulePanelOpen(!isSchedulePanelOpen);
  };

  const closeAllPanels = () => {
    setIsChatbotOpen(false);
    setIsNotificationsOpen(false);
    setIsEmailPanelOpen(false);
    setIsUserSwitchOpen(false);
    setIsSchedulePanelOpen(false);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" className="app-logo">
          <img src="./assets/logo.png" alt="App Logo" />
          <LogoAnimation />
        </Link>
        
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      
      <div className="right">
        <div 
          className="nav-icon theme-toggle"
          onClick={toggle}
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}
        </div>
        
        <div 
          className={`nav-icon ${isChatbotOpen ? "active" : ""}`} 
          onClick={toggleChatbot}
        >
          <SportsIcon />
        </div>
        <div className="nav-icon small-icon" onClick={toggleSchedulePanel}>
          <ScheduleIcon fontSize="small" />
        </div>
        <div 
          className={`nav-icon small-icon ${isEmailPanelOpen ? "active" : ""}`} 
          onClick={toggleEmailPanel}
        >
          <EmailOutlinedIcon fontSize="small" />
        </div>
        <div 
          className={`nav-icon ${isNotificationsOpen ? "active" : ""}`} 
          onClick={toggleNotifications}
        >
          <NotificationsOutlinedIcon />
          <div className="notification-badge">3</div>
        </div>
        
        <div 
          className={`nav-icon small-icon ${isUserSwitchOpen ? "active" : ""}`} 
          onClick={toggleUserSwitch}
        >
          <PersonOutlinedIcon fontSize="small" />
        </div>
        
        <Link to={`/profile/${currentUser.id}`} style={{ textDecoration: "none", color: "inherit" }}>
          <div className="user">
            <img
              src={currentUser.profilePic}
              alt=""
            />
            <span>{currentUser.name}</span>
          </div>
        </Link>
      </div>
      
      <SportsChatbot isOpen={isChatbotOpen} onClose={toggleChatbot} />
      <NotificationsPanel isOpen={isNotificationsOpen} onClose={toggleNotifications} />
      <EmailPanel isOpen={isEmailPanelOpen} onClose={toggleEmailPanel} />
      <UserSwitch isOpen={isUserSwitchOpen} onClose={toggleUserSwitch} />
      <SchedulePanel isOpen={isSchedulePanelOpen} onClose={toggleSchedulePanel} />
    </div>
  );
};

export default Navbar;
