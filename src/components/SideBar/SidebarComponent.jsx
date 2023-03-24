import React, { useState } from "react";
import logo1 from "../pages/Images/logo1.jpg";
import LogoutButton from "../Auth/Logout.js";
import { useAuth0 } from "@auth0/auth0-react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
} from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import "./style.css";
import { NavLink } from "react-router-dom";


export const SidebarComponent = ({ children }) => {
  const { user } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  // creating a menuItem array to all The Elements in the sideBar to make it easy and shorter
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/aboutMe",
      name: "AboutMe",
      icon: <FaUserAlt />,
    },

    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      name: "Games",
      path: "/games",
      icon: <FaIcons.FaGamepad />,
    },
    {
      name: "Movies",
      path: "/movies",
      icon: <FaIcons.FaTv />,
    },
  ];
  return (
    <div className="sideBar-Container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <div style={{ display: isOpen ? "block" : "none" }} className="logo">
            <img src={logo1} alt="logo" width="100" height="100"></img>
          </div>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <div className="user-image">
          <img
            src={user.picture}
            class="rounded-circle"
            alt="logo"
            width="50"
            height="50"
          ></img>
          <p>{user.name}</p>
        </div>
        <div className="logOut-container">
          <LogoutButton />
        </div>
      </div>
      <div className="main-Container">
        <main>{children}</main>
      </div>
    </div>
  );
};
