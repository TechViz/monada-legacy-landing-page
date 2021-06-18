import React from 'react';
import styled from 'styled-components';
import ContactFormSpacing from '../../../components/reusable/contact-form-spacing';
import NavbarSpacing from '../../../components/reusable/navbar-spacing';
import Images from '../../../images';

const Root = styled.div`
	width: 100%;
	display: flex;
`;

const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 64px;
`;

const HeroImage = styled(Images.HeroImage)`
	width: 673px;
	height: 366px;
`;

const Title = styled.p`
	color: ${props => props.theme.colors.white.full};
	font-size: 30px;
	width: 673px;
`;

type HomeHeaderProps = React.PropsWithoutRef<{}>;

type HomeHeaderComponent = React.FunctionComponent<HomeHeaderProps>;

const HomeHeader: HomeHeaderComponent = ({}) => {
	return (
		<Root>
			<Content>
				<NavbarSpacing />
				<HeroImage />
				<Title>
					Conheça nossa plataforma de análise da dados para otimizar investimentos de impacto.
				</Title>
			</Content>
			<ContactFormSpacing />
		</Root>
	);
};

export default HomeHeader;
