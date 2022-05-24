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
						</Paragraph>
						<IconBox>
							<Icon>Upwork</Icon>
							<Icon>Github</Icon>
							<Icon>LinkedIn</Icon>
						</IconBox>
					</InfoColumn>
					<LinkColumn>
						<LinkTitle>company</LinkTitle>
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
			</Section>
		</>
	);
};

export default Footer;
