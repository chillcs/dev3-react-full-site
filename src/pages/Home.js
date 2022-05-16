import Header from '../components/Header/index';
import MobileMenu from '../components/MobileMenu/index';
import React, { useState } from 'react';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Header toggle={toggle} />
			<MobileMenu isOpen={isOpen} toggle={toggle} />
		</>
	);
};

export default Home;
