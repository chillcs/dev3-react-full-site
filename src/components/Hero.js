import { Heading, Subheading, Button } from './Elements';
import Video from './../videos/hero1280.mp4';
import styled from 'styled-components';

const Hero = (props) => {
	return (
		<>
			<Section>
				<SectionBG>
					<VideoBG autoPlay muted loop src={Video} type="video/mp4" />
				</SectionBG>
				<Content>
					<Heading>{props.heading}</Heading>
					<Subheading>{props.subheading}</Subheading>
					<ButtonBox>
						<Button to="about">{props.buttonText}</Button>
					</ButtonBox>
				</Content>
			</Section>
		</>
	);
};

export default Hero;

/* Styles --- */

export const Section = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	min-height: 500px;
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
`;

export const VideoBG = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: var(--light);
	opacity: 100%;
`;

export const Content = styled.div`
	z-index: 5;
	position: absolute;
	max-width: 650px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0px 25px;
`;

export const ButtonBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 25px;
`;
