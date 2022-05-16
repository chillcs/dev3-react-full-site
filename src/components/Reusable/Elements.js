import styled from 'styled-components';
import { Link as LinkRoute } from 'react-router-dom';

export const Logo = styled(LinkRoute)`
	text-decoration: none;
	outline: none;
	border: none;
	white-space: nowrap;
	padding: 5px 5px;
	color: var(--light);
	font-size: var(--h2);
	font-weight: 500;
	transition: all 0.15s ease-in-out;
	cursor: pointer;

	&:hover {
		color: var(--hover);
		transition: 0.15s ease-in-out;
	}
`;

export const Button = styled(LinkRoute)`
	text-decoration: none;
	outline: none;
	border: none;
	white-space: nowrap;
	background: var(--accent);
	color: var(--light);
	margin: 5px 5px;
	padding: 10px 25px;
	font-size: var(--h3);
	transition: all 0.15s ease-in-out;
	cursor: pointer;

	&:hover {
		transition: all 0.15s ease-in-out;
		background: var(--light);
		color: var(--accent);
	}
`;
