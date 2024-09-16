import React, { useState } from 'react';
import {
	CardAnswer,
	CardContainer,
	CardInner,
	CardFront,
	CardBack,
	CardQuestion,
	CardTitle,
	CardTitleContainer,
	InputContainer,
	ClickHereMessage,
} from './styles';
import { Colors } from '../../assets/css/GlobalStyles';

type CardProps = {
	subject: string;
	question: string;
	answer: string;
};

export const Card: React.FC<CardProps> = (obj: CardProps) => {
	const [animate, setAnimate] = useState(false);

	const handleCardSubmission = (event: React.FormEvent) => {
		event.preventDefault();
		setAnimate(!animate);
	};

	return (
		<CardContainer $animate={animate ? true : undefined}>
        <CardInner $animate={animate ? true : undefined}>
				<CardFront>
					<CardTitleContainer>
						<CardTitle color={Colors.white}>{obj.subject}</CardTitle>
					</CardTitleContainer>
					<CardQuestion color={Colors.white}>{obj.question}</CardQuestion>
					<InputContainer>
						<CardAnswer placeholder="Anote aqui" />
						<ClickHereMessage onClick={handleCardSubmission}>CLIQUE NO CARD PARA VER A RESPOSTA!</ClickHereMessage>
					</InputContainer>
				</CardFront>

				<CardBack onClick={handleCardSubmission}>
					<CardTitleContainer>
						<CardTitle color='#154B52'>RESPOSTA:</CardTitle>
					</CardTitleContainer>
					<CardQuestion fontSize='2.5rem' color='#154B52'>{obj.answer}</CardQuestion>
					<InputContainer>
						<ClickHereMessage>CLIQUE PARA VOLTAR!</ClickHereMessage>
					</InputContainer>
				</CardBack>
			</CardInner>
		</CardContainer>
	);
};
