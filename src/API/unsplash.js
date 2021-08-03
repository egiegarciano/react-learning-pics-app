import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID A5khfSMeRkuHVFAKUlKy9_dQIW_FZxgkW8heoyMtQF4",
  },
});
