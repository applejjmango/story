import classes from "./AnimationForMobile.module.css";

function AnimationForMobile() {
  return (
    <div className={classes.container}>
        <button className={classes.base}><span>Ambition</span></button>
        <button className={classes.base}><span>Sacrifice</span></button>
        <button className={classes.base}><span>Fearless</span></button>
        <button className={classes.base}><span>Strategy</span></button>
    </div>
  );
}

export default AnimationForMobile;