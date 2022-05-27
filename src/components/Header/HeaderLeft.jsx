import MenuIcon from "../UI/MenuIcon";
import classes from "./HeaderLeft.module.css";


function HeaderLeft() {
    return(
        <div className={classes.container}>
            <span className={classes.initial}>G</span>
            <MenuIcon />
            <span className={classes.menu}>MENU</span>
        </div>
    )
}

export default HeaderLeft;