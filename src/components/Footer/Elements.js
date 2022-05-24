import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.div`
	background: var(--light);
`;

export const Row = styled.div`
	padding: 48px 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1100px;
	margin: 0 auto;
`;

export const InfoColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

export const LinkColumn = styled.div`
	display: flex;
	justify-content: center;
	@media screen and (max-width: 750px) {
		padding-top: 32px;
	}
`;

export const Logo = styled.div`
	font-size: var(--h3);
`;

export const Paragraph = styled.div`
	font-size: var(--p);
`;

export const IconBox = styled.div`
	display: flex;
`;

export const Icon = styled.div`
	width: 25px;
	height: 25px;
`;

export const LinkTitle = styled.div`
	font-size: var(--h2);
`;

export const LinkItems = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 16px;
	text-align: left;
	width: 160px;
	box-sizing: border-box;
	color: #fff;
	@media screen and (max-width: 750px) {
		margin: 0;
		padding: 10px;
		width: 100%;
	}
`;

export const FooterLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	margin-bottom: 0.5rem;
	font-size: 14px;
	transition: 0.15s ease-in-out;
	&:hover {
		color: var(--hover);
		transition: 0.15s ease-in-out;
	}
`;
