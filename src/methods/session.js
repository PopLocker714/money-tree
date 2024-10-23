const createSession = async (userId) => {
  const sessonId = cripto.randomUUID();
  DB.sessions[sessonId] = userId;
  return sessonId;
};

const deleteSession = async (sessionId) => {
  delete DB.sessions[sessionId];
};

export { deleteSession, createSession };
