import styled from "styled-components";

export const CardContainer = styled.div<{ $isSelected: boolean }>`
	display: flex;
	flex-direction: column;
	background-color: rgba(30, 30, 32, 0.6);
	height: 30rem;
	backdrop-filter: blur(5px);
	overflow: hidden;
	position: relative;
	border: 2px solid #606060;
	border-radius: 8px;
	transition: all 0.3s ease-in-out;
	cursor: pointer;
	user-select: none;

	border: ${(props) => (props.$isSelected ? "4px solid #cbd736" : "2px solid #606060")};
	box-shadow: ${(props) => (props.$isSelected ? "0 0 20px rgba(151, 206, 76, 0.6)" : "none")};
	transform: ${(props) => (props.$isSelected ? "translateY(-5px)" : "none")};
	z-index: ${(props) => (props.$isSelected ? "10" : "1")};

	&:hover img {
		filter: grayscale(0%);
	}
`

export const ImageContainer = styled.div`
	width: 100%;
	height: 100%;
`

export const CardImage = styled.img<{ $isAlive: boolean; $isSelected: boolean }>`
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: all 0.3s ease-in-out;

	filter: ${(props) => (props.$isAlive || props.$isSelected ? "grayscale(0%)" : "grayscale(100%)")};
`

export const CardInfo = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;

	display: flex;
	flex-direction: column;
	padding: 1.2rem 1.6rem;
	justify-content: center;

	background-color: rgba(30, 30, 32, 0.85);
	backdrop-filter: blur(5px);

	border-top: 1px solid rgba(255, 255, 255, 0.1);

	z-index: 2;

	h3 {
		font-family: "Source Sans 3", sans-serif;
		font-weight: 700;
		font-size: 2rem;
		color: #fff;
		min-height: 2.4rem;
		line-height: 2.5rem;
		/* display: flex;
		align-items: flex-start; */
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	span {
		font-family: "Source Sans 3", sans-serif;
		font-weight: 400;
		font-size: 1.2rem;
		color: #fff;
		display: flex;
		align-items: flex-start;
		line-height: 1.5rem;
	}
`
