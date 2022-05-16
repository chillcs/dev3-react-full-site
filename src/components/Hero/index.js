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
				<Title>Virtual Banking Made Simple</Title>
				<Subtitle>
					Sign up for a new account and receive $250 in credit towards your next
					payment.
				</Subtitle>
				<ButtonBox>
					<Button to="signup">Sign Up</Button>
				</ButtonBox>
			</Content>
		</Section>
	);
};

export default Hero;
