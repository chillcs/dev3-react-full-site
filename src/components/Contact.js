import { Section, Wrapper, Title, Subtitle } from './Elements';
import styled from 'styled-components';

const Contact = (props) => {
	return (
		<>
			<Section id={props.id} background={props.background}>
				<Wrapper>
					<Title>{props.title}</Title>
					<Subtitle>{props.subtitle}</Subtitle>
					<Content></Content>
				</Wrapper>
			</Section>
		</>
	);
};

export default Contact;

/* Styles --- */

export const Content = styled.div`
	width: 100px;
	height: 100px;
	background: red;
`;
