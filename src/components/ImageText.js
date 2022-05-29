import { Section, Wrapper, Title, Subtitle, BtnS } from './Elements';
import styled from 'styled-components';

const ImageText = (props) => {
	return (
		<>
			<Section id={props.id} background={props.background}>
				<Wrapper>
					<Row imageFirst={props.imageFirst}>
						<Column imageFirst={props.imageFirst}>
							<Title color={props.color}>{props.title}</Title>
							<Subtitle color={props.color}>{props.subtitle}</Subtitle>
							<ButtonBox imageFirst={props.imageFirst}>
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
						</Column>
						<Column>
							<Image
								src={require(`../images/${props.image}`)}
								alt={props.alt}
							/>
						</Column>
					</Row>
				</Wrapper>
			</Section>
		</>
	);
};

export default ImageText;

/* Styles --- */

export const Row = styled.div`
	display: flex;
	flex-direction: ${(props) => (props.imageFirst ? 'row-reverse' : 'row')};
	justify-content: space-between;
	align-items: center;
	@media screen and (max-width: 1000px) {
		flex-direction: column;
		gap: 75px;
	}
	@media screen and (max-width: 500px) {
		flex-direction: column;
		gap: 50px;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 45%;
	gap: 15px;
	@media screen and (max-width: 1000px) {
		text-align: ${(props) => (props.imageFirst ? 'right' : 'left')};
		width: 80%;
		gap: 25px;
	}
	@media screen and (max-width: 500px) {
		width: 100%;
		gap: 15px;
	}
`;

export const ButtonBox = styled.div`
	display: flex;
	@media screen and (max-width: 1000px) {
		flex-direction: ${(props) => (props.imageFirst ? 'row-reverse' : 'row')};
	}
`;

export const Image = styled.img`
	width: 100%;
	margin: 0 auto;
	@media screen and (max-width: 1000px) {
		width: 60%;
	}
	@media screen and (max-width: 500px) {
		width: 80%;
	}
`;
