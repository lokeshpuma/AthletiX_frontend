import { useContext } from "react";
import "./userSwitch.scss";
import { AuthContext } from "../../context/authContext";
import CloseIcon from "@mui/icons-material/Close";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useNavigate } from "react-router-dom";

const UserSwitch = ({ isOpen, onClose }) => {
  const { currentUser, logout } = useContext(AuthContext);
  const { toggle, darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();

  // Demo alternate accounts
  const alternateAccounts = [
    {
      id: 2,
      name: "Coach Smith",
      profilePic: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
      role: "Coach"
    },
    {
      id: 3,
      name: "Team Admin",
      profilePic: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
      role: "Admin"
    }
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="user-switch">
      <div className="header">
        <h3>Switch Account</h3>
        <CloseIcon className="close-icon" onClick={onClose} />
      </div>

      <div className="current-user">
        <div className="user-info">
          <img src={currentUser.profilePic} alt={currentUser.name} />
          <div className="details">
            <h4>{currentUser.name}</h4>
            <span>Athlete</span>
          </div>
        </div>
      </div>

      <div className="alternate-accounts">
        {alternateAccounts.map(account => (
          <div key={account.id} className="account-item">
            <img src={account.profilePic} alt={account.name} />
            <div className="details">
              <h4>{account.name}</h4>
              <span>{account.role}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="options">
        <div className="option-item" onClick={toggle}>
          {darkMode ? (
            <>
              <WbSunnyOutlinedIcon className="option-icon" />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <DarkModeOutlinedIcon className="option-icon" />
              <span>Dark Mode</span>
            </>
          )}
        </div>
        
        <div className="option-item">
          <SettingsIcon className="option-icon" />
          <span>Settings</span>
        </div>
        
        <div className="option-item logout" onClick={handleLogout}>
          <ExitToAppIcon className="option-icon" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default UserSwitch; 