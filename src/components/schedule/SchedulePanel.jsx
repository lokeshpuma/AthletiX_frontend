import { useState, useEffect } from "react";
import "./schedulePanel.scss";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import AlarmIcon from "@mui/icons-material/Alarm";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PeopleIcon from "@mui/icons-material/People";

const SchedulePanel = ({ isOpen, onClose }) => {
  const [view, setView] = useState("calendar"); // calendar, create, edit
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [editingEvent, setEditingEvent] = useState(null);
  const [today] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState([]);
  
  // New event form state
  const [newEvent, setNewEvent] = useState({
    title: "",
    startTime: "08:00",
    endTime: "09:00",
    location: "",
    description: "",
    type: "training",
    reminder: true,
    reminderTime: 30, // minutes before event
    color: "#4CAF50"
  });
  
  // Calendar day generation
  useEffect(() => {
    const generateCalendarDays = () => {
      const daysInMonth = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 1,
        0
      ).getDate();
      
      const firstDayOfMonth = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        1
      ).getDay();
      
      // Calculate previous month's days to show
      const prevMonthDays = [];
      if (firstDayOfMonth > 0) {
        const prevMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 0);
        const prevMonthDaysCount = prevMonth.getDate();
        
        for (let i = firstDayOfMonth - 1; i >= 0; i--) {
          const day = prevMonthDaysCount - i;
          const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, day);
          prevMonthDays.push({
            date,
            day,
            isCurrentMonth: false
          });
        }
      }
      
      // Current month days
      const currentMonthDays = [];
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
        currentMonthDays.push({
          date,
          day,
          isCurrentMonth: true,
          isToday: 
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        });
      }
      
      // Next month days to fill the grid
      const totalDaysSoFar = prevMonthDays.length + currentMonthDays.length;
      const daysToAdd = totalDaysSoFar <= 35 ? 35 - totalDaysSoFar : 42 - totalDaysSoFar;
      
      const nextMonthDays = [];
      for (let day = 1; day <= daysToAdd; day++) {
        const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, day);
        nextMonthDays.push({
          date,
          day,
          isCurrentMonth: false
        });
      }
      
      setCalendarDays([...prevMonthDays, ...currentMonthDays, ...nextMonthDays]);
    };
    
    generateCalendarDays();
  }, [selectedDate, today]);

  // Demo events
  useEffect(() => {
    const mockEvents = [
      {
        id: 1,
        title: "Team Training",
        startTime: "10:00",
        endTime: "12:00",
        date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1), // tomorrow
        location: "Main Stadium",
        description: "Weekly team training session. Focus on defensive tactics.",
        type: "training",
        reminder: true,
        reminderTime: 60,
        color: "#4CAF50"
      },
      {
        id: 2,
        title: "League Match vs Eagles",
        startTime: "15:00",
        endTime: "17:00",
        date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3),
        location: "City Arena",
        description: "Important league match. Arrive 90 minutes before for warmup.",
        type: "match",
        reminder: true,
        reminderTime: 120,
        color: "#FF5722"
      },
      {
        id: 3,
        title: "Fitness Session",
        startTime: "09:00",
        endTime: "10:30",
        date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        location: "Gym Center",
        description: "Focus on strength and conditioning.",
        type: "personal",
        reminder: true,
        reminderTime: 30,
        color: "#2196F3"
      }
    ];
    
    setEvents(mockEvents);
  }, [today]);

  const handlePrevMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const getEventsForDate = (date) => {
    return events.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };

  const handleCreateEvent = () => {
    setView("create");
    // Set the default date to the currently selected date
    setNewEvent(prev => ({
      ...prev,
      date: selectedDate
    }));
  };

  const handleSaveEvent = () => {
    if (editingEvent) {
      // Update existing event
      setEvents(events.map(event => 
        event.id === editingEvent.id 
          ? { ...newEvent, id: event.id } 
          : event
      ));
    } else {
      // Create new event
      const newId = Math.max(0, ...events.map(e => e.id)) + 1;
      setEvents([...events, { ...newEvent, id: newId }]);
    }
    
    // Reset form and view
    setNewEvent({
      title: "",
      startTime: "08:00",
      endTime: "09:00",
      location: "",
      description: "",
      type: "training",
      reminder: true,
      reminderTime: 30,
      color: "#4CAF50"
    });
    setEditingEvent(null);
    setView("calendar");
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setNewEvent({ ...event });
    setView("edit");
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter(event => event.id !== eventId));
    if (editingEvent && editingEvent.id === eventId) {
      setEditingEvent(null);
      setView("calendar");
    }
  };

  const handleToggleReminder = (eventId) => {
    setEvents(events.map(event => 
      event.id === eventId 
        ? { ...event, reminder: !event.reminder } 
        : event
    ));
  };

  const getEventTypeIcon = (type) => {
    switch (type) {
      case "training":
        return <DirectionsRunIcon />;
      case "match":
        return <SportsSoccerIcon />;
      case "personal":
        return <FitnessCenterIcon />;
      case "team":
        return <PeopleIcon />;
      case "basketball":
        return <SportsBasketballIcon />;
      case "tennis":
        return <SportsTennisIcon />;
      case "baseball":
        return <SportsBaseballIcon />;
      default:
        return <CalendarMonthIcon />;
    }
  };

  const formatMonthYear = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    return new Date(0, 0, 0, hours, minutes).toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  // Event details section - make it more compact
  const renderEventDetails = (event) => {
    return (
      <div className="event-details">
        <div className="event-detail">
          <AccessTimeIcon />
          <span>{formatTime(event.startTime)} - {formatTime(event.endTime)}</span>
        </div>
        {event.location && (
          <div className="event-detail">
            <LocationOnIcon />
            <span>{event.location}</span>
          </div>
        )}
        {event.reminder && (
          <div className="event-detail">
            <AlarmIcon />
            <span>{event.reminderTime} min before</span>
          </div>
        )}
        {event.description && (
          <div className="event-description">{event.description}</div>
        )}
      </div>
    );
  };

  // Calendar and event view
  const renderCalendarView = () => {
    return (
      <>
        <div className="calendar-header">
          <div className="month-selector">
            <button onClick={handlePrevMonth}>&lt;</button>
            <h4>{formatMonthYear(selectedDate)}</h4>
            <button onClick={handleNextMonth}>&gt;</button>
          </div>
        </div>
        
        <div className="calendar-grid">
          <div className="weekdays">
            <div>Su</div>
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
          </div>
          
          <div className="days">
            {calendarDays.map((day, index) => {
              const eventsForDay = getEventsForDate(day.date);
              const isSelected = 
                selectedDate.getDate() === day.date.getDate() &&
                selectedDate.getMonth() === day.date.getMonth() &&
                selectedDate.getFullYear() === day.date.getFullYear();
                
              return (
                <div 
                  key={index}
                  className={`day ${day.isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${!day.isCurrentMonth ? 'other-month' : ''}`}
                  onClick={() => handleDateClick(day.date)}
                >
                  <div className="day-number">{day.day}</div>
                  {eventsForDay.length > 0 && (
                    <div className="event-dots">
                      {eventsForDay.length <= 3 ? (
                        eventsForDay.map((event, eventIndex) => (
                          <div 
                            key={eventIndex}
                            className="event-dot"
                            style={{ backgroundColor: event.color }}
                          ></div>
                        ))
                      ) : (
                        <>
                          <div className="event-dot" style={{ backgroundColor: eventsForDay[0].color }}></div>
                          <div className="event-count">+{eventsForDay.length}</div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="events-list">
          <h4>Events for {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</h4>
          
          {getEventsForDate(selectedDate).length === 0 ? (
            <div className="no-events">No events scheduled for this day</div>
          ) : (
            getEventsForDate(selectedDate).map(event => (
              <div 
                key={event.id}
                className="event-item"
                style={{ borderLeftColor: event.color }}
              >
                <div className="event-header">
                  <div className="event-title">
                    <div className="event-icon">
                      {getEventTypeIcon(event.type)}
                    </div>
                    <h5>{event.title}</h5>
                  </div>
                  
                  <div className="event-actions">
                    <NotificationsActiveIcon 
                      className={`action-icon ${event.reminder ? 'active' : ''}`}
                      onClick={() => handleToggleReminder(event.id)}
                    />
                    <EditIcon 
                      className="action-icon"
                      onClick={() => handleEditEvent(event)}
                    />
                    <DeleteIcon 
                      className="action-icon"
                      onClick={() => handleDeleteEvent(event.id)}
                    />
                  </div>
                </div>
                
                {renderEventDetails(event)}
              </div>
            ))
          )}
        </div>
        
        <button 
          className="add-event-btn"
          onClick={handleCreateEvent}
        >
          <AddIcon />
        </button>
      </>
    );
  };

  // Create/Edit event form
  const renderEventForm = () => {
    const isEdit = view === "edit";
    const formTitle = isEdit ? "Edit Event" : "Create Event";
    const formClass = isEdit ? "edit-event-form" : "create-event-form";
    
    return (
      <div className={formClass}>
        <h4>{formTitle}</h4>
        
        <div className="form-group">
          <label>Title</label>
          <input 
            type="text"
            value={newEvent.title}
            onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
            placeholder="Event title"
          />
        </div>
        
        <div className="form-group">
          <label>Date</label>
          <input 
            type="date"
            value={newEvent.date ? newEvent.date.toISOString().split('T')[0] : ''}
            onChange={(e) => {
              const date = new Date(e.target.value);
              setNewEvent({...newEvent, date});
            }}
          />
        </div>
        
        <div className="form-group">
          <div className="time-inputs">
            <div className="time-input">
              <label>Start</label>
              <input 
                type="time"
                value={newEvent.startTime}
                onChange={(e) => setNewEvent({...newEvent, startTime: e.target.value})}
              />
            </div>
            
            <div className="time-input">
              <label>End</label>
              <input 
                type="time"
                value={newEvent.endTime}
                onChange={(e) => setNewEvent({...newEvent, endTime: e.target.value})}
              />
            </div>
          </div>
        </div>
        
        <div className="form-group">
          <label>Location</label>
          <input 
            type="text"
            value={newEvent.location}
            onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
            placeholder="Event location"
          />
        </div>
        
        <div className="form-group">
          <label>Type</label>
          <select
            value={newEvent.type}
            onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
          >
            <option value="training">Training</option>
            <option value="match">Match</option>
            <option value="personal">Personal</option>
            <option value="team">Team</option>
            <option value="basketball">Basketball</option>
            <option value="tennis">Tennis</option>
            <option value="baseball">Baseball</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Color</label>
          <div className="color-selector">
            {["#4CAF50", "#2196F3", "#FF5722", "#9C27B0", "#FFC107", "#607D8B"].map(color => (
              <div 
                key={color}
                className={`color-option ${newEvent.color === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setNewEvent({...newEvent, color})}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="form-group">
          <div className="checkbox-group">
            <input 
              type="checkbox"
              id="reminder"
              checked={newEvent.reminder}
              onChange={(e) => setNewEvent({...newEvent, reminder: e.target.checked})}
            />
            <label htmlFor="reminder">Set reminder</label>
            
            {newEvent.reminder && (
              <select
                className="reminder-select"
                value={newEvent.reminderTime}
                onChange={(e) => setNewEvent({...newEvent, reminderTime: parseInt(e.target.value)})}
              >
                <option value="15">15 minutes before</option>
                <option value="30">30 minutes before</option>
                <option value="60">1 hour before</option>
                <option value="120">2 hours before</option>
                <option value="1440">1 day before</option>
              </select>
            )}
          </div>
        </div>
        
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={newEvent.description}
            onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
            placeholder="Event description"
            rows="3"
          ></textarea>
        </div>
        
        <div className="form-actions">
          <button 
            className="cancel-btn"
            onClick={() => {
              setView("calendar");
              setEditingEvent(null);
            }}
          >
            Cancel
          </button>
          
          <div>
            {isEdit && (
              <button 
                className="delete-btn"
                onClick={() => handleDeleteEvent(editingEvent.id)}
              >
                Delete
              </button>
            )}
            
            <button 
              className="save-btn"
              onClick={handleSaveEvent}
            >
              <SaveIcon />
              Save
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="schedule-panel">
      <div className="schedule-header">
        <h3>Schedule</h3>
        <div className="header-actions">
          <AddIcon className="action-icon" onClick={handleCreateEvent} />
          <CloseIcon className="action-icon" onClick={onClose} />
        </div>
      </div>
      
      <div className="schedule-content">
        {view === "calendar" && renderCalendarView()}
        {(view === "create" || view === "edit") && renderEventForm()}
      </div>
    </div>
  );
};

export default SchedulePanel; 