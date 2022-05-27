import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import classes from "./Header.module.css";

function Header() {
    return (
        <header className={classes.container}>
            <HeaderLeft />
            <HeaderRight />
        </header>
    )
}

export default Header;