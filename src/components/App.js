import "./App.css";
import "./Preset.css";
import Header from "./Header";
import NewsFeed from "./NewsFeed";
import Stats from "./Stats";

function App() {
  const API_TOKEN = "c3e87ciad3ief4eld7i0";

  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__container">
          <NewsFeed />
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;
