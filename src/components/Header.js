import { Logo, Button } from './Elements';
import { FiMenu } from 'react-icons/fi';
import { Link as Scroll, animateScroll } from 'react-scroll';
import navMain from './Nav/Main.json';
import styled from 'styled-components';

const Header = ({ toggle, darkmode }) => {
	const goHome = () => {
		animateScroll.scrollToTop();
	};

	return (
		<>
			<Navbar darkmode={darkmode}>
				<Nav>
					<Logo to="/" onClick={goHome} darkmode={darkmode}>
						dev3.ai
					</Logo>
					<MenuIcon onClick={toggle} darkmode={darkmode}>
						<FiMenu />
					</MenuIcon>
					<Menu darkmode={darkmode}>
						{navMain.map((navitem) => {
							return (
								<Link
									key={navitem.id}
									to={navitem.to}
									spy={true}
									smooth={true}
									offset={-80}
									duration={500}
								>
									{navitem.title}
								</Link>
							);
						})}
					</Menu>
					<ButtonBox>
						<Button to="/upwork">upwork</Button>
					</ButtonBox>
				</Nav>
			</Navbar>
		</>
	);
};

export default Header;

/* Styles --- */

export const Navbar = styled.div`
	z-index: 10;
	position: sticky;
	top: 0;
	width: 100%;
	height: var(--header);
	margin-top: calc(var(--header) * -1);
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ darkmode }) => (darkmode ? 'var(--dark)' : 'var(--light)')};
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
`;

export const Nav = styled.nav`
	position: relative;
	width: 100%;
	max-width: 1100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 20px;
`;

export const MenuIcon = styled.div`
	display: none;
	@media screen and (max-width: 750px) {
		display: block;
		margin-top: 5px;
		padding: 5px 5px;
		color: ${({ darkmode }) => (darkmode ? 'var(--light)' : 'var(--dark)')};
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
	color: ${({ darkmode }) => (darkmode ? 'var(--light)' : 'var(--dark)')};
	@media screen and (max-width: 750px) {
		display: none;
	}
`;

export const Link = styled(Scroll)`
	text-decoration: none;
	padding: 5px 15px;
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
	margin: 0 5px;
	@media screen and (max-width: 750px) {
		display: none;
	}
`;
