import styled from 'styled-components';

export const Section = styled.div`
	background: ${({ alternateBG }) =>
		alternateBG ? 'var(--medium)' : 'var(--light)'};
`;

export const Row = styled.div`
	display: flex;
	flex-direction: ${({ imageFirst }) => (imageFirst ? 'row-reverse' : 'row')};
	justify-content: space-between;
	align-items: center;
	min-height: calc(100vh - var(--header));
	width: 100%;
	max-width: 1100px;
	margin: auto;
	padding: 25px 0;
	@media screen and (max-width: 900px) {
		flex-direction: column;
		justify-content: space-evenly;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	padding: 10px 25px;
	@media screen and (max-width: 900px) {
		width: 100%;
	}
`;

export const Text = styled.div`
	color: var(--dark);
`;

export const Subtitle = styled.div`
	position: relative;
	padding: 10px 0;
	font-size: var(--h2);
	text-transform: uppercase;
	font-weight: 700;
	letter-spacing: 2px;
	@media screen and (max-width: 750px) {
		font-size: var(--h3);
	}
`;

export const Title = styled.div`
	font-size: var(--h1);
	padding: 10px 0;
	@media screen and (max-width: 750px) {
		font-size: var(--h2);
	}
`;

export const ButtonBox = styled.div`
	display: flex;
	margin: 15px 0px;
`;

export const Image = styled.img`
	width: 100%;
	margin: 0 auto;
	@media screen and (max-width: 900px) {
		width: 60%;
	}
`;
