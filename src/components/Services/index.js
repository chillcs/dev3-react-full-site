import React from 'react';
import {
	Section,
	Subtitle,
	Title,
	Content,
	Card,
	Icon,
	Text,
	Heading,
	Paragraph,
} from '../Services/Elements';
import icon1 from '../../images/design.png';
import icon2 from '../../images/develop.png';
import icon3 from '../../images/secure.png';

const Services = () => {
	return (
		<>
			<Section>
				<Subtitle>Services</Subtitle>
				<Title>Some text about the services we offer</Title>
				<Content>
					<Card>
						<Icon src={icon1} />
						<Text>
							<Heading>Design</Heading>
							<Paragraph>
								Our talented designers will bring your ideas to life
							</Paragraph>
						</Text>
					</Card>
					<Card>
						<Icon src={icon2} />
						<Text>
							<Heading>Develop</Heading>
							<Paragraph>
								Our skilled developers will turn the designs into code
							</Paragraph>
						</Text>
					</Card>
					<Card>
						<Icon src={icon3} />
						<Text>
							<Heading>Launch</Heading>
							<Paragraph>
								Upon rigerous QA and testing we will launch and go live
							</Paragraph>
						</Text>
					</Card>
				</Content>
			</Section>
		</>
	);
};

export default Services;
