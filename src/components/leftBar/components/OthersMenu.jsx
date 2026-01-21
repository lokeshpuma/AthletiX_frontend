import "../leftBar.scss";
import MenuItem from "./MenuItem";
import Fund from "../../../assets/13.png";
import Tutorials from "../../../assets/11.png";
import Courses from "../../../assets/12.png";

const OthersMenu = () => {
  return (
    <div className="menu">
      <span>Others</span>
      <MenuItem imgSrc={Fund} text="Sponserships" link="/sponsorships" />
      <MenuItem imgSrc={Tutorials} text="Tutorials" link="/tutorials" />
      <MenuItem imgSrc={Courses} text="Courses" link="/courses" />
    </div>
  );
};

export default OthersMenu; 