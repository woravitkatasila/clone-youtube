import './App.css';
import { Route,Switch } from "react-router-dom";
import DisplayVideo from "./pages/displayVideo"
import VideoList from "./pages/videoList"
import "./components/Fontawsomicons"
function App() {
  return (
    <Switch>
    <Route exact path="/" component={VideoList}></Route>
    <Route exact path="/display" component={DisplayVideo}></Route>
    </Switch>
  );
}

export default App;
