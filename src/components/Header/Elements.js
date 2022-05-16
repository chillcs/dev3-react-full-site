import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const Navbar = styled.div`
	z-index: 10;
	position: sticky;
	top: 0;
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: var(--dark);
`;

export const Nav = styled.nav`
	position: relative;
	width: 100%;
	max-width: 1100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 25px;
`;

export const MenuIcon = styled.div`
	display: none;

	@media screen and (max-width: 750px) {
		display: block;
		margin-top: 5px;
		padding: 5px 5px;
		color: var(--light);
		font-size: var(--h2);
		transition: 0.15s ease-in-out;
		cursor: pointer;

		&:hover {
			color: var(--hover);
			transition: 0.15s ease-in-out;
		}
	}
`;

export const Menu = styled.ul`
	list-style: none;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	@media screen and (max-width: 750px) {
		display: none;
	}
`;

export const Link = styled(LinkScroll)`
	text-decoration: none;
	padding: 5px 15px;
	color: var(--light);
	font-size: var(--h3);
	transition: 0.15s ease-in-out;
	cursor: pointer;

	&:hover {
		color: var(--hover);
		transition: 0.15s ease-in-out;
	}

	&.active {
		border-bottom: 3px solid var(--accent);
	}
`;

export const ButtonBox = styled.div`
	@media screen and (max-width: 750px) {
		display: none;
	}
`;
