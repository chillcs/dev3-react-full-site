import Header from '../components/Header/index';
import MobileMenu from '../components/MobileMenu/index';
import Hero from '../components/Hero/index';
import Section from '../components/Sections/index';
import { about, technologies } from '../components/Sections/Data';
import Services from '../components/Services';
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
			<Section {...technologies} />
			<Services />
		</>
	);
};

export default Home;
