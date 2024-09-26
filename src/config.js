const SERVER_HOSTNAME = 'http://localhost:8080';
export const COMMENTS_URL = `${SERVER_HOSTNAME}/comments`
export const MATCHES_URL = `${SERVER_HOSTNAME}/matches`
export const USERS_URL = `${SERVER_HOSTNAME}/users`

export const API_URLS = {
    REGISTER: `${SERVER_HOSTNAME}/register`,
    LOGIN: `${SERVER_HOSTNAME}/login`,
    GET_USER: `${USERS_URL}/current`,
    LIST_PAST_MATCHES: `${MATCHES_URL}?page=0&pageSize=40`,
    LIST_LIVE_FOOTBALL_MATCHES: `${MATCHES_URL}/football/live`,
    LIST_LIVE_BASKETBALL_MATCHES: `${MATCHES_URL}/basketball/live`,
    LIST_LIVE_TENNIS_MATCHES: `${MATCHES_URL}/tennis/live`,
    LIST_LIVE_VOLLEYBALL_MATCHES: `${MATCHES_URL}/volleyball/live`,
    LIST_MATCH_COMMENTS: `${COMMENTS_URL}/matches`,
    FORGOT_PASSWORD: `${SERVER_HOSTNAME}/forgotPassword`,
    RESET_PASSWORD: `${SERVER_HOSTNAME}/resetPassword`,
    CHANGE_PASSWORD: `${USERS_URL}/changePassword`,
};
