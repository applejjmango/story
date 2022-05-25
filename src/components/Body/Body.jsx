import Picture from "./Picture";
import Content from "./Content";
import Animation from "./Animation";
import classes from './Body.module.css';

function Body() {
    return (
        <main className={classes.container}>
            <Picture />
            <Animation />
            <Content />
        </main>
    )
}

export default Body;