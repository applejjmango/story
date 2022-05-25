import classes from "./PlayerImage.module.css";

function PlayerImage(props) {
  return (
    <div className={classes.picture__individual}>
      <img
        className={classes.picuure__png}
        src={`src/components/Short-page/PlayerImages/${props.name}.png`}
      />
    </div>
  );
}

export default PlayerImage;
