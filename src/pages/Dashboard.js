import "../components/App.css";
import NewsFeed from "../components/NewsFeed"
import Stats from "../components/Stats"

function Dashboard() {
  return (
    <>
      <div className="app__body">
          <div className="app__container">
            <NewsFeed />
            <Stats />
          </div>
        </div>
    </>
  );
}

export default Dashboard;
