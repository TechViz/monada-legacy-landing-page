import React from 'react';
import styled from 'styled-components';
import Images, { BaseImage } from '../../../constants/images';
import ImageURLS from '../../../images';

const Root = styled.div`
	min-height: 100vh;
	background-color: ${props => props.theme.colors.purple.main};
	color: white;
	padding:
		calc(3rem + ${props => props.theme.spacing.navbarHeight})
		${props => props.theme.spacing.horizontalPadding}
		3rem
		${props => props.theme.spacing.horizontalPadding}
	;
	display: flex;
	justify-content: space-between;
`;

const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Title = styled.h1`
	font-size: 50px;
	font-weight: 300;
	margin: 0;
`;

const CoffeeCup = styled(Images.Misc.CoffeeCup).attrs({ alt: 'Home' })`
	width: 450px;
	height: auto;
`;

const Contact = styled.div`
	width: min-content;
`;

const Email = styled.a`
	font-size: 30px;
	color: white;
`;

const Footer = styled.div`
	font-size: 22.5px;
	font-weight: 300;
`;

const SocialNetworkContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-top: 1.5rem;
`;

const Logos = styled(BaseImage)`
	width: 74px;
	height: 74px;
`;

const Italic = styled.span`
	font-style: italic;
`;

const Linkedin = styled(Logos).attrs({ src: ImageURLS.misc.linkedin, alt: 'linkedin' })``;
const Facebook = styled(Logos).attrs({ src: ImageURLS.misc.facebook, alt: 'facebook' })``;
const Instagram = styled(Logos).attrs({ src: ImageURLS.misc.instagram, alt: 'instagram' })``;

type HomeContactProps = React.PropsWithoutRef<{
}>;
1
type HomeContactComponent = React.FunctionComponent<HomeContactProps>;

const HomeContact: HomeContactComponent = ({  }) => {
	return (
		// Note: The ID is used by the navbar to scroll this element into view.
		<Root id='contact'>
			<LeftSide>
				<Title>
					Vamos marcar um<br/>
					cafezinho virtual?
				</Title>
				<Contact>
					<Email href="mailto: monada.tech@gmail.com">monada.tech@gmail.com</Email>
					<SocialNetworkContainer>
						<a rel="noopener" target="_blank" href="https://www.linkedin.com/company/monada-tech/"><Linkedin /></a>
						<a rel="noopener" target="_blank" href="https://www.instagram.com/monada.tech/"><Instagram /></a>
						<a rel="noopener" target="_blank" href="https://www.facebook.com/M%C3%B4nada-107716481140676"><Facebook /></a>
					</SocialNetworkContainer>
				</Contact>
				<Footer>
					<Italic>Nossa equipe está à disposição para lhe atender de</Italic><br />
					<strong>Segunda a Sexta, das 08h às 18h</strong>
				</Footer>
			</LeftSide>
			<a href="#header"><CoffeeCup /></a>
		</Root>
	);
}

export default HomeContact;