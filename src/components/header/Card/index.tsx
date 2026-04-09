import React from "react";
import { CardContainer, ImageContainer, CardImage, CardInfo } from "./styles";

interface CardProps {
	imageUrl: string;
	name: string;
	gender: string;
	species: string;
	status: string;
	type: string;
	origin: string;
	location: string;
	episode: string[];
	isSelected: boolean;
	onClick: () => void;
}

export const Card: React.FC<CardProps> = ({
	imageUrl,
	name,
	// gender,
	species,
	status,
	// type,
	// origin,
	// location,
	// episode,
	isSelected,
	onClick,
}: CardProps) => {
	const isAlive = status === "Alive";

	return (
		<CardContainer $isSelected={isSelected} onClick={onClick}>
			<ImageContainer>
				<CardImage src={imageUrl} alt={name} draggable={false} $isAlive={isAlive} $isSelected={isSelected}/>
			</ImageContainer>
			<CardInfo>
				<h3>{name}</h3>
				<span>{species}</span>
			</CardInfo>
		</CardContainer>		
	);
};
