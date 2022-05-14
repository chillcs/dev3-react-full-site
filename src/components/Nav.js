import { Link } from 'react-router-dom';

function Nav() {
	return (
		<>
			<nav className="nav">
				<Link to="/about">
					<li>About</li>
				</Link>
				<Link to="/portfolio">
					<li>Portfolio</li>
				</Link>
				<Link to="/contact">
					<li>Contact</li>
				</Link>
			</nav>
		</>
	);
}

export default Nav;
