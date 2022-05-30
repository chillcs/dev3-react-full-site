import { Section, Wrapper, Title, Subtitle, BtnS } from './Elements';
import icon1 from './../images/design.png';
import icon2 from './../images/develop.png';
import icon3 from './../images/secure.png';
import styled from 'styled-components';

const Services = (props) => {
	return (
		<>
			<Section id={props.id} background={props.background}>
				<Wrapper>
					<TitleBox>
						<Title color={props.color}>{props.title}</Title>
						<Subtitle color={props.color}>{props.subtitle}</Subtitle>
					</TitleBox>
					<Cards>
						<Card>
							<Icon src={icon1} />
							<CardText>
								<Heading>Design</Heading>
								<Paragraph>
									Our talented designers will bring your ideas to life
								</Paragraph>
							</CardText>
						</Card>
						<Card>
							<Icon src={icon2} />
							<CardText>
								<Heading>Develop</Heading>
								<Paragraph>
									Our skilled developers will turn the designs into code
								</Paragraph>
							</CardText>
						</Card>
						<Card>
							<Icon src={icon3} />
							<CardText>
								<Heading>Launch</Heading>
								<Paragraph>
									Upon rigerous QA and testing we launch and go live
								</Paragraph>
							</CardText>
						</Card>
					</Cards>
					<ButtonBox>
						<BtnS
							to="contact"
							smooth="true"
							exact="true"
							offset={-65}
							duration={500}
						>
							{props.btnText}
						</BtnS>
					</ButtonBox>
				</Wrapper>
			</Section>
		</>
	);
};

export default Services;

/* Styles --- */

export const TitleBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin: auto;
	@media screen and (max-width: 1000px) {
		width: 80%;
	}
	@media screen and (max-width: 500px) {
		width: 100%;
	}
`;

export const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 50px 0;
	gap: 35px;
	@media screen and (max-width: 675px) {
		flex-direction: column;
	}
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 300px;
	padding: 25px 50px;
	background: var(--light);
	transition: all 0.15s ease-in-out;
	cursor: pointer;
	&:hover {
		transform: scale(1.02);
		transition: all 0.15s ease-in-out;
	}
	@media screen and (max-width: 675px) {
		flex-direction: row;
		justify-content: space-between;
		width: 80%;
		padding: 25px 35px;
	}
`;

export const Icon = styled.img`
	width: 80%;
	margin-bottom: 10px;
	@media screen and (max-width: 675px) {
		width: 40%;
	}
`;

export const CardText = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 675px) {
		width: 50%;
	}
`;

export const Heading = styled.div`
	margin-bottom: 10px;
	font-size: var(--h2);
	font-weight: 500;
	color: var(--accent);
`;

export const Paragraph = styled.div`
	font-size: var(--p);
	color: var(--dark);
`;

export const ButtonBox = styled.div`
	display: flex;
	justify-content: center;
`;
