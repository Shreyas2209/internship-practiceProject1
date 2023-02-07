import classes from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick(!click);
  };

  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.logo}>LOGO</h1>
        <div className={classes["menu-icon"]} onClick={clickHandler}>
          <ion-icon name={click ? "close-outline" : "menu-outline"}></ion-icon>
        </div>
        <ul className={classes.links}>
          <li>
            <a href="/" className={classes.active}>Link 1</a>
          </li>
          <li>
            <a href="/" className={classes.active}>Link 2</a>
          </li>
          <li>
            <a href="/" className={classes.active}>Link 3</a>
          </li>
          <li>
            <a href="/" className={classes.active}>Link 4</a>
          </li>
          <li>
            <a href="/" className={classes.active}>Link 5</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
