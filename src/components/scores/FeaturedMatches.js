import React, {Component} from "react";
import {API_URLS} from "../../config";

let axios = require("axios").default;

export default class FeaturedMatches extends Component {
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
    return axios.get(API_URLS.LIST_FEATURED_MATCHES, {
      headers: {
        authority: "api.sofascore.com",
        "cache-control": "max-age=0",
        "sec-ch-ua": "^\\^",
      },
    });
  }

  render() {
    return (
      <div>
        <h2 className="header">Featured Matches</h2>
        <div className="match-box">
          {this.state.games &&
            this.state.games.map((game) => (
              <div className="match" ckey={game.id}>
                {game.tournament.name}
                <br />
                {game.homeTeam.shortName} {game.homeScore.current} -
                {game.awayScore.current} {game.awayTeam.shortName} <br />
                <br />
              </div>
            ))}
        </div>
      </div>
    );
  }
}
