import "../leftBar.scss";
import MenuItem from "./MenuItem";
import Events from "../../../assets/6.png";
import Gaming from "../../../assets/7.png";
import Gallery from "../../../assets/8.png";
import Videos from "../../../assets/9.png";
import Messages from "../../../assets/10.png";

const ShortcutsMenu = () => {
  return (
    <div className="menu">
      <span>Your shortcuts</span>
      <MenuItem imgSrc={Events} text="Events" link="/events" />
      <MenuItem imgSrc={Gaming} text="Gaming" link="/gaming" />
      <MenuItem imgSrc={Gallery} text="Gallery" link="/gallery" />
      <MenuItem imgSrc={Videos} text="Videos" link="/videos" />
      <MenuItem imgSrc={Messages} text="Messages" link="/messages" />
    </div>
  );
};

export default ShortcutsMenu; 