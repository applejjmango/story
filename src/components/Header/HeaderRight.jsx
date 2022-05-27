import { useMediaQuery } from "react-responsive";
import Youtube from "../Svg/Youtube";
import Instagram from "../Svg/Instagram";
import Facebook from "../Svg/Facebook";
import LeftArrow from "../Svg/LeftArrow";
import classes from "./HeaderRight.module.css";

function HeaderRight() {
  const isMobile = useMediaQuery({
    query: "(max-width:670px)",
  });

  return (
    <div className={classes.container}>
      {isMobile ? null : (
        <span className={classes.description}>Follow Giants</span>
      )}
      {isMobile ? null : <div className={classes.horizontal}></div>}
      <button className={classes.svgbutton}>
        <Youtube />
      </button>
      <button className={`${classes.svgbutton} ${classes.smallersvg}`}>
        <Instagram />
      </button>
      <button className={`${classes.svgbutton} ${classes.smallersvg}`}>
        <Facebook />
      </button>
      <div className={classes.vertical}></div>
      <button className={classes.arrow}>
        <LeftArrow />
      </button>
      <button className={classes.fill}>LET'S CHAT</button>
    </div>
  );
}

export default HeaderRight;
