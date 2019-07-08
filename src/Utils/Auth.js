const AUTH_LOCAL_KEY = 'iddogs.auth';

const getAuth = () => JSON.parse(localStorage.getItem(AUTH_LOCAL_KEY));

export const IsAutenticated = () => {
  const authObject = getAuth();

  return !!(authObject && authObject.isAutenticated && authObject.authToken);
};

export const AuthToken = () => {
  const authObject = getAuth();

  return authObject && authObject.authToken;
};

export const setLogin = (authToken) => {
  if (!authToken) throw new Error('Token é obrigatório');

  return localStorage.setItem(AUTH_LOCAL_KEY, JSON.stringify({
    isAutenticated: true,
    authToken,
  }));
};

export const logoff = () => localStorage.removeItem(AUTH_LOCAL_KEY);
