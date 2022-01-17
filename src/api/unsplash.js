import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID 3w2PHJn0rQZjrR2s5GzAw_CgxQ4-tfapOLYX2sX7g2E`
  }
})
