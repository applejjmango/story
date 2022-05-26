import HeaderForShortPage from "../Short-page/Header/HeaderForShortPage";
import BodyForShortPage from "../Short-page/Body/BodyForShortPage";
import FooterForShortPage from "../Short-page/Footer/FooterForShortPage";
import classes from "./ShortPage.module.css";
import { useState, useEffect } from "react";

function ShortPage() {
  const textElements = document.querySelectorAll(".textcontainer");
  const pictureElements = document.querySelectorAll(".picturecontainer");
  let currentItem;

  const [refresh, setRefresh] = useState(false);

  const refreshHandler = () => {
    setRefresh((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [refresh]);

  const scrollHandler = () => {
    let eachText;
    let boundingRect;

    for (let i = 0; i < textElements.length; i++) {
      eachText = textElements[i];
      boundingRect = eachText.getBoundingClientRect();

      if (
        boundingRect.top > window.innerHeight * 0.1 &&
        boundingRect.top < window.innerHeight * 0.8
      ) {
        if (currentItem) {
          currentItem.classList.remove("visible");
        }
        currentItem = pictureElements[eachText.dataset.index];
        currentItem.classList.add("visible");
      }
    }
  };

  return (
    <div className={classes.container} onLoad={refreshHandler}>
      <HeaderForShortPage />
      <BodyForShortPage />
      <FooterForShortPage />
    </div>
  );
}

export default ShortPage;
