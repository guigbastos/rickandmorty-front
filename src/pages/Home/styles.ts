import styled from "styled-components";
import bgImage from "../../assets/Background.svg";

export const PageWrapper = styled.div`
	background-image: url(${bgImage});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	min-height: 100vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	background-attachment: fixed;
	width: 100%;
`;

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 120rem;
	margin: 0 auto;
	padding: 2rem;

	@media (max-width: 768px) {
		padding: 2rem 3.2rem;
		gap: 4.7rem;
	}
`;

export const Logo = styled.img`
	@media (max-width: 768px) {
		width: 80%;
		max-width: 30rem;
		margin: 0 auto;
	}
`;

export const SearchBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 7.4rem 0 10.1rem;
    gap: 0.8rem;

	@media (max-width: 768px) {
		padding: 0;
		margin: 0;
		width: 100%;

		> div,
		> div > button {
			width: 8.4rem;
			height: 4.2rem;
		}
	}
`;

export const SearchInput = styled.input`
	width: 19.6rem;
	height: 4.2rem;
	border-radius: 8px;
	border: 2px solid #fff;
	background-color: transparent;
	margin-right: 1.6rem;
	font-family: "Nunito", sans-serif;
	font-size: 1.6rem;
	font-weight: 700;
	padding-left: 1.6rem;
	color: #fff;

	&::placeholder {
		color: #9f9f9f;
		line-height: 1.6rem;
	}

	@media (max-width: 768px) {
		width: 16.4rem;
		height: 4.2rem;
		flex: none;
		margin-right: 0;
	}
`;

export const ResultsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2rem;
	width: 100%;
	margin-top: 4rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 2.4rem;
		margin-top: 0rem;
		max-width: 25.6rem;
	}
`;
