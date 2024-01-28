import { useState } from "react";
import DropDownMenu from "./DropDown";
import "./DropDownMenu.css";
import "./Navbar.css";

function Navbar() {
  const [myClass, setMyClass] = useState("nav");
  const [myMenu, setMyMenu] = useState("./icon-menu.svg");
  const [displayStyle, setDisplayStyle] = useState("none");

  let menu1 = [
    { label: "Todo List", icon: "./icon-todo.svg" },
    { label: "Calendar", icon: "./icon-calendar.svg" },
    { label: "Reminders", icon: "./icon-reminders.svg" },
    { label: "Planning", icon: "./icon-planning.svg" },
  ];

  let menu2 = [{ label: "History" }, { label: "Our Team" }, { label: "Blog" }];

  const toggleMenu = () => {
    setMyClass(myClass === "nav" ? "nav active" : "nav");
    setDisplayStyle(displayStyle === "none" ? "block" : "none");
    setMyMenu(
      myMenu === "./icon-menu.svg" ? "./icon-close-menu.svg" : "./icon-menu.svg"
    );
  };

  return (
    <>
      <div className="overlay" style={{ display: displayStyle }}></div>

      <div className="navbar">
        <div className="menu">
          <img className="logo" src="./logo.svg" alt="logo" />
          <div className={myClass}>
            <DropDownMenu lists={menu1} title="Features" />
            <DropDownMenu lists={menu2} title="Company" />
            <button className="dropdown-toggle">Careers</button>
            <br />
            <button className="dropdown-toggle">About</button>

            <div className="btn">
              <button className="log-btn">Login</button>
              <button className="reg-btn">Register</button>
            </div>
          </div>
        </div>

        {/* <div>
          <button className="log-btn">Login</button>
          <button className="reg-btn">Register</button>
        </div> */}

        <img src={myMenu} className="menu-icon" onClick={toggleMenu} />
      </div>
    </>
  );
}

export default Navbar;
