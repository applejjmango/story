import Youtube from "../Assets/Youtube";
import Instagram from "../Assets/Instagram";
import Facebook from "../Assets/Facebook";
import LeftArrow from "../Assets/LeftArrow";
import classes from "./HeaderRight.module.css";

function HeaderRight() {
    return (
        <div className={classes.container}>
            <span className={classes.description}>Follow Giants</span>
            <div className={classes.horizontal}></div>
            <button className={classes.svgbutton}><Youtube /></button>
            <button className={`${classes.svgbutton} ${classes.smallersvg}`}><Instagram /></button>
            <button className={`${classes.svgbutton} ${classes.smallersvg}`}><Facebook /></button>
            <div className={classes.vertical}></div>
            <button className={classes.arrow}><LeftArrow /></button>
            <button className={classes.fill}>LET'S CHAT</button>
        </div>
    )
}

export default HeaderRight;