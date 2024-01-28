import { useState } from "react";
import "./DropDownMenu.css";

interface ListItem {
  label: string;
  icon?: string;
}

interface Props {
  lists: ListItem[];
  title: string;
}

const DropDownMenu = ({ lists, title }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isArrow, setIsArrow] = useState("./icon-arrow-down.svg");

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
    setIsArrow(
      isArrow === "./icon-arrow-down.svg"
        ? "./icon-arrow-up.svg"
        : "./icon-arrow-down.svg"
    );
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropDown}>
        {title}
        <span className="margin-left">
          <img src={isArrow}></img>
        </span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {lists.map((list, index) => (
            <a href="#" key={index}>
              <span>
                <img src={list.icon} className="icon-margin" />
              </span>
              {list.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
