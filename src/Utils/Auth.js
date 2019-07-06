const AUTH_LOCAL_KEY = 'iddogs.auth';

const getAuth = () => JSON.parse(localStorage.getItem(AUTH_LOCAL_KEY));
const authObject = getAuth();

export const IsAutenticated = !!(authObject && authObject.isAutenticated && authObject.authToken);

export const AuthToken = authObject && authObject.authToken;

export const login = (authToken) => {
  if (!authToken) throw new Error('Token é obrigatório');

  return JSON.stringify({
    isAutenticated: true,
    authToken,
  });
};

export const logoff = () => localStorage.removeItem(AUTH_LOCAL_KEY);
