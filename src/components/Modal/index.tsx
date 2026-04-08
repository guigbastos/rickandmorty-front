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
} from "./styles";
import type { CharacterData } from "../../types/Character.ts";

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

    const statusText =
        characterInfos.status === "Alive"
            ? "He is alive and well."
            : characterInfos.status === "Dead"
            ? "Deceased."
            : "Life status unknown.";

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>Close</CloseButton>

                <LeftPanel>
                    <CharacterImage
                        src={characterInfos.image}
                        alt={characterInfos.name}
                    />
                    <CharacterInfo>
                        <h3>{characterInfos.name}</h3>
                        <p>{characterInfos.species}</p>
                    </CharacterInfo>
                </LeftPanel>

                <RightPanel>
                    <SectionBlock>
                        <SectionTitle>About</SectionTitle>
                        <AboutText>
                            {characterInfos.name} is a{" "}
                            {characterInfos.gender?.toLowerCase()}{" "}
                            {characterInfos.species?.toLowerCase()}. {statusText}
                            {characterInfos.latest_air_date && (
                                <> Last seen in {characterInfos.latest_air_date}.</>
                            )}
                        </AboutText>
                    </SectionBlock>

                    <SectionBlock>
                        <SectionTitle>Origin</SectionTitle>
                        <TypeInfo>{characterInfos.origin?.type || "Unknown"}</TypeInfo>
                        <LocationName>
                            {characterInfos.origin?.name || "Unknown"}
                        </LocationName>
                        <DimensionInfo>
                            {characterInfos.origin?.dimension || "Unknown"}
                        </DimensionInfo>
                        <ResidentsInfo>
                            {characterInfos.origin?.residents_count ?? "N/A"} residents
                        </ResidentsInfo>
                    </SectionBlock>

                    <SectionBlock>
                        <SectionTitle>Location</SectionTitle>
                        <TypeInfo>{characterInfos.location?.type || "Unknown"}</TypeInfo>
                        <LocationName>
                            {characterInfos.location?.name || "Unknown"}
                        </LocationName>
                        <DimensionInfo>
                            {characterInfos.location?.dimension || "Unknown"}
                        </DimensionInfo>
                        <ResidentsInfo>
                            {characterInfos.location?.residents_count ?? "N/A"} residents
                        </ResidentsInfo>
                    </SectionBlock>
                </RightPanel>
            </ModalContent>
        </ModalOverlay>
    );
};