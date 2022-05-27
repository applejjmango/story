import { useMediaQuery } from "react-responsive";
import classes from "./Footer.module.css";

function Footer() {
    const isMobile = useMediaQuery({
        query: "(max-width:670px)"
    });

    return (
        <div className={classes.container}>
            <div>"It ain't over{isMobile && <br/>} till it's over"</div>
            <div>Copyright{isMobile && <br/>} Dohyun Lee 2022</div>
            <div>dohyun6425@naver.com</div>
        </div>
    );
}

export default Footer;