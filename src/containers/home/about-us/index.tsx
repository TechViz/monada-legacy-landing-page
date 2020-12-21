import React from 'react';
import styled from 'styled-components';
import ImageURLS from '../../../images';
import PersonCard from './person-card';

const Root = styled.div`
	min-height: 100vh;
	width: 100%;
	padding: 8px 86px;
	padding-top: calc(8px + ${props => props.theme.spacing.navbarHeight});
	padding-bottom: 2rem;
	position: relative;
	background-color: #EEEEEE;
`;

const Title = styled.h1`
	font-size: 40px;
	font-weight: 300;
	color: ${props => props.theme.colors.purple.main};
	margin: 0;
	margin-bottom: 4rem;
`;

const Strong = styled.strong`
	font-weight: 900;
`;

const CardsContainer = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: space-between;
`;

type HomeAboutUsProps = React.PropsWithoutRef<{}>;
type HomeAboutUsComponent = React.FunctionComponent<HomeAboutUsProps>;

const HomeAboutUs: HomeAboutUsComponent = () => {
	return (
		// Note: The ID is used by the navbar to scroll this element into view.
		<Root id='about-us'>
			<Title>
				Trabalhar com a <Strong>Mônada</Strong> já <br />
				é <Strong>promover D&I</Strong> na sua <br />
				empresa.
			</Title>
			<CardsContainer>
				<PersonCard
					imageURL={ImageURLS.founders.reijane}
					bgColor={colors => colors.yellow.main}
					name="Reiijane Salazar"
					profession="Educadora e Gerontóloga"
					positionAtMonada="Sócia Fundadora"
				/>
				<PersonCard
					imageURL={ImageURLS.founders.adla}
					bgColor={colors => colors.orange.main}
					name="Adla Viana"
					profession="Antropóloga"
					positionAtMonada="Sócia Fundadora"
				/>
				<PersonCard
					imageURL={ImageURLS.founders.maria}
					bgColor={colors => colors.pink.main}
					name="Maria Luiza Salvador"
					profession="Product (UX/UI) Designer"
					positionAtMonada="Sócia Fundadora"
				/>
				<PersonCard
					imageURL={ImageURLS.founders.jean}
					bgColor={colors => colors.green.main}
					name="Jean Sidharta"
					profession="Desenvolvedor Web"
					positionAtMonada="Colaborador"
				/>
			</CardsContainer>
		</Root>
	);
}

export default HomeAboutUs;