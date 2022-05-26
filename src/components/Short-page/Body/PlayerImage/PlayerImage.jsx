import "./PlayerImage.css";

function PlayerImage(props) {
  return (
    <div className="picturecontainer" data-index={props.number}>
      <img
        className={"picture__png"}
        src={`assets/images/${props.name}.png`}
      />
    </div>
  );
}

export default PlayerImage;
