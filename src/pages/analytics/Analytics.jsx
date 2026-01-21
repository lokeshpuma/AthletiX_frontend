import React from "react";
import "./analytics.scss";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from "recharts";

// Sample data - in a real app, this would come from your API/backend
const dailyActiveUsers = [
  { name: "Mon", users: 4000 },
  { name: "Tue", users: 3000 },
  { name: "Wed", users: 5000 },
  { name: "Thu", users: 4500 },
  { name: "Fri", users: 6000 },
  { name: "Sat", users: 7000 },
  { name: "Sun", users: 6500 },
];

const monthlyActiveUsers = [
  { name: "Jan", users: 45000 },
  { name: "Feb", users: 52000 },
  { name: "Mar", users: 49000 },
  { name: "Apr", users: 63000 },
  { name: "May", users: 68000 },
  { name: "Jun", users: 72000 },
];

const userInteractions = [
  { name: "Likes", count: 85000 },
  { name: "Comments", count: 42000 },
  { name: "Shares", count: 29000 },
  { name: "Avg Time (min)", count: 25 },
];

const popularSports = [
  { name: "Football", value: 35 },
  { name: "Basketball", value: 25 },
  { name: "Tennis", value: 15 },
  { name: "Cricket", value: 10 },
  { name: "Baseball", value: 8 },
  { name: "Others", value: 7 },
];

const userDemographics = [
  { name: "18-24", male: 20, female: 15 },
  { name: "25-34", male: 30, female: 25 },
  { name: "35-44", male: 15, female: 10 },
  { name: "45+", male: 5, female: 5 },
];

const retentionRate = [
  { name: "Week 1", rate: 100 },
  { name: "Week 2", rate: 85 },
  { name: "Week 3", rate: 75 },
  { name: "Week 4", rate: 70 },
  { name: "Week 8", rate: 65 },
  { name: "Week 12", rate: 60 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const Analytics = () => {
  return (
    <div className="analytics">
      <div className="container">
        <h1 className="title">Sports Social Media Analytics Dashboard</h1>
        
        <div className="content">
          <h2>User Activity</h2>
          <div className="chart-container">
            <h3>Daily Active Users</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dailyActiveUsers}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="chart-container">
            <h3>Monthly Active Users</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyActiveUsers}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="chart-container">
            <h3>User Interactions</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userInteractions}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#0088FE" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="chart-container">
            <h3>Popular Sports</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={popularSports}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {popularSports.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="chart-container">
            <h3>User Demographics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userDemographics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="male" fill="#0088FE" />
                <Bar dataKey="female" fill="#FF8042" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="chart-container">
            <h3>User Retention Rate</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={retentionRate}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="rate" stroke="#FF8042" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="insights-container">
            <h2>Key Insights</h2>
            <div className="insight-card">
              <h3>Most Popular Content</h3>
              <ul>
                <li>Football match highlights (125K views)</li>
                <li>Basketball training tips (98K views)</li>
                <li>Tennis tournament results (76K views)</li>
              </ul>
            </div>
            
            <div className="insight-card">
              <h3>Social Media Referrals</h3>
              <p>42% of new users come from existing user shares on other platforms</p>
            </div>
            
            <div className="insight-card">
              <h3>Competition Engagement</h3>
              <p>68% of active users participate in at least one competition or leaderboard</p>
            </div>
            
            <div className="insight-card">
              <h3>Content Personalization</h3>
              <p>Users who receive personalized content spend 35% more time in the app</p>
            </div>
          </div>
          
          <div className="recommendations-container">
            <h2>Recommendations to Improve Engagement</h2>
            <ol>
              <li>Implement weekly challenges with rewards to increase user participation</li>
              <li>Add more personalized content based on user preferences and behavior</li>
              <li>Create push notifications for live sports events and important updates</li>
              <li>Introduce a referral program to incentivize users to invite friends</li>
              <li>Develop more interactive features like polls and predictions for upcoming games</li>
            </ol>
          </div>
          
          <div className="privacy-notice">
            <h3>Privacy Notice</h3>
            <p>All data is collected in accordance with our privacy policy. User data is anonymized and aggregated for analytical purposes only. Users can opt out of data collection in their profile settings.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;