import classes from "./HeaderForShortPage.module.css";

function HeaderForShortPage() {
  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <h1>Welcome to</h1>
        <h1>Lotte Giant's</h1>
        <h1>Starting 9</h1>
      </div>
      <div className={classes.content}>
        Lotte Giants is a pro baseball team in Korea. <br />
        The team is based in Busan city. <br />
        It is one of the oldest baseball team in Korea, and has solid fandom.{" "}
        <br />
        Despite of its old history, Lotte only won a championship for two times.
        (1984, 1992) <br />
        Many fans are looking forward to Lotte's championship this year <br />
        because 2022 is the last year of the team's legendery hitter, DaeHo Lee.{" "}
        <br />
        Let's look into Lotte Giant's starting 9 players of 2022! <br />
      </div>
    </header>
  );
}

export default HeaderForShortPage;
