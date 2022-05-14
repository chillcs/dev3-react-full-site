import { Link } from 'react-router-dom';
import Nav from './Nav';

function Header() {
	return (
		<>
			<div className="top-bar">
				<p>Announcement</p>
			</div>
			<div className="header">
				<Link to="/" activeClassName="active" exact>
					<li>Dev3</li>
				</Link>
				<Nav />
			</div>
		</>
	);
}

export default Header;
