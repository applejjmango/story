import "./TextContainer.css";

function TextContainer(props) {
  return <div className="textcontainer" data-index={props.number}>{props.children}</div>;
}

export default TextContainer;
