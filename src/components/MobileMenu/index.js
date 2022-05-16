import { Sidebar, Icon, Menu, Link } from './Elements';
import { Logo, Button } from '../Reusable/Elements';

const MobileMenu = ({ isOpen, toggle }) => {
	return (
		<Sidebar isOpen={isOpen}>
			<Icon onClick={toggle} />
			<Logo to="/" onClick={toggle}>
				dev3.ai
			</Logo>
			<Menu>
				<Link to="about" onClick={toggle}>
					About
				</Link>
				<Link to="services" onClick={toggle}>
					Services
				</Link>
				<Link to="portfolio" onClick={toggle}>
					Portfolio
				</Link>
				<Link to="contact" onClick={toggle}>
					Contact
				</Link>
			</Menu>
			<Button to="/upwork" onClick={toggle}>
				upwork
			</Button>
		</Sidebar>
	);
};

export default MobileMenu;
