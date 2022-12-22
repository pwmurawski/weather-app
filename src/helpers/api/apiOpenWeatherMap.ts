/* eslint-disable no-empty */
const apiOpenWeatherMap = async <T>(url: string, options?: RequestInit) => {
  try {
    const baseUrl = process.env.REACT_APP_API_URL;
    const appId = process.env.REACT_APP_API_APPID;

    const request = await fetch(`${baseUrl}${url}&appid=${appId}`, options);
    const res: T = await request.json();

    return res;
  } catch {}
  return undefined;
};

export default apiOpenWeatherMap;
