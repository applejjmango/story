import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import classes from "./Content.module.css";

function Content() {
  const isBigMonitor = useMediaQuery({
    query: "(min-width:1450px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width:850px)",
  });

  return (
    <div className={classes.container}>
      <div className={classes.slogan}>
        Let's create{isBigMonitor ? <br /> : " "}
        something{isBigMonitor ? <br /> : " "}
        new.
      </div>
      <button className={classes.info}>
        <Link to="short-page" className={classes.sentence}>
          More information {isTablet ? <br /> : null}about Lotte
          Giants
        </Link>
      </button>
    </div>
  );
}

export default Content;
