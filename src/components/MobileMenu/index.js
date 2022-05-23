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
					about us
				</Link>
				<Link to="technologies" onClick={toggle}>
					technologies
				</Link>
				<Link to="services" onClick={toggle}>
					services
				</Link>
				<Link to="portfolio" onClick={toggle}>
					our work
				</Link>
				<Link to="contact" onClick={toggle}>
					let's chat
				</Link>
			</Menu>
			<Button to="/upwork" onClick={toggle}>
				upwork
			</Button>
		</Sidebar>
	);
};

export default MobileMenu;
