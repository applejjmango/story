import classes from './Content.module.css';

function Content() {
    return(
        <div className={classes.container}>
            <div className={classes.slogan}>
                Let's create<br/>
                something<br/>
                new.
            </div>
            <button className={classes.info}>More information about Lotte Giants</button>
        </div>
    )
}

export default Content;