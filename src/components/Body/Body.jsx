import Picture from "./Picture";
import Content from "./Content";
import Animation from "./Animation";
import AnimationForMobile from "./AnimationForMobile";
import classes from './Body.module.css';

function Body() {
    return (
        <main className={classes.container}>
            <Picture />
            {window.innerWidth > 670 ? <Animation /> : <AnimationForMobile />}
            <Content />
        </main>
    )
}

export default Body;