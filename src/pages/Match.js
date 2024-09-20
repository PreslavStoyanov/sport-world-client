import React from "react";
import { useParams } from "react-router-dom";
import MatchService from "../services/MatchService";

class Match extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      match: "",
      league: "",
    };
  }

  componentDidMount() {
    this.fetchMatchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.matchId !== prevProps.matchId) {
      this.fetchMatchData();
    }
  }

  fetchMatchData() {
    const { matchId } = this.props;  // Get matchId from props
    MatchService.getMatch(matchId).then((response) => {
      this.setState({
        match: response.data,
        league: response.data.league,
      });
    });
  }

  render() {
    return (
      <div>
        <div className="header">
          <div><h2>{this.state.match.title}</h2></div>
          <hr className="bar" />
          <div><h3>{this.state.league.name}</h3></div>
          <div>{this.state.match.content}</div>
        </div>
      </div>
    );
  }
}

const MatchWithParams = () => {
  const { id } = useParams();
  return <Match matchId={id} />;
};

export default MatchWithParams;
