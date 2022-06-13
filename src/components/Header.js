import { Logo, BtnS } from './Elements';
import { FiMenu } from 'react-icons/fi';
import { Link as Scroll, animateScroll } from 'react-scroll';
import main from './Nav/Main.json';
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
						{main.map((navitem) => {
							return (
								<Link
									key={navitem.id}
									to={navitem.to}
									smooth="true"
									exact="true"
									offset={-65}
									duration={500}
									spy={true}
								>
									{navitem.title}
								</Link>
							);
						})}
					</Menu>
					<ButtonBox>
						<BtnS
							to="contact"
							smooth="true"
							exact="true"
							offset={-65}
							duration={500}
						>
							Let's chat
						</BtnS>
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
	opacity: 95%;
`;

export const Nav = styled.nav`
	position: relative;
	width: 100%;
	max-width: 1000px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 10px;
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
	position: absolute;
	top: 50%;
	left: 50%;
	min-width: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
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
		margin-bottom: 5px;
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
