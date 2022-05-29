import { Link as Scroll } from 'react-scroll';
import { Link as Route } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = styled(Route)`
	text-decoration: none;
	outline: none;
	border: none;
	white-space: nowrap;
	padding: 5px 5px;
	color: ${({ darkmode }) => (darkmode ? 'var(--light)' : 'var(--dark)')};
	font-size: var(--h2);
	font-weight: 500;
	transition: all 0.15s ease-in-out;
	cursor: pointer;
	&:hover {
		color: var(--hover);
		transition: 0.15s ease-in-out;
	}
`;

export const BtnS = styled(Scroll)`
	text-decoration: none;
	outline: none;
	border: none;
	white-space: nowrap;
	background: var(--accent);
	color: var(--light);
	margin: 5px 0;
	padding: 10px 25px;
	font-size: var(--h3);
	border-radius: 0px;
	transition: all 0.15s ease-in-out;
	cursor: pointer;
	&:hover {
		transition: all 0.15s ease-in-out;
		background: var(--hover);
	}
`;

export const BtnR = styled(Route)`
	text-decoration: none;
	outline: none;
	border: none;
	white-space: nowrap;
	background: var(--accent);
	color: var(--light);
	margin: 5px 0;
	padding: 10px 25px;
	font-size: var(--h3);
	border-radius: 0px;
	transition: all 0.15s ease-in-out;
	cursor: pointer;
	&:hover {
		transition: all 0.15s ease-in-out;
		background: var(--hover);
	}
`;

export const Section = styled.div`
	min-height: calc(100vh - var(--header));
	width: 100%;
	margin: 0 auto;
	padding: 75px 0;
	background: ${(props) => props.background};
`;

export const Wrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	padding: 0 15px;
`;

export const Heading = styled.div`
	color: var(--light);
	font-size: var(--h1);
	padding: 15px 0;
`;

export const Subheading = styled.div`
	color: var(--light);
	font-size: var(--h2);
`;

export const Title = styled.div`
	color: ${(props) => props.color};
	font-size: var(--h2);
	text-transform: uppercase;
	font-weight: 700;
	letter-spacing: 2px;
`;

export const Subtitle = styled.div`
	color: ${(props) => props.color};
	font-size: var(--h1);
	@media screen and (max-width: 500px) {
		font-size: var(--h2);
	}
`;
