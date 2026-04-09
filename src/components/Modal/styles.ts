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
    width: 103.4rem;
    height: 79.9rem;
    box-shadow: 0 0 3rem rgba(0, 0, 0, 0.5);
    position: relative;
    background-color: transparent;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 29.5rem;
        height: 42.2rem;
    }
        
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 2rem;
    left: 2rem;
    z-index: 20;
    background-color: transparent;
    color: #ffffff;
    width: 8.4rem;
    height: 4.2rem;
    border-radius: 8px;
    border: 2px solid #ffffff;
    font-weight: 700;
    cursor: pointer;
    font-size: 1.6rem;
    font-family: "Nunito", sans-serif;

    display: flex;
    justify-content: center;
    align-items: center;

    .close-icon {
        display: none;
    }

    @media (max-width: 768px) {
        position: fixed;
        top: 2.7rem;
        left: 2.7rem;

        width: auto;
        height: auto;
        border: none;

        .close-text {
            display: none;
        }

        .close-icon {
            display: block;
            width: 1.65rem;
            height: 1.65rem;
        }
    }
        


    &:hover {
        background-color: rgba(255, 255, 255, 0.15);
    }
`;

export const ContentWrapper = styled.div`
    position: absolute;
    z-index: 10;
    display: flex;
    flex-direction: column;
    width: 40.1rem;
    right: 6.5rem;
    top: 8.3rem;

    @media (max-width: 768px) {
        width: 17.8rem;
        height: 17.3rem;
        left: 5.9rem;
        top: -8.5rem;
    }
        
`;

export const LeftPanel = styled.div`
    flex: 0 0 38.9rem;
    height: 100%;
    position: relative;

    @media (max-width: 768px) {
        flex: 0 0 5.9rem;
        width: 100%;
    }
        
`;

export const BackgroundClip = styled.div`
    position: absolute;
    inset: 0;
    overflow: hidden;
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    z-index: 0;

    @media (max-width: 768px) {
        border-bottom-left-radius: 0rem;
        border-top-right-radius: 0.8rem;
    }
`;

export const BlurredImage = styled.div<{ $image: string }>`
    position: absolute;
    inset: -50px; /* Stretch it out to hide the ugly fuzzy white edges */
    background-image: url(${(props) => props.$image});
    background-size: cover;
    background-position: center;
    filter: blur(20px) brightness(0.25);
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 0.8rem;
    overflow: hidden;
    border: 2px solid #606060;
    background-color: #1e1e20;
    position: relative;
    height: 100%;
`;

export const CharacterImage = styled.img`
    width: 100%;
    height: 59.8rem;
    object-fit: cover;
    display: block;

    @media (max-width: 768px) {
        height: 100%;
    }
`;

export const CharacterInfo = styled.div`
    height: 5.5rem;
    background-color: rgba(30, 30, 32, 0.85);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0rem 1.6rem;

    @media (max-width: 768px) {
        height: 5.4rem;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        backdrop-filter: blur(10px);
    }


    h3 {
        font-family: "Source Sans 3", sans-serif;
        font-weight: 600;
        font-size: 2rem;
        color: #fff;
        margin: 0;
    }

    p {
        font-family: "Source Sans 3", sans-serif;
        font-weight: 400;
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.7);
        margin-top: -0.3rem;
    }
`;

export const RightPanel = styled.div`
    flex: 0 0 64.5rem;
    height: 100%;
    background-color: #000000eb;
    display: flex;
    flex-direction: column;
    gap: 2.8rem;
    font-family: "Nunito", sans-serif;
    padding: 7.2rem 7.5rem 2.4rem 7.1rem;
    overflow-y: auto;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;

    @media (max-width: 768px) {
        flex: 0 0 36.3rem;
        width: 100%;

        border-top-right-radius: 0rem;
        border-bottom-left-radius: 0.8rem;

        padding: 4rem 2.4rem 2.4rem 2.4rem;
    }

`;

export const SectionBlock = styled.div`
    display: flex;
    flex-direction: column;
    // gap: 0.2rem;
`;

export const SectionTitle = styled.h4`
    font-family: "Nunito", sans-serif;
    font-weight: 200;
    font-size: 1.3rem;
    line-height: 1;
    letter-spacing: 0.65em;
    color: #cbd736;
    text-transform: uppercase;

    @media (max-width: 768px) {
        padding-top: 3rem;
    }
`;

export const TypeInfo = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
    font-family: "Nunito", sans-serif;
    color: #8C8C8C;
    margin-top: 1.7rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const LocationName = styled.p`
    font-size: 2.8rem;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    color: #ffffff;
    margin-top: -0.25rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const DimensionInfo = styled.p`
    font-size: 1.8rem;
    font-weight: 200;
    font-family: "Nunito", sans-serif;
    color: #D3D3D3;
    margin-top: -0.25rem;

    @media (max-width: 768px) {
        font-size: 1.6rem;
    }
`;

export const ResidentsInfo = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
    font-family: "Nunito", sans-serif;
    color: #8C8C8C;
    margin-top: 1.2rem;
    display: flex;
    align-items: center;
    gap: 1.1rem;

    img {
        width: 1.6rem;
        height: auto;
        flex-shrink: 0;
        display: block;
    }

    @media (max-width: 768px) {
        font-size: 1.4rem;

        img {
            width: 1.4rem;
        }
    }
`;

export const AboutText = styled.p`
    font-size: 1.6rem;
    font-family: "Nunito", sans-serif;
    font-weight: 200;
    color: #D3D3D3;
    margin-top: 0.9rem;
`;
