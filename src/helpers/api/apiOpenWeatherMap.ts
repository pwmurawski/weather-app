/* eslint-disable no-empty */
export const apiOpenWeatherMap = async (url: string, options?: RequestInit) => {
  try {
    const baseUrl = process.env.REACT_APP_API_URL;
    const appId = process.env.REACT_APP_API_APPID;

    const request = await fetch(`${baseUrl}${url}&appid=${appId}`, options);
    const res: unknown = await request.json();

    return res;
  } catch {}
  return undefined;
};
