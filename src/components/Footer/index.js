import React from 'react';
import {
	Section,
	Row,
	InfoColumn,
	Logo,
	Paragraph,
	IconBox,
	Icon,
	LinkColumn,
	LinkTitle,
	LinkItems,
	FooterLink,
	Copyright,
} from './Elements';

const Footer = () => {
	return (
		<>
			<Section>
				<Row>
					<InfoColumn>
						<Logo>dev3.ai</Logo>
						<Paragraph>
							Some text about the company and why you should work with us
							<br></br>
							<br></br>
							PO Box XXX<br></br>
							Some something<br></br>
							Something else<br></br>
						</Paragraph>
						<IconBox>
							<Icon>Upwork</Icon>
							<Icon>Github</Icon>
							<Icon>LinkedIn</Icon>
						</IconBox>
					</InfoColumn>
					<LinkColumn>
						<LinkTitle>about</LinkTitle>
						<LinkItems>
							<FooterLink to="/about">about</FooterLink>
							<FooterLink to="/technologies">technologies</FooterLink>
							<FooterLink to="/services">services</FooterLink>
							<FooterLink to="/portfolio">portfolio</FooterLink>
							<FooterLink to="/contact">contact</FooterLink>
						</LinkItems>
					</LinkColumn>
					<LinkColumn>
						<LinkTitle>more</LinkTitle>
						<LinkItems>
							<FooterLink to="/about">FAQ</FooterLink>
							<FooterLink to="/about">careers</FooterLink>
							<FooterLink to="/services">terms of service</FooterLink>
							<FooterLink to="/portfolio">privacy policy</FooterLink>
						</LinkItems>
					</LinkColumn>
				</Row>
				<Copyright>© 2022 Dev3.ai</Copyright>
			</Section>
		</>
	);
};

export default Footer;
