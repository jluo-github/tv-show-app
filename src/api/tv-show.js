import axios from "axios";
import { BACKDROP_BASE_URL, baseUrl } from "../config";
import { FAKE_POPULARS } from "./fake_data";
// const baseUrl = process.env.REACT_APP_BASE_URL;
// const baseUrl = BACKDROP_BASE_URL

const apiKey = process.env.REACT_APP_API_KEY;
//
const apiToken = process.env.REACT_APP_API_TOKEN;

export class TVShowAPI {
  static async fetchPopular() {
    // const response = await axios.get(
    //   `${baseUrl}tv/popular?api_key=${apiKey}&language=en-US&page=1`
    // );
    // console.log(response.data.results);
    // return response.data.results;
    //
    //
    // const options = {
    //   method: "GET",
    //   url: `${baseUrl}tv/popular`,
    //   params: { language: "en-US", page: "1" },
    //   headers: {
    //     accept: "application/json",
    //     Authorization: `Bearer ${apiToken}`,
    //   },
    // };

    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data.results);
    //     return response.data.results;
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    return FAKE_POPULARS;
  }
}
