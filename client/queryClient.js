import { request } from "graphql-request";

const URL = "http://localhost:8000/graphql";

export const fetcher = (query, variables) => {
  console.log("query", query);
  console.log("variables", variables);
  console.log("URL", URL);

  return request(URL, query, variables);
};

export const QueryKeys = {
  MESSAGES: "MESSAGES",
  MESSAGE: "MESSAGE",
  USERS: "USERS",
  USER: "USER",
};
