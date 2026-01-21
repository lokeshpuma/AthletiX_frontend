import { useState, useRef, useEffect } from "react";
import "./notificationsPanel.scss";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import TuneIcon from "@mui/icons-material/Tune";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import EventIcon from "@mui/icons-material/Event";
import ChatIcon from "@mui/icons-material/Chat";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const NotificationsPanel = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "score",
      icon: <SportsBasketballIcon />,
      color: "#FF5722",
      title: "Lakers vs. Warriors",
      content: "Final score: Lakers 114, Warriors 106",
      time: "5 min ago",
      isRead: false
    },
    {
      id: 2,
      type: "event",
      icon: <EventIcon />,
      color: "#2196F3",
      title: "Event Reminder",
      content: "NBA Finals Game 3 starts in 2 hours",
      time: "20 min ago",
      isRead: false
    },
    {
      id: 3,
      type: "chat",
      icon: <ChatIcon />,
      color: "#4CAF50",
      title: "New Message",
      content: "John commented on your basketball highlights",
      time: "1 hour ago",
      isRead: true
    },
    {
      id: 4,
      type: "score",
      icon: <SportsSoccerIcon />,
      color: "#FF5722",
      title: "Manchester United vs. Liverpool",
      content: "Final score: Manchester United 2, Liverpool 1",
      time: "3 hours ago",
      isRead: true
    },
    {
      id: 5,
      type: "offer",
      icon: <LocalOfferIcon />,
      color: "#9C27B0",
      title: "Special Offer",
      content: "25% off on all NBA merchandise this weekend!",
      time: "5 hours ago",
      isRead: false
    },
    {
      id: 6,
      type: "event",
      icon: <EventIcon />,
      color: "#2196F3",
      title: "New Event",
      content: "Basketball training session scheduled for tomorrow",
      time: "Yesterday",
      isRead: true
    },
    {
      id: 7,
      type: "score",
      icon: <SportsFootballIcon />,
      color: "#FF5722",
      title: "Chiefs vs. Bills",
      content: "Final score: Chiefs 31, Bills 24",
      time: "Yesterday",
      isRead: true
    },
    {
      id: 8,
      type: "score",
      icon: <SportsVolleyballIcon />,
      color: "#FF5722",
      title: "USA vs. Brazil",
      content: "USA wins 3-1 in sets (25-22, 23-25, 25-19, 25-20)",
      time: "2 days ago",
      isRead: true
    }
  ]);
  
  const panelRef = useRef(null);

  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && panelRef.current && !panelRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Prevent scrolling when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map(notification => 
        notification.id === id 
          ? { ...notification, isRead: true } 
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const filteredNotifications = () => {
    if (activeTab === "all") {
      return notifications;
    }
    return notifications.filter(notification => notification.type === activeTab);
  };

  const unreadCount = notifications.filter(notification => !notification.isRead).length;

  return (
    <>
      <div className={`notification-overlay ${isOpen ? "open" : ""}`} onClick={onClose}></div>
      <div className={`notifications-panel ${isOpen ? "open" : ""}`} ref={panelRef}>
        <div className="panel-header">
          <div className="header-title">
            <h3>Notifications</h3>
            {unreadCount > 0 && <span className="unread-badge">{unreadCount}</span>}
          </div>
          <div className="header-actions">
            <button className="header-btn" onClick={markAllAsRead} title="Mark all as read">
              <DoneAllIcon />
            </button>
            <button className="header-btn settings-btn" title="Notification settings">
              <TuneIcon />
            </button>
            <button className="header-btn close-btn" onClick={onClose} title="Close">
              <CloseIcon />
            </button>
          </div>
        </div>
        
        <div className="panel-tabs">
          <button 
            className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button 
            className={`tab-btn ${activeTab === "score" ? "active" : ""}`}
            onClick={() => setActiveTab("score")}
          >
            Scores
          </button>
          <button 
            className={`tab-btn ${activeTab === "event" ? "active" : ""}`}
            onClick={() => setActiveTab("event")}
          >
            Events
          </button>
          <button 
            className={`tab-btn ${activeTab === "chat" ? "active" : ""}`}
            onClick={() => setActiveTab("chat")}
          >
            Messages
          </button>
          <button 
            className={`tab-btn ${activeTab === "offer" ? "active" : ""}`}
            onClick={() => setActiveTab("offer")}
          >
            Offers
          </button>
        </div>
        
        <div className="notifications-list">
          {filteredNotifications().length > 0 ? (
            filteredNotifications().map((notification) => (
              <div 
                key={notification.id} 
                className={`notification-item ${notification.isRead ? "read" : "unread"}`}
                onClick={() => markAsRead(notification.id)}
              >
                <div 
                  className="notification-icon" 
                  style={{ backgroundColor: `${notification.color}20`, color: notification.color }}
                >
                  {notification.icon}
                </div>
                <div className="notification-content">
                  <div className="notification-header">
                    <span className="notification-title">{notification.title}</span>
                    <span className="notification-time">{notification.time}</span>
                  </div>
                  <p className="notification-text">{notification.content}</p>
                </div>
                <div className="notification-actions">
                  {!notification.isRead && (
                    <button 
                      className="action-btn read-btn" 
                      onClick={(e) => {
                        e.stopPropagation();
                        markAsRead(notification.id);
                      }}
                      title="Mark as read"
                    >
                      <CheckCircleOutlineIcon />
                    </button>
                  )}
                  <button 
                    className="action-btn delete-btn" 
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNotification(notification.id);
                    }}
                    title="Delete"
                  >
                    <DeleteOutlineIcon />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-notifications">
              <NotificationsOffIcon />
              <p>No notifications to display</p>
              {activeTab !== "all" && (
                <button className="view-all-btn" onClick={() => setActiveTab("all")}>
                  View all notifications
                </button>
              )}
            </div>
          )}
        </div>
        
        <div className="panel-footer">
          <button className="clear-all-btn" onClick={clearAll}>
            Clear All
          </button>
          <button className="settings-link">
            Notification Settings
          </button>
        </div>
      </div>
    </>
  );
};

export default NotificationsPanel; 