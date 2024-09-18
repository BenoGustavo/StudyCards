import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Card } from "../cards";
import { CarouselContainer } from "./styles";
import { sampleData } from "../../utils/sampleData";

const responsive = {
    desktoplarge: {
        breakpoint: { max: 3000, min: 0 },
        items: 1,
        slidesToSlide: 1
    },
};

const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

export const CarouselComponent : React.FC = () => {

    return(
        <>
        <CarouselContainer>
                <Carousel keyBoardControl={true} swipeable={true} infinite={true} responsive={responsive} transitionDuration={500}>
                    {shuffleArray(sampleData).map((data, index) => (
                        <Card key={index} subject={data.subject} question={data.question} answer={data.answer} />
                    ))}
                </Carousel>
            </CarouselContainer>
        </>
    );
};