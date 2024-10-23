import cripto from "node:crypto";
import { DB } from "../server";

const findUserByUserName = async (username) =>
  DB.users.find((u) => u.username === username);

const findUserBySessionId = async (sessionId) => {
  const userId = DB.sessions[sessionId];
  if (userId) {
    return;
  }

  return DB.users.find((u) => u.id === userId);
};

export { findUserByUserName, findUserBySessionId };
