import classes from "./PlayerContentList.module.css";
import 지시완 from "./EachPlayerContent/지시완";
import 이대호 from "./EachPlayerContent/이대호";
import 정훈 from "./EachPlayerContent/정훈";
import 안치홍 from "./EachPlayerContent/안치홍";
import 이학주 from "./EachPlayerContent/이학주";
import 한동희 from "./EachPlayerContent/한동희";
import 고승민 from "./EachPlayerContent/고승민";
import DJ from "./EachPlayerContent/DJ";
import 전준우 from "./EachPlayerContent/전준우";

function PlayerContentList() {
  return (
    <div className={classes.content__list}>
      <지시완 />
      <이대호 />
      <정훈 />
      <안치홍 />
      <이학주 />
      <한동희 />
      <고승민 />
      <DJ />
      <전준우 />
    </div>
  );
}

export default PlayerContentList;
