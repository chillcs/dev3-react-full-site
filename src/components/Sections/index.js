import React from 'react';

import {
	Section,
	Row,
	Column,
	Text,
	Subtitle,
	Title,
	Description,
	ButtonBox,
	Image,
} from './Elements';

import { Button } from '../Reusable/Elements';

const About = ({
	id,
	darkmode,
	imageFirst,
	subtitle,
	title,
	description,
	buttonText,
	image,
	alt,
}) => {
	return (
		<>
			<Section id={id} darkmode={darkmode}>
				<Row imageFirst={imageFirst}>
					<Column>
						<Text darkmode={darkmode}>
							<Subtitle>{subtitle}</Subtitle>
							<Title>{title}</Title>
							<Description>{description}</Description>
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
