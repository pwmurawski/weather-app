import { useEffect, useState } from "react";
import getPhoto from "../helpers/getPhoto";

const usePhotos = (
  searchValue?: string
): [
  photos: string[],
  setPhotos: React.Dispatch<React.SetStateAction<string[]>>,
  isLoading: boolean
] => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    if (searchValue) {
      const res = await getPhoto(searchValue);
      if (res) {
        if (!res.error) {
          const photosData = res.photos.map(({ src }) => src.medium);
          setPhotos(photosData);
          setIsLoading(false);
        }
      }
    }
  };

  useEffect(() => {
    if (searchValue) {
      setIsLoading(true);
      getData();
    }
  }, [searchValue]);

  return [photos, setPhotos, isLoading];
};

export default usePhotos;
