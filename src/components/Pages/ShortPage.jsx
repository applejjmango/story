import HeaderForShortPage from "../Short-page/Header/HeaderForShortPage";
import BodyForShortPage from "../Short-page/Body/BodyForShortPage";
import FooterForShortPage from "../Short-page/Footer/FooterForShortPage";
import classes from "./ShortPage.module.css";
import { useState, useEffect } from "react";

function ShortPage() {
  const textElements = document.querySelectorAll(".textcontainer");
  const pictureElements = document.querySelectorAll(".picturecontainer");
  let currentItem, ioIndex;

  const [refresh, setRefresh] = useState(false);

  const refreshHandler = () => {
    setRefresh((prev) => !prev);
    setTimeout(() => {
      scrollTo(0, 0);
    }, 100);
  };

  const io = new IntersectionObserver((entries, _) => {
    ioIndex = entries[0].target.dataset.index * 1;
  });

  for (let i = 0; i < textElements.length; i++) {
    io.observe(textElements.item(i));
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [refresh]);

  useEffect(() => {
    currentItem = document.querySelector(".picturecontainer");
    currentItem.classList.add("visible");
  }, []);

  const scrollHandler = () => {
    let eachText;
    let boundingRect;

    for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
      if (ioIndex - 1 < 0) continue;
      if (i > 8) continue;
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
