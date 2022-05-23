import styled from 'styled-components';

export const Section = styled.div`
	background: ${({ darkmode }) =>
		darkmode ? 'var(--medium)' : 'var(--light)'};
`;

export const Row = styled.div`
	display: flex;
	flex-direction: ${({ imageFirst }) => (imageFirst ? 'row-reverse' : 'row')};
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 1100px;
	min-height: calc(100vh - var(--header));
	margin: 0 auto;
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
	color: ${({ darkmode }) => (darkmode ? 'var(--light)' : 'var(--dark)')};
`;

export const Subtitle = styled.div`
	position: relative;
	font-size: var(--h2);
	padding: 10px 0;
	&:after {
		content: '';
		position: absolute;
		bottom: 5px;
		left: 2px;
		width: 25px;
		height: 3px;
		background: var(--accent);
	}
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

export const Description = styled.div`
	font-size: var(--p);
	padding: 10px 0;
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
