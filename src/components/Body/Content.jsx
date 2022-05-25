import { Link } from 'react-router-dom';
import classes from './Content.module.css';

function Content() {
    return(
        <div className={classes.container}>
            <div className={classes.slogan}>
                Let's create<br/>
                something<br/>
                new.
            </div>
            <button className={classes.info}><Link to="short-page" className={classes.sentence}>More information about Lotte Giants</Link></button>
        </div>
    )
}

export default Content;