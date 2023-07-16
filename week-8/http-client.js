//Title: http-client.js
//Author: James Harper
//Date: 7/14/2023
//Description: Web 330 - Assignment 8.2

export class HttpClient {
  async get(url, params) {
    url = new URL(url);

    url.search = new URLSearchParams(params);

    const res = await fetch(url.toString(), {
      method: "GET",
    })

    const data = await res.json();
    return data
  }
}
