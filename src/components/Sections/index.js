import React from 'react';

import {
	Section,
	Row,
	Column,
	Text,
	Subtitle,
	Title,
	ButtonBox,
	Image,
} from './Elements';

import { Button } from '../Reusable/Elements';

const About = ({
	id,
	alternateBG,
	imageFirst,
	subtitle,
	title,
	buttonText,
	image,
	alt,
}) => {
	return (
		<>
			<Section id={id} alternateBG={alternateBG}>
				<Row imageFirst={imageFirst}>
					<Column>
						<Text>
							<Subtitle>{subtitle}</Subtitle>
							<Title>{title}</Title>
						</Text>
						<ButtonBox>
							<Button
								to="home"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-60}
							>
								{buttonText}
							</Button>
						</ButtonBox>
					</Column>
					<Column>
						<Image src={image} alt={alt} />
					</Column>
				</Row>
			</Section>
		</>
	);
};

export default About;
