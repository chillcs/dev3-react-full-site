import { Navbar } from './Header';
import { Logo } from './Elements';

const LogoBar = () => {
	return (
		<>
			<Navbar>
				<Logo to="/">dev3.ai</Logo>
			</Navbar>
		</>
	);
};

export default LogoBar;
