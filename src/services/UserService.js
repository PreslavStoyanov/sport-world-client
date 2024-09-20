import axios from "axios";
import { API_URLS } from "../config";

class UserService {
  getUser() {
    return axios.get(API_URLS.GET_USER, {
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    });
  }
} export default new UserService;