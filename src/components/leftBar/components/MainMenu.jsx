import "../leftBar.scss";
import MenuItem from "./MenuItem";
import Friends from "../../../assets/1.png";
import Groups from "../../../assets/2.png";
import Market from "../../../assets/3.png";
import Watch from "../../../assets/4.png";
import Memories from "../../../assets/5.png";
import UserInfo from "./UserInfo";

const MainMenu = () => {
  return (
    <div className="menu">
      <UserInfo />
      <MenuItem imgSrc={Friends} text="Friends" link="/friends" />
      <MenuItem imgSrc={Groups} text="Community" link="/community" />
      <MenuItem imgSrc={Market} text="Shop" link="/shop" />
      <MenuItem imgSrc={Watch} text="Work" link="/work" />
      <MenuItem imgSrc={Memories} text="User Analytics" link="/analytics" />
    </div>
  );
};

export default MainMenu; 