import axios from "axios";
const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [1] is the IPV6 localhost address.
    window.location.hostname === "[::1]" ||
    //127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5] |2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

const API_URL = isLocalhost
  ? `${process.env.REACT_APP_HOST}`
  : "https://supablogapi.supatechie.ga/api/";

export const Axios = axios.create({
  baseURL: API_URL,
});
