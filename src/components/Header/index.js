import { Navbar, Nav, MenuIcon, Menu, Link, ButtonBox } from './Elements';
import { Logo, Button } from '../Reusable/Elements';
import { FiMenu } from 'react-icons/fi';

const Header = ({ toggle }) => {
	return (
		<>
			<Navbar>
				<Nav>
					<Logo to="/">dev3.ai</Logo>
					<MenuIcon onClick={toggle}>
						<FiMenu />
					</MenuIcon>
					<Menu>
						<Link to="about">about</Link>
						<Link to="services">services</Link>
						<Link to="portfolio">portfolio</Link>
						<Link to="contact">contact</Link>
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
