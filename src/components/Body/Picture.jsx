import React from "react";
import lotte from "/assets/images/lotte_logo.png"
import classes from './Picture.module.css';

function Picture() {
  return (
    <React.Fragment>
      <img src={lotte} className={classes.logo}/>
    </React.Fragment>
  );
}

export default Picture;