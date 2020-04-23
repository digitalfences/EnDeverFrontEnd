import Config from "./Config";

function getAccountByUserName(userName, response) {
  return fetch(`${Config.ProxyUrl}/account/${userName}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then(response);
}

const Client = {
  getAccountByUserName,
};
export default Client;
