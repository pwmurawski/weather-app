import useSlider from "../../hooks/useSlider";
import { Container, Img, NextBtn, PrevBtn } from "./styles/SliderStyles";

interface ISliderProps {
  imgArray: string[];
}

export default function Slider({ imgArray }: ISliderProps) {
  const [currentImg, setImg] = useSlider(imgArray);

  if (imgArray.length === 1)
    return (
      <Container>
        <Img src={imgArray[currentImg]} />
      </Container>
    );
  return (
    <Container>
      <PrevBtn onClick={() => setImg(-1)}>{"<"}</PrevBtn>
      <Img src={imgArray[currentImg]} />
      <NextBtn onClick={() => setImg(1)}>{">"}</NextBtn>
    </Container>
  );
}
