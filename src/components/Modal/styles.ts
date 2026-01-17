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
    width: 75%;
    height: 85%;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.3);
    position: relative;

    @media (max-width: 768px) {
        flex-direciton: column;
        widht: 38rem;
        height: auto;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    background-color: transparent;
    color: #FFFFFF;
    width: 8.4rem;
    height: 4.2rem;
    top: 2rem;
    left: 2rem;
    border-radius: 8px;
    border: 2px solid #FFFFFF;
    font-weigh: 700;
    cursor: pointer;
    font-size: 1.6rem;
    z-index: 1000;

    &:hover {
        background-color: rgba(255, 255, 255, 0.3);
    }
`;

export const LeftPanel = styled.div`
    flex: 0 0 35%;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 80%;
        height: 100%;
        backdrop-filter: blur(4rem);
        background-color: rgba(130, 130, 130, 0.3);
        z-index: -1;
        border-radius: 1rem 0 0 1rem;
    }
`

export const ImageContainer = styled.div`
    margin-top: 5rem;
    height: 100%
    postion: relative;
    z-index: 2;
    display: flex;
`

export const CharacterImage = styled.img`
    min-width: 80%;
    width: 100%;
    height: 60vh;
    object-fit: cover;
    margin-top: 5rem;
    border-radius: 1rem 1rem 0 0;
`

export const CharacterInfo = styled.div`
    position: relative;
    width: 100%;
    padding: 1rem 1rem 2rem;
    background-color: rgba(0,0,0, 0.8);

    h3 {
        font-size: 2rem;
        font-family: 'Source Sans 3', sans-serif;
        font-weight: 700;
        color: #FFFFFF;
    }    

    p {
        font-size: 1.7rem;
        font-family: 'Source Sans 3', sans-serif;
        font-weight: 400;
        color: #FFFFFF;
    }
`

export const RightPanel = styled.div`
    flex: 1;
    background-color: #000;
    color: #999;
    display: flex;
    flex-direction: column;
    gap: 6.2rem;
    font-family: 'Nunito', sans-serif;
    padding: 6rem;
    border-radius: 0 0 1rem 1rem;
`

export const Title = styled.h3`
    color: #CBD736;
    font-family: 'Nunito', sans-serif;
    font-size: 1.3rem;
    letter-spacing: 65%;
    font-weight: 400;
`

export const TypeInfo = styled.div`
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: #999;
`

export const TextInfo = styled.div`
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: #fff;
`

export const LocationInfo = styled.div`
    font-size: 3rem;
    color: #fff;
`

export const ResidentsInfo = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    color: #999;
    font-size: 1.5rem;
`