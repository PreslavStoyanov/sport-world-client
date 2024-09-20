import axios from "axios";
import { API_URLS } from "../config";

class CommentsService {
  listCommentsByMach(matchId) {
    return axios.get(API_URLS.LIST_MATCH_COMMENTS + `/${matchId}`, {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    });
  }
}
export default new CommentsService();
