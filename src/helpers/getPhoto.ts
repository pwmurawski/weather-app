import { IPhotosData } from "../interfaces/IPhotosData";
import apiPexels from "./api/apiPexels";

const getPhoto = async (searchValue: string) => {
  const res = await apiPexels<IPhotosData>(
    `search?query=${searchValue.toLocaleLowerCase()}`
  );
  return res;
};

export default getPhoto;
