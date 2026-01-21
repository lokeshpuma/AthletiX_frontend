import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import { Link } from "react-router-dom";
import "../leftBar.scss";

const UserInfo = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="user">
      <Link to={`/profile/${currentUser.id}`} style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: "10px" }}>
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
      </Link>
    </div>
  );
};

export default UserInfo; 