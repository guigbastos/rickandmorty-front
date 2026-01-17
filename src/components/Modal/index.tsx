import React from "react";
import { ModalOverlay, ModalContent, CloseButton, LeftPanel, ImageContainer, CharacterImage, CharacterInfo, RightPanel, Title, TypeInfo, TextInfo, LocationInfo, ResidentsInfo } from "../../components/Modal/styles.ts"
import type { CharacterData } from "../../types/character";

interface CharacterModalProps {
    characterInfos: CharacterData;
    isOpen: boolean
    onClose: () => void;
}

export const CharacterModal: React.FC<CharacterModalProps> = ({ characterInfos, isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>Close</CloseButton>
                <LeftPanel>
                    <ImageContainer>
                        <div>
                            <CharacterImage
                                src={characterInfos.image}
                                alt={characterInfos.name}
                            />
                            <CharacterInfo>
                                <h3>{characterInfos.name}</h3>
                                <p>{characterInfos.species}</p>
                            </CharacterInfo>
                        </div>
                    </ImageContainer>
                </LeftPanel>
                <RightPanel>
                    <div>
                        <Title>ABOUT</Title>
                        <TextInfo>
                            {characterInfos.name} is a {" "}
                            {characterInfos.gender?.toLowerCase()}{" "}
                            {characterInfos.species?.toLowerCase()}{". "}
                            {characterInfos.status === "Alive" ? "He is alive and well." : characterInfos.status === "Dead" ? "Dead." : "Unknown life status."}
                            {characterInfos.latest_air_date && (<> Last seen in {characterInfos.latest_air_date}.</>)}
                        </TextInfo>
                    </div>
                    <div>
                        <Title>ORIGIN</Title>
                        <TypeInfo>{characterInfos.origin?.type || "Unknown"}</TypeInfo>
                        <LocationInfo>{characterInfos.origin?.name || "Unknown"}</LocationInfo>
                        <TextInfo>{characterInfos.origin?.dimension || "Unkown"}</TextInfo>
                        <ResidentsInfo>
                            {characterInfos.origin?.residents_count ?? "N/A"} Residents
                        </ResidentsInfo>
                    </div>

                    <div>
                        <Title>LOCATION</Title>
                        <TypeInfo>{characterInfos.origin?.type || "Unknown"}</TypeInfo>
                        <LocationInfo>{characterInfos.origin?.name || "Unknown"}</LocationInfo>
                        <TextInfo>{characterInfos.origin?.dimension || "Unkown"}</TextInfo>
                        <ResidentsInfo>
                            {characterInfos.origin?.residents_count ?? "N/A"} Residents
                        </ResidentsInfo>
                    </div>
                </RightPanel>
            </ModalContent>
        </ModalOverlay>
    )
}