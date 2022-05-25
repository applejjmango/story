import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import classes from "./Header.module.css";

function Header() {
    return (
        <div className={classes.container}>
            <HeaderLeft />
            <HeaderRight />
        </div>
    )
}

export default Header;