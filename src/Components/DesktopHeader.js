import classes from "./DesktopHeader.module.css";

const DesktopHeader = () => {
  return (
    <>
      <header className={classes.header}>
        {/* logo */}
        <h1 className={classes.logo}>LOGO</h1>
        {/* links */}
        <ul className={classes.links}>
          <li>
            <a href="/">Link 1</a>
          </li>
          <li>
            <a href="/">Link 2</a>
          </li>
          <li>
            <a href="/">Link 3</a>
          </li>
          <li>
            <a href="/">Link 4</a>
          </li>
          <li>
            <a href="/">Link 5</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default DesktopHeader;
