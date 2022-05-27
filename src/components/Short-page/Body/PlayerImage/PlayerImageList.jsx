import classes from "./PlayerImageList.module.css";
import PlayerImage from "./PlayerImage";

function PlayerImageList() {
  return (
    <div className={classes.picture__list}>
      <PlayerImage name={"지시완"} number={0}/>
      <PlayerImage name={"이대호"} number={1}/>
      <PlayerImage name={"정훈"} number={2}/>
      <PlayerImage name={"안치홍"} number={3}/>
      <PlayerImage name={"이학주"} number={4}/>
      <PlayerImage name={"한동희"} number={5}/>
      <PlayerImage name={"고승민"} number={6}/>
      <PlayerImage name={"DJ 피터스"} number={7}/>
      <PlayerImage name={"전준우"} number={8}/>
    </div>
  );
}

export default PlayerImageList;
