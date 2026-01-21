import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  Route,
  Routes,
  Navigate,
  Outlet
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Friends from "./pages/friends/Friends";
import Community from "./pages/community/Community";
import Shop from "./pages/shop/Shop";
import Work from "./pages/work/Work";
import Analytics from "./pages/analytics/Analytics";
import Events from "./pages/events/Events";
import Gaming from "./pages/gaming/Gaming";
import Gallery from "./pages/gallery/Gallery";
import Videos from "./pages/videos/Videos";
import Messages from "./pages/messages/Messages";
import Sponsorships from "./pages/sponsorships/Sponsorships";
import Tutorials from "./pages/tutorials/Tutorials";
import Courses from "./pages/courses/Courses";
import "./style.scss";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {
  const {currentUser} = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);
  
  // Apply theme class to the body for full-page theming
  useEffect(() => {
    document.body.className = `theme-${darkMode ? "dark" : "light"}`;
  }, [darkMode]);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div className="app-layout">
          <div className="sidebar left-sidebar">
          <LeftBar />
          </div>
          <div className="main-content">
            <Outlet />
          </div>
          <div className="sidebar right-sidebar">
          <RightBar />
          </div>
        </div>
      </div>
    );
  };

  // Wrap authentication pages with the theme
  const AuthLayout = ({ children }) => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"} auth-layout`}>
        {children}
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/login" element={
        <AuthLayout>
          <Login />
        </AuthLayout>
      } />
      <Route path="/register" element={
        <AuthLayout>
          <Register />
        </AuthLayout>
      } />
      <Route path="/analytics" element={
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar />
          <div className="app-layout">
            <div className="sidebar left-sidebar">
              <LeftBar />
            </div>
            <div className="main-content">
              <Analytics />
            </div>
            <div className="sidebar right-sidebar">
              <RightBar />
            </div>
          </div>
        </div>
      } />
      <Route 
        path="/" 
        element={<Layout />}
      >
        <Route index element={<Home />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="friends" element={<Friends />} />
        <Route path="community" element={<Community />} />
        <Route path="shop" element={<Shop />} />
        <Route path="work" element={<Work />} />
        <Route path="events" element={<Events />} />
        <Route path="gaming" element={<Gaming />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="videos" element={<Videos />} />
        <Route path="messages" element={<Messages />} />
        <Route path="sponsorships" element={<Sponsorships />} />
        <Route path="tutorials" element={<Tutorials />} />
        <Route path="courses" element={<Courses />} />
      </Route>
    </Routes>
  );
}

export default App;
