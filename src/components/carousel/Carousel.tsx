import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Card } from "../cards";
import { CarouselContainer } from "./styles";

const responsive = {
    desktoplarge: {
        breakpoint: { max: 3000, min: 1800 },
        items: 4,
        slidesToSlide: 3
    },
    desktop: {
        breakpoint: { max: 1800, min: 1490 },
        items: 3,
        slidesToSlide: 2
    },
    tablet: {
        breakpoint: { max: 1490, min: 1100 },
        items: 2,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 1100, min: 0 },
        items: 0.6,
        slidesToSlide: 1
    }
};

export const CarouselComponent : React.FC = () => {
    return(
        <>
        <CarouselContainer>
                <Carousel responsive={responsive} transitionDuration={500} centerMode={true}>
                    {Array.from({ length: 10 }, (_, i) => (
                        <Card key={i} placeholderText={`Card ${i}`} />
                    ))}
                </Carousel>
            </CarouselContainer>
        </>
    );
};