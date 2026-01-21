import "./rightBar.scss";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PeopleIcon from "@mui/icons-material/People";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <div className="title">
            <PeopleIcon className="icon" />
            <span>Teams & Athletes to Follow</span>
          </div>
          
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Athlete"
              />
              <div className="textInfo">
                <span>Michael Jordan</span>
                <p>Basketball Legend</p>
              </div>
              <SportsBasketballIcon className="sportIcon basketball" />
            </div>
            <div className="buttons">
              <button>follow</button>
            </div>
          </div>
          
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Team"
              />
              <div className="textInfo">
                <span>FC Barcelona</span>
                <p>Soccer Team</p>
              </div>
              <SportsSoccerIcon className="sportIcon soccer" />
            </div>
            <div className="buttons">
              <button>follow</button>
            </div>
          </div>
          
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/8224218/pexels-photo-8224218.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Athlete"
              />
              <div className="textInfo">
                <span>Serena Williams</span>
                <p>Tennis Champion</p>
              </div>
              <SportsTennisIcon className="sportIcon tennis" />
            </div>
            <div className="buttons">
              <button>follow</button>
            </div>
          </div>
          
          <div className="viewMore">
            <span>View More</span>
          </div>
        </div>
        
        <div className="item">
          <div className="title">
            <CalendarMonthIcon className="icon" />
            <span>Upcoming Sports Events</span>
          </div>
          
          <div className="event">
            <div className="eventIcon">
              <SportsSoccerIcon className="soccer" />
            </div>
            <div className="eventInfo">
              <h4>UEFA Champions League Finals</h4>
              <div className="eventDetails">
                <span className="date">June 10, 2023</span>
                <span className="time">8:00 PM</span>
                <span className="venue">Wembley Stadium</span>
              </div>
              <div className="teams">
                <span>Real Madrid vs Liverpool</span>
              </div>
            </div>
          </div>
          
          <div className="event">
            <div className="eventIcon">
              <SportsBasketballIcon className="basketball" />
            </div>
            <div className="eventInfo">
              <h4>NBA Playoffs - Game 7</h4>
              <div className="eventDetails">
                <span className="date">May 29, 2023</span>
                <span className="time">7:30 PM</span>
                <span className="venue">Madison Square Garden</span>
              </div>
              <div className="teams">
                <span>New York Knicks vs Los Angeles Lakers</span>
              </div>
            </div>
          </div>
          
          <div className="event">
            <div className="eventIcon">
              <DirectionsRunIcon className="running" />
            </div>
            <div className="eventInfo">
              <h4>City Marathon</h4>
              <div className="eventDetails">
                <span className="date">July 2, 2023</span>
                <span className="time">6:00 AM</span>
                <span className="venue">Central Park</span>
              </div>
              <div className="details">
                <span>Registration open until June 15</span>
              </div>
            </div>
          </div>
          
          <div className="viewMore">
            <span>View All Events</span>
          </div>
        </div>
        
        <div className="item">
          <div className="title">
            <NewspaperIcon className="icon" />
            <span>Latest Sports News</span>
          </div>
          
          <div className="newsItem">
            <img
              src="https://images.pexels.com/photos/2570139/pexels-photo-2570139.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Sports news"
            />
            <div className="newsContent">
              <h4>Transfer News: Star player signs record deal</h4>
              <span className="timestamp">2 hours ago</span>
              <p>The biggest transfer of the year has been confirmed as the star forward signs...</p>
            </div>
          </div>
          
          <div className="newsItem">
            <img
              src="https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Sports news"
            />
            <div className="newsContent">
              <h4>Team USA announces Olympic squad</h4>
              <span className="timestamp">Yesterday</span>
              <p>The roster for the upcoming Olympic Games has been finalized with some surprising selections...</p>
            </div>
          </div>
          
          <div className="newsItem">
            <img
              src="https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Sports news"
            />
            <div className="newsContent">
              <h4>Major League announces expansion plans</h4>
              <span className="timestamp">2 days ago</span>
              <p>Two new teams will be added to the league by 2025 as part of a strategic growth initiative...</p>
            </div>
          </div>
          
          <div className="viewMore">
            <span>Read More News</span>
          </div>
        </div>
        
        <div className="item">
          <div className="title">
            <TrendingUpIcon className="icon" />
            <span>Trending in Sports</span>
          </div>
          
          <div className="trendingTags">
            <div className="tag">
              <span>#WorldCup2023</span>
            </div>
            <div className="tag">
              <span>#NBAPlayoffs</span>
            </div>
            <div className="tag">
              <span>#OlympicTrials</span>
            </div>
            <div className="tag">
              <span>#Formula1</span>
            </div>
            <div className="tag">
              <span>#TennisOpen</span>
            </div>
          </div>
        </div>
        
        <div className="item">
          <div className="title">
            <FitnessCenterIcon className="icon" />
            <span>Featured Fitness Groups</span>
          </div>
          
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <div className="textInfo">
                <span>Morning Runners Club</span>
                <p>3.5k members</p>
              </div>
            </div>
            <button className="joinButton">Join</button>
          </div>
          
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <div className="textInfo">
                <span>Yoga & Wellness</span>
                <p>8.2k members</p>
              </div>
            </div>
            <button className="joinButton">Join</button>
          </div>
          
          <div className="viewMore">
            <span>Discover More Groups</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
