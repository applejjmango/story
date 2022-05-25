import "./PlayerImage.css";

function PlayerImage(props) {
  return (
    <div className="picturecontainer">
      <img
        className={"picture__png"}
        src={`src/components/Short-page/PlayerImages/${props.name}.png`}
      />
    </div>
  );
}

export default PlayerImage;
