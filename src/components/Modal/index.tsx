import React from "react";
import {
	ModalOverlay,
	ModalContent,
	CloseButton,
	LeftPanel,
	CharacterImage,
	CharacterInfo,
	RightPanel,
	SectionBlock,
	SectionTitle,
	TypeInfo,
	LocationName,
	DimensionInfo,
	ResidentsInfo,
	AboutText,
	BackgroundClip,
	BlurredImage,
	ContentWrapper,
	CardContainer,
} from "./styles";
import type { CharacterData } from "../../types/Character.ts";
import residentsInfo from "../../assets/residents_icon.svg";
import closeButton from "../../assets/close-button.svg";

interface CharacterModalProps {
	characterInfos: CharacterData;
	isOpen: boolean;
	onClose: () => void;
}

export const CharacterModal: React.FC<CharacterModalProps> = ({
	characterInfos,
	isOpen,
	onClose,
}) => {
	if (!isOpen || !characterInfos) return null;

  const gender = characterInfos.gender.toLowerCase() || "";
  const pronoun = gender === "female" ? "she" : gender === "male" ? "he" : "it";
  const capitalizedPronoun = pronoun.charAt(0).toUpperCase() + pronoun.slice(1);

  let introSentence = "";
  let statusSentence = ""; 

  if (characterInfos.status === "Alive") {
    introSentence = `${characterInfos.name} is a ${gender} ${characterInfos.species?.toLowerCase()}.`;
    statusSentence = `${capitalizedPronoun} is alive and well.`;
  } else if (characterInfos.status === "Dead") {
    introSentence = `${characterInfos.name} was a ${gender} ${characterInfos.species?.toLowerCase()}.`;
    statusSentence = `${capitalizedPronoun} is deceased.`;
  } else {
    introSentence = `${characterInfos.name} is a ${gender} ${characterInfos.species?.toLowerCase()}.`;
    statusSentence = `It can't be told if ${pronoun} is alive or dead.`
  }

	return (
		<ModalOverlay onClick={onClose}>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				<LeftPanel>
					<BackgroundClip>
						<BlurredImage $image={characterInfos.image} />
					</BackgroundClip>
					<CloseButton onClick={onClose}>
						<span className="close-text">Close</span>
						<img className="close-icon" src={closeButton} alt="Close" />
					</CloseButton>

					<ContentWrapper>
						<CardContainer>
							<CharacterImage
								src={characterInfos.image}
								alt={characterInfos.name}
							/>
							<CharacterInfo>
								<h3>{characterInfos.name}</h3>
								<p>{characterInfos.species}</p>
							</CharacterInfo>
						</CardContainer>
					</ContentWrapper>
				</LeftPanel>

				<RightPanel>
					<SectionBlock>
						<SectionTitle>About</SectionTitle>
						<AboutText>
              {introSentence} {statusSentence} {""}
							{characterInfos.last_episode?.air_date && (
								<>
									{capitalizedPronoun} was last seen in{" "}
									{characterInfos.last_episode.air_date}.
								</>
							)}
						</AboutText>
					</SectionBlock>

					<SectionBlock>
						<SectionTitle>Origin</SectionTitle>
						<TypeInfo>
							{characterInfos.character_origin?.type ||
								"Unknown Planet"}
						</TypeInfo>
						<LocationName>
							{characterInfos.character_origin?.name || "Unknown"}
						</LocationName>
						<DimensionInfo>
							{characterInfos.character_origin?.dimension ||
								"Unknown dimension"}
						</DimensionInfo>
						<ResidentsInfo>
							<img src={residentsInfo} alt="Residents" />
							{characterInfos.character_origin?.residents_count ??
								"N/A"}{" "}
							residents
						</ResidentsInfo>
					</SectionBlock>

					<SectionBlock>
						<SectionTitle>Location</SectionTitle>
						<TypeInfo>
							{characterInfos.character_location?.type ||
								"Unknown Planet"}
						</TypeInfo>
						<LocationName>
							{characterInfos.character_location?.name ||
								"Unknown"}
						</LocationName>
						<DimensionInfo>
							{characterInfos.character_location?.dimension ||
								"Unknown dimension"}
						</DimensionInfo>
						<ResidentsInfo>
							<img src={residentsInfo} alt="Residents" />
							{characterInfos.character_location
								?.residents_count ?? "N/A"}{" "}
							residents
						</ResidentsInfo>
					</SectionBlock>
				</RightPanel>
			</ModalContent>
		</ModalOverlay>
	);
};
