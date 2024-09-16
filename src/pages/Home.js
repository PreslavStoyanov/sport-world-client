import React from "react";
import MatchService from "../services/MatchService";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
    };
  }

  componentDidMount() {
    MatchService.listMaches().then((response) => {
      this.setState({ matches: response.data });
    });
  }

  openMatch(props) {
    window.location.href = "./matches/" + props;
  }
  
  render() {
    return (
      <div className="matches-box">
        <h1>Past Matches</h1>
        <hr className="bar"/>
        <br />
        {this.state.matches.map((match) => (
          <div className="match" onClick={() => this.openMatch(match.id)}>
            <div key={match.id}>{match.league.name}</div>
            <div key={match.id}>{match.title}</div>
            <div key={match.id}>{match.content}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
