import { useState } from "react";
import "./gaming.scss";
import SearchIcon from "@mui/icons-material/Search";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleIcon from "@mui/icons-material/People";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PersonIcon from "@mui/icons-material/Person";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import VerifiedIcon from "@mui/icons-material/Verified";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Gaming = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [favoriteGames, setFavoriteGames] = useState([1, 3]);
  
  const sportCategories = [
    { id: "all", name: "All Games", icon: <SportsEsportsIcon /> },
    { id: "basketball", name: "Basketball", icon: <SportsBasketballIcon /> },
    { id: "soccer", name: "Soccer", icon: <SportsSoccerIcon /> },
    { id: "tennis", name: "Tennis", icon: <SportsTennisIcon /> },
    { id: "football", name: "Football", icon: <SportsFootballIcon /> },
    { id: "hockey", name: "Hockey", icon: <SportsHockeyIcon /> }
  ];

  const sportsGames = [
    {
      id: 1,
      title: "Basketball Legends",
      category: "basketball",
      image: "https://images.unsplash.com/photo-1505666287802-931dc83a5dc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFza2V0YmFsbCUyMGdhbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      description: "Become a basketball legend in this fast-paced simulation game",
      players: 2187,
      difficulty: "Medium",
      rating: 4.8,
      isPopular: true
    },
    {
      id: 2,
      title: "Soccer Manager Pro",
      category: "soccer",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c29jY2VyJTIwZ2FtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      description: "Build your dream team and lead them to victory",
      players: 1560,
      difficulty: "Hard",
      rating: 4.6,
      isPopular: true
    },
    {
      id: 3,
      title: "Tennis Challenge",
      category: "tennis",
      image: "https://images.unsplash.com/photo-1595435742656-5006ef653e9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVubmlzJTIwZ2FtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      description: "Master your skills and become a tennis pro",
      players: 982,
      difficulty: "Medium",
      rating: 4.5,
      isPopular: false
    },
    {
      id: 4,
      title: "Football Dynasty",
      category: "football",
      image: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vdGJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      description: "Create a football dynasty and dominate the league",
      players: 1245,
      difficulty: "Hard",
      rating: 4.7,
      isPopular: true
    },
    {
      id: 5,
      title: "Hockey Shootout",
      category: "hockey",
      image: "https://images.unsplash.com/photo-1580891779445-a33f91e61f08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9ja2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description: "Test your shooting skills in this fast-paced hockey game",
      players: 756,
      difficulty: "Easy",
      rating: 4.3,
      isPopular: false
    },
    {
      id: 6,
      title: "Basketball 3-Point Contest",
      category: "basketball",
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFza2V0YmFsbCUyMHNob290aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description: "Show off your shooting skills in the ultimate 3-point contest",
      players: 892,
      difficulty: "Medium",
      rating: 4.4,
      isPopular: false
    }
  ];

  const fantasyTeams = [
    {
      id: 1,
      name: "Dream Team",
      sport: "basketball",
      members: 15,
      points: 1245,
      rank: 3,
      nextMatch: "vs. Legends (Tomorrow)"
    },
    {
      id: 2,
      name: "Soccer Stars",
      sport: "soccer",
      members: 11,
      points: 980,
      rank: 7,
      nextMatch: "vs. United (In 3 days)"
    }
  ];

  const tournaments = [
    {
      id: 1,
      title: "Basketball Summer League",
      category: "basketball",
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFza2V0YmFsbCUyMHRvdXJuYW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      participants: 32,
      startDate: "June 15, 2023",
      status: "Registration Open",
      prize: "$500"
    },
    {
      id: 2,
      title: "World Soccer Cup",
      category: "soccer",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29jY2VyJTIwdG91cm5hbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      participants: 24,
      startDate: "July 1, 2023",
      status: "Registration Open",
      prize: "$1000"
    },
    {
      id: 3,
      title: "Tennis Masters",
      category: "tennis",
      image: "https://images.unsplash.com/photo-1595435742656-5006ef653e9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVubmlzJTIwdG91cm5hbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      participants: 16,
      startDate: "June 22, 2023",
      status: "Registration Open",
      prize: "$750"
    }
  ];

  const leaderboards = [
    {
      id: 1,
      title: "Basketball Legends",
      game: "Basketball Legends",
      players: [
        { rank: 1, name: "JumpShot23", score: 2456, isUser: false },
        { rank: 2, name: "BasketballKing", score: 2320, isUser: false },
        { rank: 3, name: "You", score: 2180, isUser: true },
        { rank: 4, name: "HoopsMaster", score: 2050, isUser: false },
        { rank: 5, name: "SlamDunker", score: 1920, isUser: false }
      ]
    },
    {
      id: 2,
      title: "Soccer Manager Pro",
      game: "Soccer Manager Pro",
      players: [
        { rank: 1, name: "SoccerBoss", score: 3150, isUser: false },
        { rank: 2, name: "TopManager", score: 3010, isUser: false },
        { rank: 3, name: "GoalMachine", score: 2890, isUser: false },
        { rank: 4, name: "You", score: 2745, isUser: true },
        { rank: 5, name: "TacticalGenius", score: 2660, isUser: false }
      ]
    }
  ];

  const recentWins = [
    {
      id: 1,
      game: "Basketball Legends",
      score: "98-92",
      opponent: "JumpShot23",
      date: "2 hours ago"
    },
    {
      id: 2,
      game: "Tennis Challenge",
      score: "6-4, 7-5",
      opponent: "TennisPro",
      date: "Yesterday"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "New Football Game Release",
      date: "June 10, 2023",
      type: "Game Release"
    },
    {
      id: 2,
      title: "Basketball Tournament Registration",
      date: "June 5, 2023",
      type: "Tournament"
    },
    {
      id: 3,
      title: "Soccer World Cup Qualifiers",
      date: "June 15, 2023",
      type: "Competition"
    }
  ];

  const toggleFavorite = (gameId) => {
    if (favoriteGames.includes(gameId)) {
      setFavoriteGames(favoriteGames.filter(id => id !== gameId));
    } else {
      setFavoriteGames([...favoriteGames, gameId]);
    }
  };

  const filterGames = () => {
    let filteredGames = sportsGames;
    
    if (activeTab !== "all") {
      filteredGames = filteredGames.filter(game => game.category === activeTab);
    }
    
    if (searchQuery) {
      filteredGames = filteredGames.filter(game => 
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filteredGames;
  };

  const getCategoryIcon = (categoryName) => {
    const category = sportCategories.find(cat => cat.id === categoryName);
    return category ? category.icon : <SportsEsportsIcon />;
  };

  return (
    <div className="gaming">
      <div className="container">
        <div className="gaming-header">
          <h1 className="title">Sports Gaming Arena</h1>
          <div className="header-actions">
            <div className="search-box">
              <SearchIcon />
              <input 
                type="text" 
                placeholder="Search games, tournaments, teams..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="notification-btn">
              <NotificationsIcon />
            </button>
          </div>
        </div>

        <div className="gaming-categories">
          {sportCategories.map(category => (
            <button 
              key={category.id}
              className={`category-btn ${activeTab === category.id ? 'active' : ''}`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className="gaming-content">
          <div className="gaming-main">
            <div className="games-section">
              <div className="section-header">
                <h2>Popular Games</h2>
                <button className="view-all-btn">View All Games</button>
              </div>
              <div className="games-grid">
                {filterGames().map(game => (
                  <div key={game.id} className="game-card">
                    <div className="game-image">
                      <img src={game.image} alt={game.title} />
                      {game.isPopular && (
                        <div className="popular-badge">
                          <WhatshotIcon /> Popular
                        </div>
                      )}
                      <div className="game-actions">
                        <button className="action-btn play">
                          <PlayArrowIcon /> Play Now
                        </button>
                        <button 
                          className={`action-btn favorite ${favoriteGames.includes(game.id) ? 'active' : ''}`}
                          onClick={() => toggleFavorite(game.id)}
                        >
                          {favoriteGames.includes(game.id) ? <StarIcon /> : <StarBorderIcon />}
                        </button>
                      </div>
                    </div>
                    <div className="game-info">
                      <div className="game-category">
                        {getCategoryIcon(game.category)}
                        <span>{game.category.charAt(0).toUpperCase() + game.category.slice(1)}</span>
                      </div>
                      <h3 className="game-title">{game.title}</h3>
                      <p className="game-description">{game.description}</p>
                      <div className="game-stats">
                        <div className="stat">
                          <PeopleIcon />
                          <span>{game.players} Players</span>
                        </div>
                        <div className="stat">
                          <StarIcon />
                          <span>{game.rating}</span>
                        </div>
                        <div className="stat difficulty">
                          <span className={`difficulty-level ${game.difficulty.toLowerCase()}`}>
                            {game.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="tournaments-section">
              <div className="section-header">
                <h2>Upcoming Tournaments</h2>
                <button className="view-all-btn">View All Tournaments</button>
              </div>
              <div className="tournaments-grid">
                {tournaments.map(tournament => (
                  <div key={tournament.id} className="tournament-card">
                    <div className="tournament-image">
                      <img src={tournament.image} alt={tournament.title} />
                      <div className="tournament-status">
                        {tournament.status}
                      </div>
                    </div>
                    <div className="tournament-info">
                      <div className="tournament-category">
                        {getCategoryIcon(tournament.category)}
                        <span>{tournament.category.charAt(0).toUpperCase() + tournament.category.slice(1)}</span>
                      </div>
                      <h3 className="tournament-title">{tournament.title}</h3>
                      <div className="tournament-details">
                        <div className="detail">
                          <PeopleIcon />
                          <span>{tournament.participants} Participants</span>
                        </div>
                        <div className="detail">
                          <AccessTimeIcon />
                          <span>Starts: {tournament.startDate}</span>
                        </div>
                        <div className="detail">
                          <EmojiEventsIcon />
                          <span>Prize: {tournament.prize}</span>
                        </div>
                      </div>
                      <button className="register-btn">Register Now</button>
                    </div>
                  </div>
                ))}
                <div className="tournament-card create-tournament">
                  <div className="create-content">
                    <div className="create-icon">
                      <AddCircleIcon />
                    </div>
                    <h3>Create Your Tournament</h3>
                    <p>Invite friends and organize your own competition</p>
                    <button className="create-btn">Create Tournament</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="fantasy-section">
              <div className="section-header">
                <h2>Your Fantasy Teams</h2>
                <button className="create-team-btn">
                  <AddCircleIcon /> Create New Team
                </button>
              </div>
              <div className="fantasy-teams">
                {fantasyTeams.map(team => (
                  <div key={team.id} className="team-card">
                    <div className="team-header">
                      <div className="team-name">
                        {getCategoryIcon(team.sport)}
                        <h3>{team.name}</h3>
                      </div>
                      <div className="team-rank">
                        Rank: #{team.rank}
                      </div>
                    </div>
                    <div className="team-stats">
                      <div className="stat">
                        <PeopleIcon />
                        <span>{team.members} Members</span>
                      </div>
                      <div className="stat">
                        <StarIcon />
                        <span>{team.points} Points</span>
                      </div>
                    </div>
                    <div className="team-match">
                      <span>Next: {team.nextMatch}</span>
                    </div>
                    <div className="team-actions">
                      <button className="team-btn manage">Manage Team</button>
                      <button className="team-btn invite">
                        <GroupAddIcon /> Invite
                      </button>
                    </div>
                  </div>
                ))}
                <div className="team-card create-team">
                  <div className="create-content">
                    <div className="create-icon">
                      <AddCircleIcon />
                    </div>
                    <h3>Create Fantasy Team</h3>
                    <p>Build your dream team and compete with friends</p>
                    <button className="create-btn">Create Team</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="gaming-sidebar">
            <div className="leaderboard-section">
              <h3>Leaderboards</h3>
              {leaderboards.map(leaderboard => (
                <div key={leaderboard.id} className="leaderboard-card">
                  <div className="leaderboard-header">
                    <h4>{leaderboard.title}</h4>
                    <LeaderboardIcon />
                  </div>
                  <div className="leaderboard-list">
                    {leaderboard.players.map(player => (
                      <div 
                        key={player.rank} 
                        className={`leaderboard-item ${player.isUser ? 'is-user' : ''}`}
                      >
                        <div className="player-rank">#{player.rank}</div>
                        <div className="player-name">
                          {player.isUser ? <PersonIcon className="user-icon" /> : null}
                          {player.name}
                          {player.rank === 1 && <EmojiEventsIcon className="crown-icon" />}
                        </div>
                        <div className="player-score">{player.score}</div>
                      </div>
                    ))}
                  </div>
                  <button className="view-full-btn">View Full Leaderboard</button>
                </div>
              ))}
            </div>

            <div className="wins-section">
              <h3>Your Recent Wins</h3>
              <div className="wins-list">
                {recentWins.map(win => (
                  <div key={win.id} className="win-item">
                    <div className="win-icon">
                      <CheckCircleIcon />
                    </div>
                    <div className="win-details">
                      <h4>{win.game}</h4>
                      <p className="win-score">Won {win.score} vs {win.opponent}</p>
                      <p className="win-date">{win.date}</p>
                    </div>
                    <div className="win-actions">
                      <button className="win-btn share">
                        <ShareIcon /> Share
                      </button>
                      <button className="win-btn chat">
                        <ChatIcon />
                      </button>
                    </div>
                  </div>
                ))}
                <button className="view-all-wins-btn">View All Wins</button>
              </div>
            </div>

            <div className="events-section">
              <h3>Upcoming Gaming Events</h3>
              <div className="events-list">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="event-item">
                    <div className="event-type">
                      {event.type === "Game Release" ? <SportsEsportsIcon /> : 
                       event.type === "Tournament" ? <EmojiEventsIcon /> : <PeopleIcon />}
                    </div>
                    <div className="event-info">
                      <h4>{event.title}</h4>
                      <p className="event-date">{event.date}</p>
                      <span className="event-type-badge">{event.type}</span>
                    </div>
                    <button className="remind-btn">
                      <NotificationsIcon />
                    </button>
                  </div>
                ))}
                <button className="view-calendar-btn">View Full Calendar</button>
              </div>
            </div>

            <div className="suggested-games">
              <h3>Suggested For You</h3>
              <div className="suggested-list">
                <div className="suggested-item">
                  <div className="suggested-icon">
                    <SportsBasketballIcon />
                  </div>
                  <div className="suggested-info">
                    <h4>NBA 2K24</h4>
                    <p>Based on your basketball interest</p>
                  </div>
                </div>
                <div className="suggested-item">
                  <div className="suggested-icon">
                    <SportsSoccerIcon />
                  </div>
                  <div className="suggested-info">
                    <h4>FIFA 23</h4>
                    <p>Most popular soccer game</p>
                  </div>
                </div>
                <div className="suggested-item">
                  <div className="suggested-icon">
                    <SportsFootballIcon />
                  </div>
                  <div className="suggested-info">
                    <h4>Madden NFL 23</h4>
                    <p>Try the latest football simulation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gaming; 