import "./assets/custom.scss";
import Logos from "./components/Logos";
import Navbar from "./components/Navbar";

import Description from "./components/Description";
import Invitation from "./components/Invitation";
import Footer from "./components/Footer";
import Main from "./components/Main";
import WebContainer from "./components/WebContainer";

function App() {
  return (
    <>
      <div className="container-fluid p-3">
        <Navbar />
        <Main />
        <Logos />
        <WebContainer />
      </div>
      <Description />
      <Invitation />
      <Footer />
    </>
  );
}

export default App;
