import { Title, Subtitle, BtnScroll } from './Elements';
import styled from 'styled-components';

const InfoSection = (props) => {
	return (
		<>
			<Section id={props.id} alternateBG={props.alternateBG}>
				<Row imageFirst={props.imageFirst}>
					<Column>
						<Text>
							<Title>{props.title}</Title>
							<Subtitle>{props.subtitle}</Subtitle>
						</Text>
						<ButtonBox>
							<BtnScroll
								to="contact"
								smooth="true"
								exact="true"
								offset={-65}
								duration={500}
							>
								{props.btnText}
							</BtnScroll>
						</ButtonBox>
					</Column>
					<Column>
						<Image src={props.image} alt={props.alt} />
					</Column>
				</Row>
			</Section>
		</>
	);
};

export default InfoSection;

/* Styles --- */

export const Section = styled.div`
	background: ${({ alternateBG }) =>
		alternateBG ? 'var(--medium)' : 'var(--light)'};
`;

export const Row = styled.div`
	display: flex;
	flex-direction: ${({ imageFirst }) => (imageFirst ? 'row-reverse' : 'row')};
	justify-content: space-between;
	align-items: center;
	min-height: calc(100vh - var(--header));
	width: 100%;
	max-width: 1100px;
	margin: auto;
	padding: 25px 0;
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
	color: var(--dark);
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
