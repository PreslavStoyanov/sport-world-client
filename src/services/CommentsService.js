import axios from "axios";
import {API_URLS} from "../config";

class CommentsService {
  listCommentsByMach() {
    return axios.get(API_URLS.LIST_MATCH_COMMENTS, {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    });
  }
}
export default new CommentsService();
