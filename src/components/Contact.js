import { Title, Subtitle } from './Elements';
import styled from 'styled-components';

const Contact = (props) => {
	return (
		<>
			<Section id={props.id}>
				<Title>{props.title}</Title>
				<Subtitle>{props.subtitle}</Subtitle>
				<Content></Content>
			</Section>
		</>
	);
};

export default Contact;

/* Styles --- */

export const Section = styled.div`
	background: ${({ alternateBG }) =>
		alternateBG ? 'var(--medium)' : 'var(--light)'};
`;

export const Content = styled.div`
	width: 100px;
	height: 100px;
	background: red;
`;
