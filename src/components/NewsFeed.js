import CandleGraph from "./CandleGraph";
import "./NewsFeed.css"

function NewsFeed() {
  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <h1>$114,656</h1>
        <p>+$44.63 (+0.04%) Today</p>
        <div className="newsfeed__chart">
          <CandleGraph />
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
