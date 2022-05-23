import Video from '../../videos/hero1280.mp4';
import {
	Section,
	SectionBG,
	VideoBG,
	Content,
	Title,
	Subtitle,
	ButtonBox,
} from './Elements';

import { Button } from '../Reusable/Elements';

const Hero = () => {
	return (
		<Section>
			<SectionBG>
				<VideoBG autoPlay muted loop src={Video} type="video/mp4" />
			</SectionBG>
			<Content>
				<Title>dev3.ai</Title>
				<Subtitle>Shopify web development</Subtitle>
				<ButtonBox>
					<Button to="about">Learn more</Button>
				</ButtonBox>
			</Content>
		</Section>
	);
};

export default Hero;
