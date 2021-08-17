import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import JoinWaitlist from "./JoinWaitlist/JoinWaitlist";
import Dummy from "./Dummy/Dummy";
import Navbar from "./mycomponent/Navbar" 
function App() {
  return (
    <>
    <Navbar/>
   
    <div className="app">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Dummy />
            </Route>
            <Route path="/join-waitlist">
              <JoinWaitlist />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
    
    </>
  );
}

export default App;
