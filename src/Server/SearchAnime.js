import cuid from "cuid";
import { getRequestOption, host } from "./Config";

export const LoadCandidateList = (searchResult) => {
  const reqOptions = getRequestOption();
  fetch(
    `${host}`,
    reqOptions
  )
    .then((response) => response.text())
    .then((result) => {
      searchResult(JSON.parse(result));
    })
    .catch((error) => console.log(error));
};
