import classes from "./TextContainer.module.css";

function TextContainer(props) {
  return <div className={classes.textcontainer}>{props.children}</div>;
}

export default TextContainer;
