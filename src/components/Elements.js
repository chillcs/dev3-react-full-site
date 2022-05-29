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

export const BtnScroll = styled(Scroll)`
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

export const BtnRoute = styled(Route)`
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
	background: var(--medium);
`;

export const Heading = styled.div`
	color: var(--light);
	font-size: var(--h1);
	text-align: center;
	padding: 15px 0;
	@media screen and (max-width: 750px) {
		font-size: var(--h2);
	}
`;

export const Subheading = styled.div`
	color: var(--light);
	font-size: var(--h2);
	text-align: center;
	@media screen and (max-width: 750px) {
		font-size: var(--h3);
	}
`;

export const Title = styled.div`
	position: relative;
	padding: 10px 0;
	font-size: var(--h2);
	text-transform: uppercase;
	font-weight: 700;
	letter-spacing: 2px;
	@media screen and (max-width: 750px) {
		font-size: var(--h3);
	}
`;

export const Subtitle = styled.div`
	font-size: var(--h1);
	padding: 10px 0;
	@media screen and (max-width: 750px) {
		font-size: var(--h2);
	}
`;
