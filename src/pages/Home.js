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
				btnText="Learn more"
			/>
			<ImageText
				id="about"
				imageFirst={false}
				background="var(--light)"
				color="var(--dark)"
				title="About Us"
				subtitle="We are a full service Shopify development agency"
				btnText="Let's chat"
				image="shop.png"
				alt="responsive design"
			/>
			<ImageText
				id="technologies"
				imageFirst={true}
				background="var(--medium)"
				color="var(--dark)"
				title="Technologies"
				subtitle="Specializing in HTML, CSS, JavaScript, Liquid, and React"
				btnText="Let's chat"
				image="code.png"
				alt="programming languages"
			/>
			<Services
				id="services"
				background="var(--dark)"
				color="var(--light)"
				title="Services"
				subtitle="It's what we do best"
				btnText="Let's chat"
			/>
			<Portfolio
				id="portfolio"
				background="var(--light)"
				color="var(--dark)"
				title="Portfolio"
				subtitle="Have a glimpse at our latest work"
			/>
			<Contact id="contact" title="Contact" subtitle="Let's get in touch!" />
			<Footer />
		</>
	);
};

export default Home;
