import { useEffect, useState } from "react";

const useSlider = (
  imgArray: string[]
): [currentImg: typeof currentImg, setImg: typeof setImg] => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    if (currentImg > imgArray.length - 1) setCurrentImg(0);
    if (currentImg < 0) setCurrentImg(imgArray.length - 1);
  }, [currentImg]);

  const setImg = (value: number) => {
    setCurrentImg(currentImg + value);
  };

  return [currentImg, setImg];
};

export default useSlider;
