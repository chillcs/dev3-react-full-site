import styled from 'styled-components';

export const Section = styled.div`
	z-index: 1;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	padding: 0 30px;
	background: #000;
`;

export const SectionBG = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const VideoBG = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: var(--light);
	opacity: 25%;
`;

export const Content = styled.div`
	z-index: 3;
	position: absolute;
	max-width: 650px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0px 25px;
`;
export const Title = styled.div`
	color: var(--light);
	font-size: var(--h1);
	text-align: center;
	padding: 15px 0;

	@media screen and (max-width: 750px) {
		font-size: var(--h2);
	}
`;

export const Subtitle = styled.div`
	color: var(--light);
	font-size: var(--h2);
	text-align: center;

	@media screen and (max-width: 750px) {
		font-size: var(--h3);
	}
`;

export const ButtonBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 25px;
`;
