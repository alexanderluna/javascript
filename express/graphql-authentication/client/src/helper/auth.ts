import { getAccessToken, setAccessToken } from "../accessToken";
import jwtDecode from "jwt-decode";
import api from "../services/api";

const getNewToken = async () => {
  const { data } = await api.post('/refresh_token');
  setAccessToken(data.accessToken);
  return getAccessToken();
}

const getTokenOrRedirect = async () => {
  const token = getAccessToken();
  if (!token) {
    return await getNewToken();
  }

  try {
    const { exp } = jwtDecode(token);
    if (Date.now() >= exp * 1000) {
      return await getNewToken();
    } else {
      return getAccessToken();
    }
  } catch (error) {
    console.log(error);
  }

  return 'session expired login again';
}

export default getTokenOrRedirect;
