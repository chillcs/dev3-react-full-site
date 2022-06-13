import { Section, Wrapper, Title, Subtitle, BtnR } from './Elements';
import slides from './Slides/Portfolio.json';
import styled from 'styled-components';
import React from 'react';

const Portfolio = (props) => {
	const [active, setActive] = React.useState(0);
	const slideLeft = () => {
		setActive(active === 0 ? slides.length - 1 : active - 1);
	};
	const slideRight = () => {
		setActive(active === slides.length - 1 ? 0 : active + 1);
	};
	const selectSlide = (slide) => {
		const id = parseInt(slide.target.id);
		setActive(active === id ? active : id);
	};
	return (
		<>
			<Section id={props.id} background={props.background}>
				<Wrapper>
					<TitleBox>
						<Title color={props.color}>{props.title}</Title>
						<Subtitle color={props.color}>{props.subtitle}</Subtitle>
					</TitleBox>
					<Slider>
						<Controls>
							<BtnSlide onClick={slideLeft}>‹</BtnSlide>
							<BtnSlide onClick={slideRight}>›</BtnSlide>
						</Controls>
						{slides.map((slide) => {
							return (
								<Slide
									className={
										slide.id === active ? 'slide slide--active' : 'slide'
									}
									key={slide.id}
								>
									<HeadingBox>
										<Date>{slide.date}</Date>
										<Heading>{slide.title}</Heading>
									</HeadingBox>
									<Content>
										<Image
											src={require(`../images/${slide.image}`)}
											alt={slide.alt}
										/>
										<Description>{slide.description}</Description>
										<ButtonBox>
											<BtnR to={slide.github} target="_blank" rel="noreferrer">
												Code
											</BtnR>
											<BtnR to={slide.test} target="_blank" rel="noreferrer">
												Test
											</BtnR>
										</ButtonBox>
									</Content>
								</Slide>
							);
						})}
					</Slider>
					<Bars>
						{slides.map((slide) => {
							return (
								<Bar
									className={slide.id === active ? 'bar bar--active' : 'bar'}
									key={slide.id}
									id={slide.id}
									onClick={selectSlide}
								></Bar>
							);
						})}
					</Bars>
				</Wrapper>
			</Section>
		</>
	);
};

export default Portfolio;

/* Styles --- */

export const TitleBox = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Slider = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	margin: 15px 0;
`;

export const Controls = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	justify-content: flex-end;
	z-index: 5;
`;

export const BtnSlide = styled.div`
	user-select: none;
	text-decoration: none;
	outline: none;
	border: none;
	white-space: nowrap;
	background: var(--accent);
	color: var(--light);
	min-width: 60px;
	margin-left: 10px;
	padding: 8px 20px 10px 20px;
	font-size: var(--h2);
	text-align: center;
	border-radius: 0px;
	transition: all 0.15s ease-in-out;
	cursor: pointer;
	&:hover {
		transition: all 0.15s ease-in-out;
		background: var(--hover);
	}
`;

export const Slide = styled.div``;

export const HeadingBox = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	width: 60%;
	margin-bottom: 15px;
`;

export const Date = styled.div`
	font-size: var(--h3);
`;

export const Heading = styled.div`
	font-size: var(--h3);
`;

export const Content = styled.div``;

export const Image = styled.img`
	width: 100%;
	height: 250px;
	object-fit: cover;
	object-position: center;
	margin-bottom: 15px;
	z-index: 20;
	@media screen and (max-width: 750px) {
		height: 200px;
	}
	@media screen and (max-width: 500px) {
		height: 175px;
	}
`;

export const Description = styled.div`
	font-size: var(--p);
	margin-bottom: 15px;
`;

export const ButtonBox = styled.div`
	display: flex;
	margin-bottom: 20px;
`;

export const Bars = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 10px;
	width: 100%;
`;

export const Bar = styled.div``;
