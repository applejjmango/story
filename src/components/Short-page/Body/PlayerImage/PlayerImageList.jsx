import classes from "./PlayerImageList.module.css";
import PlayerImage from "./PlayerImage";

function PlayerImageList() {
  return (
    <div className={classes.picture__list}>
      <PlayerImage name={"지시완"} />
      <PlayerImage name={"이대호"} />
      <PlayerImage name={"정훈"} />
      <PlayerImage name={"안치홍"} />
      <PlayerImage name={"이학주"} />
      <PlayerImage name={"한동희"} />
      <PlayerImage name={"고승민"} />
      <PlayerImage name={"DJ 피터스"} />
      <PlayerImage name={"전준우"} />
    </div>
  );
}

export default PlayerImageList;
