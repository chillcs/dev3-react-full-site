import { Logo, Button } from './Elements';
import { FiX } from 'react-icons/fi';
import { Link as Scroll, animateScroll } from 'react-scroll';
import mainMenu from './Nav/Main.json';
import styled from 'styled-components';

const MobileMenu = ({ isOpen, toggle }) => {
	const goHome = () => {
		animateScroll.scrollToTop();
		toggle();
	};

	return (
		<>
			<Sidebar isOpen={isOpen}>
				<Icon onClick={toggle} />
				<Logo to="/" onClick={goHome}>
					dev3.ai
				</Logo>
				<Menu>
					{mainMenu.map((navitem) => {
						return (
							<Link
								key={navitem.id}
								to={navitem.to}
								spy={true}
								smooth={true}
								exact="true"
								offset={-80}
								duration={500}
								onClick={toggle}
							>
								{navitem.title}
							</Link>
						);
					})}
				</Menu>
				<Button to="/upwork" onClick={toggle}>
					upwork
				</Button>
			</Sidebar>
		</>
	);
};

export default MobileMenu;

/* Styles --- */

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
	gap: 10%;
	background: var(--medium);
	transition: 0.3s ease-in-out;
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
`;

export const Icon = styled(FiX)`
	position: absolute;
	top: 20px;
	right: 25px;
	margin-top: 5px;
	color: var(--dark);
	font-size: var(--h2);
	transition: 0.15s ease-in-out;
	cursor: pointer;
	&:hover {
		color: var(--hover);
		transition: 0.15s ease-in-out;
	}
	@media screen and (max-width: 750px) {
		font-size: var(--h2);
	}
`;

export const Menu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 15px;
	color: var(--dark);
`;

export const Link = styled(Scroll)`
	padding: 5px 50px;
	font-size: var(--h3);
	transition: 0.15s ease-in-out;
	cursor: pointer;
	&:hover {
		color: var(--hover);
		transition: 0.15s ease-in-out;
	}
`;
