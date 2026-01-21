import "../leftBar.scss";
import { Link } from "react-router-dom";

const MenuItem = ({ imgSrc, text, link }) => {
  return (
    <div className="item">
      <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
        <div className="item-content">
          <img src={imgSrc} alt="" />
          <span>{text}</span>
        </div>
      </Link>
    </div>
  );
};

export default MenuItem; 