import "./leftBar.scss";
import MainMenu from "./components/MainMenu";
import ShortcutsMenu from "./components/ShortcutsMenu";
import OthersMenu from "./components/OthersMenu";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <MainMenu />
        <hr />
        <ShortcutsMenu />
        <hr />
        <OthersMenu />
      </div>
    </div>
  );
};

export default LeftBar;
