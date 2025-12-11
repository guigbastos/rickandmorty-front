import styled, { keyframes } from 'styled-components';

const dotsAnimation = keyframes`
    0% {
        content: '.';
    }
    25% {
        content: '.';
    }
    50% {
        content: '..';
    }
    75% {
        content: '...';
    }
    100% {
        content: '';
    }
`
const pulse = keyframes`
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: .75;
        transform: scale(0.95);
    }
`;

export const OverlayContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    background-color: rgba(18, 18, 18, 0.9);
    backdrop-filter: blur(5px);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    z-index: 9999;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.6rem;
`

export const StyledImage = styled.img`
    width: 18.7rem;
    height: 18.7rem;
    object-fit: contain;

    animation: ${pulse} 1.5s infinite ease-in-out;
`

export const LoadingText = styled.span`
    color: #fff;
    font-family: 'Nunito', sans-serif;
    font-size: 2.4rem;
    font-weight: 400;
    min-width: 80px;
    text-align: left;

    &::after {
        content: '';
        animation: ${dotsAnimation} 2s steps(1) infinite;
    }
`