import classes from "./FooterForShortPage.module.css";

function FooterForShortPage() {
  return (
    <footer className={classes.container}>
      <div className={classes.box}>
        <h3>Lotte Giants Homepage</h3>
        <p>
          Link: 
          <a
            href={"http://www.giantsclub.com/html"}
            target="_blank"
            className={classes.link}
          >
            http://www.giantsclub.com/html
          </a>
          /
        </p>
      </div>
      <div className={classes.box}>
        <h3>Credit</h3>
        <p>Dohyun Lee, Lotte Giants at 2022, May</p>
      </div>
    </footer>
  );
}

export default FooterForShortPage;
