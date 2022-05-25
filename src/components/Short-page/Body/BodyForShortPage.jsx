import PlayerImageList from "./PlayerImage/PlayerImageList";
import PlayerContentList from "./PlayerContent/PlayerContentList";

function BodyForShortPage() {
  (() => {
    const textElements = document.querySelectorAll(".textcontainer");
    const pictureElements = document.querySelectorAll(".picturecontainer");

    for (let i = 0; i < textElements.length; i++) {
      textElements[i].dataset.index = i;
      pictureElements[i].dataset.index = i;
    }
  })();

  return (
    <main>
      <PlayerImageList />
      <PlayerContentList />
    </main>
  );
}

export default BodyForShortPage;
