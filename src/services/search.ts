import fetchJsonp from "fetch-jsonp"
import configService from "./config";

export default async (name: string) => {
  return await fetchJsonp(
    `${configService.apiUrl}/search?q=${name}&index=0&limit=15&output=jsonp`
  )
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (json) {
      return json.data;
    })
    .catch(function (ex) {
      console.log("parsing failed", ex);
    });
};
