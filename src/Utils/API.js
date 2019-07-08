import { AuthToken } from './Auth';

const BASE_URL = 'https://api-iddog.idwall.co';
const SIGNUP_ENDPOINT = '/signup';
const FEED_ENDPOINT = '/feed';

const request = async (endpoint, postData, aditionalHeaders) => {
  try {
    const res = await fetch(BASE_URL + endpoint, {
      headers: new Headers({ ...aditionalHeaders, 'Content-Type': 'application/json' }),
      method: postData ? 'POST' : 'GET',
      ...(postData && { body: JSON.stringify(postData) }),
    });

    if (!res.ok) throw new Error(res.statusText);

    const data = await res.json();

    if (data.error) throw new Error(data.error.message);

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const signup = email => request(SIGNUP_ENDPOINT, { email });
export const getFeed = (category = 'husky') => request(`${FEED_ENDPOINT}?category=${category}`, null, { Authorization: AuthToken() });
