export default class HttpClient {
  async post(path, body) {
    // return async () => {
      const settings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": ReactOnRails.authenticityToken()
        },
        body: body
      };
      const response = await fetch(path, settings);
      const json = await response.json();
      return json;
    // };
  }
}
