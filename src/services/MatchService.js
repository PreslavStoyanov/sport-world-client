import axios from "axios";
import {API_URLS} from "../config";

class MatchService {
  listMatches() {
    return axios.get(API_URLS.LIST_PAST_MATCHES, {
      headers: {
        "Authorization": localStorage.getItem("Authorization")
      }
    });
  }

  getMatch() {
    return axios.get(API_URLS.GET_MATCH, {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    });
  }
}
export default new MatchService();