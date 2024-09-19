import React, {Component} from "react";
import {API_URLS} from "../../config";

let axios = require("axios").default;

export default class LiveMatches extends Component {
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
      return axios.get(API_URLS.LIST_LIVE_MATCHES, {
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
          {this.state.games &&
            this.state.games.map((game, ind) => (
                <div className="live-match" ckey={game.id}>
                    {game.tournament.name} {/*- {game.tournament.category.name}*/} <br/>
                    {game.homeTeam.shortName} VS {game.awayTeam.shortName} <br/>
                    {game.homeScore.current}-{game.awayScore.current}
                </div>
            ))}
        </div>
      </div>
    );
  }
}
