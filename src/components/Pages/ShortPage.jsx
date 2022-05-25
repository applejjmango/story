import HeaderForShortPage from "../Short-page/Header/HeaderForShortPage";
import BodyForShortPage from "../Short-page/Body/BodyForShortPage";
import classes from "./ShortPage.module.css";

function ShortPage() {
  return (
    <div className={classes.container}>
      <HeaderForShortPage />
      <BodyForShortPage />
    </div>
  );
}

export default ShortPage;
