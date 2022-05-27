import React from "react";
import classes from "./MenuIcon.module.css";

function MenuIcon() {
  return (
    <React.Fragment>
      <input type="checkbox" id="menuicon" className={classes.menuicon} />
      <label htmlFor="menuicon" className={classes.menuicon__label}>
          <span></span>
          <span></span>
          <span></span>
      </label>
    </React.Fragment>
  );
}

export default MenuIcon;
