import React from "react";
import { Menu } from "semantic-ui-react";
import "./style.scss";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div >
      <Menu pointing secondary>
        <Menu.Item >
            <div className="title">Algorithm</div>
        </Menu.Item>
        <Menu.Item name="Rabinkarp"  as={NavLink} to="/rabinkarp"   />
      </Menu>
    </div>
  );
};

export default Navigation;
