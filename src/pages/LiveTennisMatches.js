import React, { Component } from "react";
import { API_URLS } from "../config";

let axios = require("axios").default;

export default class LiveFootballMatches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
  }

  componentDidMount() {
    this.getLiveGames().then((response) => {
      this.setState({
        games: response.data.events,
      });
    });
  }

  getLiveGames() {
    return axios.get(API_URLS.LIST_LIVE_TENNIS_MATCHES, {
      headers: {
        "Authorization": localStorage.getItem("Authorization")
      },
    });
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <h1 className="header">Live Matches</h1>
        <hr className="live-match-bar" />
        <br />
        <div className="match-box">
            {this.state.games && this.state.games.length > 0 ? (
            this.state.games.map((game, ind) => (
              <div className="live-match" ckey={game.id}>
                {game.tournament.name} {/*- {game.tournament.category.name}*/} <br />
                {game.homeScore.point} | {game.homeScore.period3 || game.homeScore.period2 || game.homeScore.period1} | {game.homeScore.current} | {game.homeTeam.shortName}<br />
                {game.awayScore.point} | {game.awayScore.period3 || game.awayScore.period2 || game.awayScore.period1} | {game.awayScore.current} | {game.awayTeam.shortName}<br />
              </div>
            ))
              ) : (
              <div className="no-events">There are no live events at the moment</div>
              )}
        </div>
      </div>
    );
  }
}
