class DashBoard extends React.Component {
  render() {
    return (
      <div className="dashboard dashboard-one">
        <img
          className="image"
          src="./image/mamadou.jpg"
          alt="My image"
          width="100"
          height="100"
        />
        <p>DashBoard</p>
        <p>Widget</p>
        <p>Reviews</p>
        <p>Customers</p>
        <p>Online Analysis</p>
        <p>Settings</p>
      </div>
    );
  }
}

class Reviews extends React.Component {
  render() {
    return (
      <div className="box-one">
        <p>Reviews</p>
        <h1>1,281</h1>
      </div>
    );
  }
}

class AverageRating extends React.Component {
  render() {
    return (
      <div className="box-two">
        <p>Average Rating</p>
        <h1>4.6</h1>
      </div>
    );
  }
}

class SentimentAnalysis extends React.Component {
  render() {
    return (
      <div className="box-three">
        <p>Sentiment Analysis</p>
        <h1>960</h1>
        <h1>122</h1>
        <h1>321</h1>
      </div>
    );
  }
}

class WebsiteVisitors extends React.Component {
  render() {
    return (
      <div className="box-four">
        <p>Website Visitors</p>
        <h1>821</h1>
        <h2 className="nested"></h2>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>Footer</p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <DashBoard />
        <Reviews />
        <AverageRating />
        <SentimentAnalysis />
        <WebsiteVisitors />
      </div>
    );
  }
}

// REACT
ReactDOM.render(<App />, document.querySelector(".container"));
