import Header from '../components/Header/index';
import MobileMenu from '../components/MobileMenu/index';
import Hero from '../components/Hero/index';
import Section from '../components/Sections/index';
import { about, services, portfolio } from '../components/Sections/Data';
import React, { useState } from 'react';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Header toggle={toggle} darkmode={0} />
			<MobileMenu isOpen={isOpen} toggle={toggle} />
			<Hero />
			<Section {...about} />
			<Section {...services} />
			<Section {...portfolio} />
		</>
	);
};

export default Home;
