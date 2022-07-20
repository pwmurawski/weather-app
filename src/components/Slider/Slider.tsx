import { useEffect, useState } from "react";
import { Container, Img, NextBtn, PrevBtn } from "./styles/SliderStyles";

interface ISliderProps {
  imgArray: string[];
}

export default function Slider({ imgArray }: ISliderProps) {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    if (currentImg > imgArray.length - 1) setCurrentImg(0);
    if (currentImg < 0) setCurrentImg(imgArray.length - 1);
  }, [currentImg]);

  if (imgArray.length === 1)
    return (
      <Container>
        <Img src={imgArray[currentImg]} />
      </Container>
    );
  return (
    <Container>
      <PrevBtn onClick={() => setCurrentImg(currentImg - 1)}>{"<"}</PrevBtn>
      <Img src={imgArray[currentImg]} />
      <NextBtn onClick={() => setCurrentImg(currentImg + 1)}>{">"}</NextBtn>
    </Container>
  );
}
