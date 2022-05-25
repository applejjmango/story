import classes from "./Animation.module.css";

function Animation() {
  return (
    <div className={classes.container}>
      <div className={classes.basecontainer}>
        <button className={classes.base}><span>Ambition</span></button>
        <button className={classes.base}><span>Sacrifice</span></button>
        <button className={classes.base}><span>Fearless</span></button>
        <button className={classes.base}><span>Strategy</span></button>
      </div>
    </div>
  );
}

export default Animation;
