import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 3eHLa0Xz5KagCy42xXwF_tBAoAeco5i9V5_sRnjIdsw",
  },
});
