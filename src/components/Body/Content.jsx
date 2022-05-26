import { Link } from "react-router-dom";
import classes from "./Content.module.css";

function Content() {
  return (
    <div className={classes.container}>
      <div className={classes.slogan}>
        Let's create{window.innerWidth > 1450 ? <br /> : " "}
        something{window.innerWidth > 1450 ? <br /> : " "}
        new.
      </div>
      <button className={classes.info}>
        <Link to="short-page" className={classes.sentence}>
          More information {window.innerWidth > 850 ? "" : <br />}about Lotte
          Giants
        </Link>
      </button>
    </div>
  );
}

export default Content;
