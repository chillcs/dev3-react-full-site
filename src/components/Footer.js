import { Logo } from './Elements';
import { Link as Scroll, animateScroll } from 'react-scroll';
import { Link as Route } from 'react-router-dom';
import footer1 from './Nav/Footer1.json';
import footer2 from './Nav/Footer2.json';
import styled from 'styled-components';

const Footer = () => {
	const goHome = () => {
		animateScroll.scrollToTop();
	};

	return (
		<>
			<Section>
				<Row>
					<InfoColumn>
						<Logo to="/" onClick={goHome}>
							dev3.ai
						</Logo>
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
							{footer1.map((navitem) => {
								return (
									<FooterScroll
										key={navitem.id}
										to={navitem.to}
										smooth="true"
										exact="true"
										offset={-65}
										duration={500}
									>
										{navitem.title}
									</FooterScroll>
								);
							})}
						</LinkItems>
					</LinkColumn>
					<LinkColumn>
						<LinkTitle>more</LinkTitle>
						<LinkItems>
							{footer2.map((navitem) => {
								return (
									<FooterRoute
										key={navitem.id}
										to={navitem.to}
										smooth="true"
										exact="true"
										offset={-65}
										duration={500}
									>
										{navitem.title}
									</FooterRoute>
								);
							})}
						</LinkItems>
					</LinkColumn>
				</Row>
				<Copyright>© 2022 Dev3.ai</Copyright>
			</Section>
		</>
	);
};

export default Footer;

/* Styles --- */

export const Section = styled.div`
	background: var(--light);
`;

export const Row = styled.div`
	display: flex;
	max-width: 1000px;
	margin: auto;
	padding: 50px 15px;
	@media screen and (max-width: 600px) {
		flex-direction: column;
		text-align: center;
	}
`;

export const InfoColumn = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	padding: 10px 0;
	@media screen and (max-width: 600px) {
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
`;

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	width: 25%;
	padding: 10px 15px;
	@media screen and (max-width: 600px) {
		flex-direction: column;
		width: 100%;
	}
`;

export const Paragraph = styled.div`
	max-width: 80%;
	padding: 10px 5px;
	font-size: var(--small);
`;

export const IconBox = styled.div`
	display: flex;
	margin: 15px 0;
	padding: 0 5px;
`;

export const Icon = styled.div`
	margin-right: 15px;
	@media screen and (max-width: 600px) {
		margin: 0 15px;
	}
`;

export const LinkTitle = styled.div`
	font-size: var(--h3);
	margin: 15px 0;
`;

export const LinkItems = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FooterScroll = styled(Scroll)`
	padding: 5px 0px;
	font-size: var(--small);
	color: var(--dark);
	transition: 0.15s ease-in-out;
	&:hover {
		color: var(--hover);
		transition: 0.15s ease-in-out;
		padding-left: 5px;
	}
`;

export const FooterRoute = styled(Route)`
	padding: 5px 0px;
	font-size: var(--small);
	color: var(--dark);
	transition: 0.15s ease-in-out;
	&:hover {
		color: var(--hover);
		transition: 0.15s ease-in-out;
		padding-left: 5px;
	}
`;

export const Copyright = styled.div`
	width: 100%;
	padding-bottom: 25px;
	font-size: var(--xs);
	text-align: center;
`;
