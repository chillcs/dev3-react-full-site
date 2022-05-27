import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.div`
	background: var(--light);
`;

export const Row = styled.div`
	display: flex;
	max-width: 1100px;
	margin: auto;
	padding: 50px 10px;
	@media screen and (max-width: 600px) {
		flex-direction: column;
	}
`;

export const InfoColumn = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	padding: 10px 15px;
	@media screen and (max-width: 600px) {
		flex-direction: column;
		width: 100%;
	}
`;

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	width: 25%;
	padding: 10px 15px;
	@media screen and (max-width: 600px) {
		flex-direction: column;
		width: 100%;
	}
`;

export const Logo = styled.div`
	font-size: var(--h3);
	margin: 15px 0;
`;

export const Paragraph = styled.div`
	max-width: 80%;
	font-size: var(--small);
`;

export const IconBox = styled.div`
	display: flex;
	margin: 15px 0;
`;

export const Icon = styled.div`
	padding: 0 15px;
`;

export const LinkTitle = styled.div`
	font-size: var(--h3);
	margin: 15px 0;
`;

export const LinkItems = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 750px) {
	}
`;

export const FooterLink = styled(Link)`
	padding: 5px 10px;
	font-size: var(--small);
	color: var(--dark);
	transition: 0.15s ease-in-out;
	&:hover {
		color: var(--hover);
		transition: 0.15s ease-in-out;
	}
`;

export const Copyright = styled.div`
	width: 100%;
	padding-bottom: 25px;
	font-size: var(--xs);
	text-align: center;
`;
