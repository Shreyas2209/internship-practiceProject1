import classes from "./MobileHeader.module.css";
import { useState } from "react";

const MobileHeader = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick(!click);
  };

  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow(!show);
  };

  return (
    <>
      <header className={classes.header}>
        <div className={classes.container}>
          {/* logo */}
          <h1 className={classes.logo}>LOGO</h1>
          {/* icon */}
          <div className={classes["menu-icon"]} onClick={clickHandler}>
            <ion-icon
              name={click ? "close-outline" : "menu-outline"}
              onClick={showHandler}
            ></ion-icon>
          </div>
        </div>
        {/* links */}
        <div>
          <ul
            className={
              show ? classes["mobile-links"] : classes["links-inactive"]
            }
          >
            <li>
              <a href="/" className={classes.link}>
                Link 1
              </a>
            </li>
            <li>
              <a href="/" className={classes.link}>
                Link 2
              </a>
            </li>
            <li>
              <a href="/" className={classes.link}>
                Link 3
              </a>
            </li>
            <li>
              <a href="/" className={classes.link}>
                Link 4
              </a>
            </li>
            <li>
              <a href="/" className={classes.link}>
                Link 5
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default MobileHeader;
