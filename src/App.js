import { useEffect, useState } from "react";
import DesktopHeader from "./Components/DesktopHeader";
import MobileHeader from "./Components/MobileHeader";

const checkIsMobileView = () => {
  if (window.innerWidth <= 500) {
    return true;
  } else {
    return false;
  }
};

function App() {
  const [isMobileView, setIsMobileView] = useState(checkIsMobileView());
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobileView(checkIsMobileView());
    });
  }, []);

  return (
    <>
      {isMobileView && <MobileHeader></MobileHeader>}
      {!isMobileView && <DesktopHeader></DesktopHeader>}
    </>
  );
}

export default App;
