import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Dashboard from "../pages/Dashboard";
import Account from "../pages/Account";
import Portfolio from "../pages/Portfolio";
import { GlobalProvider } from "../context/GlobalContext";
import "./App.css";
import "./Preset.css";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="app">
          <div className="app__header">
            <Header />
          </div>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/acc" component={Account} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
