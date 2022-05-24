import styled from 'styled-components';

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	text-align: center;
	min-height: calc(100vh - var(--header));
	padding: 50px 25px;
	background: var(--dark);
`;

export const Subtitle = styled.div`
	padding: 10px 0;
	font-size: var(--h2);
	text-transform: uppercase;
	font-weight: 700;
	letter-spacing: 2px;
	color: var(--light);
	@media screen and (max-width: 750px) {
		font-size: var(--h3);
	}
`;

export const Title = styled.div`
	font-size: var(--h1);
	font-weight: 300;
	color: var(--light);
	@media screen and (max-width: 750px) {
		font-size: var(--h2);
	}
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	max-width: 1100px;
	margin: 35px auto;
	@media screen and (max-width: 750px) {
		flex-direction: column;
	}
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 25%;
	margin: 10px 10px;
	padding: 25px 25px;
	border-radius: 10px;
	background: var(--medium);
	box-shadow: 0 1px 3px black;
	transition: all 0.15s ease-in-out;
	cursor: pointer;
	&:hover {
		transform: scale(1.02);
		transition: all 0.15s ease-in-out;
	}
	@media screen and (max-width: 750px) {
		flex-direction: row;
		justify-content: space-evenly;
		width: 90%;
		padding: 15px 15px;
	}
`;

export const Icon = styled.img`
	width: 80%;
	margin-bottom: 10px;
	@media screen and (max-width: 750px) {
		width: 30%;
		margin: 10px 25px;
	}
`;

export const Text = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 750px) {
		align-items: flex-start;
		text-align: left;
	}
`;

export const Heading = styled.div`
	margin-bottom: 10px;
	font-size: var(--h2);
	color: var(--accent);
	@media screen and (max-width: 750px) {
		font-size: var(--h3);
	}
`;

export const Paragraph = styled.div`
	font-size: var(--p);
	color: var(--dark);
`;
