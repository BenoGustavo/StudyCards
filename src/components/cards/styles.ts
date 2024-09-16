import styled, { css, keyframes } from "styled-components";
import { Colors } from "../../assets/css/GlobalStyles";

const flip = keyframes`
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(180deg);
  }
`;

const flipBack = keyframes`
  from {
    transform: rotateY(180deg);
  }
  to {
    transform: rotateY(0);
  }
`;

export const CardInner = styled.div<{ $animate?: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  width: 50%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 1s;
  ${({ $animate }) =>
    $animate
      ? css`
          animation: ${flip} 1s forwards;
        `
      : css`
          animation: ${flipBack} 1s forwards;
        `}
`;

export const CardContainer = styled.section<{ $animate?: boolean}>`
  perspective: 1000px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7.5rem;
  border-radius: 1.2rem;
`

export const CardFront = styled.div`
  position: absolute;
  width: 84%;
  height: 84%;
  backface-visibility: hidden;
  background-color: ${Colors.newColor2};
  color: black;
  display: flex;
  justify-content: space-between;
  border-radius: 1.2rem;
  flex-direction: column;
  box-shadow: 8px 8px 10px 1px rgba(0, 0, 0, 0.2);
`;

export const CardBack = styled.div`
  position: absolute;
  width: 84%;
  height: 84%;
  backface-visibility: hidden;
  background-color: ${Colors.backsideCard};
  color: ${Colors.newColor2};
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 1.2rem;
  box-shadow: 8px 8px 10px 1px rgba(0, 0, 0, 0.2);
  `;


export const CardTitleContainer = styled.div`
    margin-top: 3rem;
`
interface CardProps {
    color: string;
    fontSize? : string;
}

export const CardTitle = styled.h1<CardProps>`
    font-size: 4rem;
    color: ${({ color }) => color || 'white'};
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    user-select: none;
`

export const CardQuestion = styled.p<CardProps>`
    font-size: ${({ fontSize }) => fontSize || '2rem'};;
    color: ${({ color }) => color || 'white'};
    align-self: center;
    justify-self: center;
    user-select: none;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`

export const ClickHereMessage = styled.span`
    font-size: 2rem;
    color: white;
    align-self: center;
    justify-self: center;
    margin-top: 2rem;
    cursor: pointer;
    transition: 0.3s;
    color: #7EAAB1;
    font-weight: 600;
    &:hover {
        color: ${Colors.newColor1};
    }
`

export const CardAnswer = styled.input`
    font-size: 2rem;
    color: #003740;
    border: none;
    background-color: ${Colors.backsideCard};
    border-bottom: 1px solid white;
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 0.3rem;
    width: 80%;
    max-width: 42.5rem;
    height: 45px;
    margin-bottom: 1rem;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
`

export const CardSubmit = styled.button`
    font-size: 2rem;
    color: white;
    background-color: green;
    border: none;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    margin-top: 2rem;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: white;
        color: red;
    }
`