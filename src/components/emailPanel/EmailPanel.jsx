import { useState } from "react";
import "./emailPanel.scss";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import RefreshIcon from "@mui/icons-material/Refresh";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AddIcon from "@mui/icons-material/Add";

const EmailPanel = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("inbox");
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [composeMode, setComposeMode] = useState(false);
  const [newEmail, setNewEmail] = useState({
    to: "",
    subject: "",
    body: ""
  });

  // Mock email data
  const mockEmails = {
    inbox: [
      { 
        id: 1, 
        sender: "Team Manager", 
        subject: "Next Match Schedule", 
        preview: "Our team will be playing against Riverside Tigers next Saturday...",
        body: "Our team will be playing against Riverside Tigers next Saturday at 3 PM. Please make sure to arrive 1 hour before the match for warm-up. The match will be streamed live on our website. Looking forward to seeing you all there!",
        date: "10:30 AM", 
        unread: true,
        starred: false
      },
      { 
        id: 2, 
        sender: "Sports Federation", 
        subject: "Membership Renewal", 
        preview: "Your annual membership is due for renewal in the next...",
        body: "Your annual membership is due for renewal in the next 30 days. Please log in to your account to complete the renewal process. As a valued member, you'll continue to receive exclusive benefits including priority access to events, training sessions, and discounts on merchandise.",
        date: "Yesterday", 
        unread: false,
        starred: true
      },
      { 
        id: 3, 
        sender: "Coach Davis", 
        subject: "Training Session Feedback", 
        preview: "Based on your performance in the last session, I wanted to...",
        body: "Based on your performance in the last session, I wanted to share some feedback and suggestions for improvement. Your endurance has significantly improved, but we need to work on your technique for better results. Let's schedule a one-on-one session next week to focus on these areas.",
        date: "May 21", 
        unread: false,
        starred: false
      }
    ],
    sent: [
      { 
        id: 4, 
        recipient: "Coach Williams", 
        subject: "Equipment Request", 
        preview: "I wanted to inquire about getting new training gear...",
        body: "I wanted to inquire about getting new training gear for the upcoming season. The current ones are worn out and affecting my performance. Please let me know if there's a process to request new equipment or if I should purchase them myself.",
        date: "May 20",
        starred: false 
      }
    ],
    drafts: [
      { 
        id: 5, 
        recipient: "Tournament Organizer", 
        subject: "Registration Query", 
        preview: "I'm interested in participating in the upcoming tournament...",
        body: "I'm interested in participating in the upcoming tournament but couldn't find the registration deadline on the website. Could you please provide more information about the registration process, fees, and any other requirements?",
        date: "May 19",
        starred: false 
      }
    ]
  };

  const [emails, setEmails] = useState(mockEmails);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedEmail(null);
    setComposeMode(false);
  };

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
    
    // Mark as read if it was unread
    if (email.unread) {
      const updatedEmails = {...emails};
      const emailIndex = updatedEmails.inbox.findIndex(e => e.id === email.id);
      
      if (emailIndex !== -1) {
        updatedEmails.inbox[emailIndex].unread = false;
        setEmails(updatedEmails);
      }
    }
  };

  const handleCompose = () => {
    setSelectedEmail(null);
    setComposeMode(true);
  };

  const handleSendEmail = () => {
    const sentEmail = {
      id: Date.now(),
      recipient: newEmail.to,
      subject: newEmail.subject,
      preview: newEmail.body.substring(0, 50) + (newEmail.body.length > 50 ? "..." : ""),
      body: newEmail.body,
      date: "Just now",
      starred: false
    };

    setEmails(prev => ({
      ...prev,
      sent: [sentEmail, ...prev.sent]
    }));

    setNewEmail({ to: "", subject: "", body: "" });
    setComposeMode(false);
  };

  const handleStarEmail = (emailId) => {
    const updatedEmails = {...emails};
    
    // Check in inbox
    const inboxIndex = updatedEmails.inbox.findIndex(e => e.id === emailId);
    if (inboxIndex !== -1) {
      updatedEmails.inbox[inboxIndex].starred = !updatedEmails.inbox[inboxIndex].starred;
      setEmails(updatedEmails);
      return;
    }
    
    // Check in sent
    const sentIndex = updatedEmails.sent.findIndex(e => e.id === emailId);
    if (sentIndex !== -1) {
      updatedEmails.sent[sentIndex].starred = !updatedEmails.sent[sentIndex].starred;
      setEmails(updatedEmails);
      return;
    }
    
    // Check in drafts
    const draftsIndex = updatedEmails.drafts.findIndex(e => e.id === emailId);
    if (draftsIndex !== -1) {
      updatedEmails.drafts[draftsIndex].starred = !updatedEmails.drafts[draftsIndex].starred;
      setEmails(updatedEmails);
    }
  };

  const handleDeleteEmail = (emailId) => {
    const updatedEmails = {...emails};
    
    // Remove from the appropriate folder
    if (activeTab === "inbox") {
      updatedEmails.inbox = updatedEmails.inbox.filter(e => e.id !== emailId);
    } else if (activeTab === "sent") {
      updatedEmails.sent = updatedEmails.sent.filter(e => e.id !== emailId);
    } else if (activeTab === "drafts") {
      updatedEmails.drafts = updatedEmails.drafts.filter(e => e.id !== emailId);
    }
    
    setEmails(updatedEmails);
    setSelectedEmail(null);
  };

  if (!isOpen) return null;

  return (
    <div className="email-panel">
      <div className="email-header">
        <h3>Messages</h3>
        <div className="email-actions">
          <RefreshIcon className="action-icon" />
          <CloseIcon className="action-icon" onClick={onClose} />
        </div>
      </div>
      
      <div className="email-content">
        <div className="email-sidebar">
          <button className="compose-btn" onClick={handleCompose}>
            <AddIcon /> Compose
          </button>
          
          <div className="email-folders">
            <div 
              className={`folder ${activeTab === "inbox" ? "active" : ""}`} 
              onClick={() => handleTabChange("inbox")}
            >
              <span>Inbox</span>
              <span className="unread-count">{emails.inbox.filter(e => e.unread).length}</span>
            </div>
            <div 
              className={`folder ${activeTab === "sent" ? "active" : ""}`} 
              onClick={() => handleTabChange("sent")}
            >
              <span>Sent</span>
            </div>
            <div 
              className={`folder ${activeTab === "drafts" ? "active" : ""}`} 
              onClick={() => handleTabChange("drafts")}
            >
              <span>Drafts</span>
              <span className="count">{emails.drafts.length}</span>
            </div>
            <div className="folder">
              <span>Starred</span>
            </div>
          </div>
        </div>
        
        <div className="email-main">
          {!composeMode && !selectedEmail && (
            <div className="email-list">
              {emails[activeTab].length === 0 ? (
                <div className="empty-state">
                  <p>No emails in this folder</p>
                </div>
              ) : (
                emails[activeTab].map(email => (
                  <div 
                    key={email.id} 
                    className={`email-item ${email.unread ? "unread" : ""}`}
                    onClick={() => handleEmailClick(email)}
                  >
                    <div className="email-star" onClick={(e) => {
                      e.stopPropagation();
                      handleStarEmail(email.id);
                    }}>
                      {email.starred ? <StarIcon className="starred" /> : <StarBorderIcon />}
                    </div>
                    <div className="email-details">
                      <h4>{activeTab === "inbox" ? email.sender : email.recipient}</h4>
                      <div className="email-subject">{email.subject}</div>
                      <div className="email-preview">{email.preview}</div>
                    </div>
                    <div className="email-date">{email.date}</div>
                  </div>
                ))
              )}
            </div>
          )}
          
          {selectedEmail && (
            <div className="email-detail">
              <div className="email-detail-header">
                <div className="email-detail-subject">{selectedEmail.subject}</div>
                <div className="email-detail-actions">
                  <MarkEmailReadIcon className="action-icon" />
                  <DeleteIcon 
                    className="action-icon" 
                    onClick={() => handleDeleteEmail(selectedEmail.id)}
                  />
                </div>
              </div>
              
              <div className="email-detail-info">
                <div className="sender-info">
                  <strong>{activeTab === "inbox" ? "From: " : "To: "}</strong>
                  {activeTab === "inbox" ? selectedEmail.sender : selectedEmail.recipient}
                </div>
                <div className="email-date">{selectedEmail.date}</div>
              </div>
              
              <div className="email-detail-body">
                {selectedEmail.body}
              </div>
              
              {activeTab === "inbox" && (
                <div className="email-reply">
                  <textarea 
                    placeholder="Write your reply..." 
                    rows="3"
                  ></textarea>
                  <button className="reply-btn">
                    Reply <SendIcon />
                  </button>
                </div>
              )}
            </div>
          )}
          
          {composeMode && (
            <div className="compose-email">
              <h3>New Message</h3>
              
              <div className="compose-field">
                <label>To:</label>
                <input 
                  type="text" 
                  value={newEmail.to}
                  onChange={(e) => setNewEmail({...newEmail, to: e.target.value})}
                />
              </div>
              
              <div className="compose-field">
                <label>Subject:</label>
                <input 
                  type="text" 
                  value={newEmail.subject}
                  onChange={(e) => setNewEmail({...newEmail, subject: e.target.value})}
                />
              </div>
              
              <div className="compose-body">
                <textarea 
                  rows="10" 
                  value={newEmail.body}
                  onChange={(e) => setNewEmail({...newEmail, body: e.target.value})}
                ></textarea>
              </div>
              
              <div className="compose-actions">
                <button className="send-btn" onClick={handleSendEmail}>
                  Send <SendIcon />
                </button>
                <button className="discard-btn" onClick={() => setComposeMode(false)}>
                  Discard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailPanel; 