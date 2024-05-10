import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/SideBar";
import Player from "./components/Player";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainSection />
      <Player />
    </div>
  );
}

export default App;
