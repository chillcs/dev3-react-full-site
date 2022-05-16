import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { FiX } from 'react-icons/fi';

export const Sidebar = styled.aside`
	z-index: 100;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 15%;
	background: var(--dark);
	transition: 0.3s ease-in-out;
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
`;

export const Icon = styled(FiX)`
	position: absolute;
	top: 20px;
	right: 25px;
	margin-top: 5px;
	color: var(--light);
	font-size: var(--h2);
	transition: 0.15s ease-in-out;
	cursor: pointer;

	&:hover {
		color: var(--hover);
		transition: 0.15s ease-in-out;
	}
`;

export const Menu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 25px;
`;

export const Link = styled(LinkScroll)`
	padding: 5px 50px;
	color: var(--light);
	font-size: var(--h3);
	transition: 0.15s ease-in-out;
	cursor: pointer;

	&:hover {
		color: var(--hover);
		transition: 0.15s ease-in-out;
	}
`;
