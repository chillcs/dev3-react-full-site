import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import Hero from '../components/Hero';
import ImageText from '../components/ImageText';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useState } from 'react';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Header toggle={toggle} darkmode={0} />
			<MobileMenu isOpen={isOpen} toggle={toggle} />
			<Hero
				id="hero"
				heading="dev3.ai"
				subheading="Shopify web development"
				buttonText="Learn more"
			/>
			<ImageText
				id="about"
				imageFirst={false}
				alternateBG={false}
				title="About Us"
				subtitle="We are a full service Shopify development agency"
				buttonText="Let's chat"
				image="../../images/shop.png"
				alt="responsive design"
			/>
			<ImageText
				id="technologies"
				imageFirst={true}
				alternateBG={true}
				title="Technologies"
				subtitle="Specializing in HTML, CSS, JavaScript, Liquid, and React"
				buttonText="Let's chat"
				image="../../images/code.png"
				alt="programming languages"
			/>
			<Services
				id="services"
				title="Services"
				subtitle="Taking businesses to the next level"
			/>
			<Portfolio
				id="portfolio"
				title="Portfolio"
				subtitle="Have a glimpse at our latest work"
			/>
			<Contact id="contact" title="Contact" subtitle="Let's get in touch!" />
			<Footer />
		</>
	);
};

export default Home;
