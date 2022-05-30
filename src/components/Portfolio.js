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
							<BtnLeft onClick={slideLeft}>‹</BtnLeft>
							<BtnRight onClick={slideRight}>›</BtnRight>
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
	width: 40%;
	height: 50px;
	z-index: 5;
`;

export const BtnLeft = styled.div`
	background: var(--gradient2);
	border: 1px solid var(--color2);
	color: var(--color2);
	font-size: 18px;
	letter-spacing: 1px;
	width: 100px;
	margin: 20px 0;
	margin-right: 5px;
	padding: 15px 25px;
	cursor: pointer;
	font-size: 35px;
	font-weight: 100;
	width: 50%;
	height: 100%;
	margin: 0;
	margin-left: 10px;
	padding: 0;
	padding-bottom: 3px;
`;

export const BtnRight = styled.div`
	background: var(--gradient2);
	border: 1px solid var(--color2);
	color: var(--color2);
	font-size: 18px;
	letter-spacing: 1px;
	width: 100px;
	margin: 20px 0;
	margin-right: 5px;
	padding: 15px 25px;
	cursor: pointer;
	font-size: 35px;
	font-weight: 100;
	width: 50%;
	height: 100%;
	margin: 0;
	margin-left: 10px;
	padding: 0;
	padding-bottom: 3px;
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
	height: 400px;
	object-fit: cover;
	object-position: center;
	margin-bottom: 15px;
	z-index: 20;
`;

export const Description = styled.div`
	font-size: var(--p);
`;

export const ButtonBox = styled.div`
	display: flex;
`;

export const Bars = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 10px;
	width: 100%;
`;

export const Bar = styled.div``;
