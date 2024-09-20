import axios from "axios";
import { API_URLS, MATCHES_URL } from "../config";

class MatchService {
  listMatches() {
    return axios.get(API_URLS.LIST_PAST_MATCHES, {
      headers: {
        "Authorization": localStorage.getItem("Authorization")
      }
    });
  }

  getMatch(id) {
    return axios.get(MATCHES_URL + `/${id}`, {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    });
  }
}
export default new MatchService();