import React from 'react';

import {
	Section,
	Wrapper,
	Row,
	Column1,
	Column2,
	Text,
	Top,
	Title,
	Subtitle,
	ButtonBox,
	ImgWrap,
	Img,
} from './Elements';

import { Button } from '../Reusable/Elements';

const About = () => {
	return (
		<>
			<Section>
				<Wrapper>
					<Row>
						<Column1>
							<Text>
								<Top>Top</Top>
								<Title>Title</Title>
								<Subtitle>Subtitle</Subtitle>
								<ButtonBox>
									<Button to="home">Button</Button>
								</ButtonBox>
							</Text>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img />
							</ImgWrap>
						</Column2>
					</Row>
				</Wrapper>
			</Section>
		</>
	);
};

export default About;
