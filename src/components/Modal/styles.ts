import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    display: flex;
    border-radius: 0.8rem;
    overflow: hidden;
    max-width: 90%;
    width: 72%;
    height: 80vh;
    box-shadow: 0 0 3rem rgba(0, 0, 0, 0.5);
    position: relative;
`;

export const CloseButton = styled.button`
    position: absolute;
    background-color: transparent;
    color: #ffffff;
    width: 8.4rem;
    height: 4.2rem;
    top: 1.6rem;
    left: 1.6rem;
    border-radius: 8px;
    border: 2px solid #ffffff;
    font-weight: 700;
    cursor: pointer;
    font-size: 1.6rem;
    z-index: 100;
    font-family: 'Nunito', sans-serif;

    &:hover {
        background-color: rgba(255, 255, 255, 0.15);
    }
`;

/* Left panel: image fills entirely, no blur trick needed */
export const LeftPanel = styled.div`
    flex: 0 0 40%;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const CharacterImage = styled.img`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
`;

export const CharacterInfo = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    padding: 1.2rem 1.6rem 1.6rem;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.85) 40%,
        rgba(0, 0, 0, 0.95) 100%
    );

    h3 {
        font-size: 1.8rem;
        font-family: 'Source Sans 3', sans-serif;
        font-weight: 700;
        color: #ffffff;
        line-height: 1.2;
    }

    p {
        font-size: 1.3rem;
        font-family: 'Source Sans 3', sans-serif;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.7);
        margin-top: 0.2rem;
    }
`;

export const RightPanel = styled.div`
    flex: 1;
    background-color: #1a1a1a;
    display: flex;
    flex-direction: column;
    gap: 2.8rem;
    font-family: 'Nunito', sans-serif;
    padding: 5.6rem 2.4rem 2.4rem;
    overflow-y: auto;
`;

export const SectionBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
`;

/* Matches Figma exactly: Nunito 400, 13px, letter-spacing 65%, #CBD736 */
export const SectionTitle = styled.h4`
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1;
    letter-spacing: 0.65em;
    color: #cbd736;
    text-transform: uppercase;
    margin-bottom: 0.8rem;
`;

export const TypeInfo = styled.p`
    font-size: 1.3rem;
    font-family: 'Nunito', sans-serif;
    color: #6e6e6e;
    line-height: 1.4;
`;

export const LocationName = styled.p`
    font-size: 2rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.3;
`;

export const DimensionInfo = styled.p`
    font-size: 1.3rem;
    font-family: 'Nunito', sans-serif;
    color: #6e6e6e;
    line-height: 1.4;
`;

export const ResidentsInfo = styled.p`
    font-size: 1.3rem;
    font-family: 'Nunito', sans-serif;
    color: #6e6e6e;
    margin-top: 0.4rem;
    line-height: 1.4;
`;

export const AboutText = styled.p`
    font-size: 1.3rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    color: #ffffff;
    line-height: 1.6;
`;