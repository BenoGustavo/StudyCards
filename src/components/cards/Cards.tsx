import React from "react";
import { PlaceholderContainer, PlaceholderText } from "./styles";

interface CardProps {
    placeholderText: string;
}

export const Card : React.FC<CardProps> = (obj : CardProps) => {
    return (
        <>
        <PlaceholderContainer>
            <PlaceholderText>{obj.placeholderText}</PlaceholderText>
        </PlaceholderContainer>
        </>
    );
};