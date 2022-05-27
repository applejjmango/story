import { useMediaQuery } from "react-responsive";
import Picture from "./Picture";
import Content from "./Content";
import Animation from "./Animation";
import AnimationForMobile from "./AnimationForMobile";
import classes from "./Body.module.css";

function Body() {
  const isMobile = useMediaQuery({
    query: "(max-width:670px)",
  });

  return (
    <main className={classes.container}>
      <Picture />
      {isMobile ? <AnimationForMobile /> : <Animation />}
      <Content />
    </main>
  );
}

export default Body;
