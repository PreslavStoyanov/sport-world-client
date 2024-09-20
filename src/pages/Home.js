import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import MatchService from "../services/MatchService";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
    };
  }

  componentDidMount() {
    MatchService.listMatches().then((response) => {
      this.setState({ matches: response.data });
    });
  }

  openMatch(matchId) {
    this.props.navigate(`/matches/` + matchId);
  }

  render() {
    return (
      <div className="matches-box">
        <h1>Past Matches</h1>
        <hr className="bar" />
        <br />
        {this.state.matches.map((match) => (
          <div
            className="match"
            key={match.id}
            onClick={() => this.openMatch(match.id)}
          >
            <div>{match.league.name}</div>
            <div>{match.title}</div>
            <div>{match.content}</div>
          </div>
        ))}
      </div>
    );
  }
}

const HomeWithNavigate = (props) => {
  const navigate = useNavigate();
  return <Home {...props} navigate={navigate} />;
};

export default HomeWithNavigate;
