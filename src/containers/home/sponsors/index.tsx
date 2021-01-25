import React from 'react';
import styled from 'styled-components';
import Images from '../../../constants/images';

const Root = styled.div`
	min-height: 100vh;
	width: 100%;
	background-color: ${props => props.theme.colors.gray.main};
	padding:
		calc(${props => props.theme.spacing.navbarHeight} + 1rem)
		${props => props.theme.spacing.horizontalPadding}
		1rem
		${props => props.theme.spacing.horizontalPadding}
	;
`;

const Title = styled.h2`
	font-size: 40px;
	margin: 0;
	font-weight: bold;
	color: ${props => props.theme.colors.purple.main};
`;

const ImagesContainer = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: space-around;
`;

const LogosContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 400px;
`;

const Predify = styled(Images.Misc.PredifyLogo)`
	width: 400px;
	height: auto;
`;

const Sebrae = styled(Images.Misc.AdmitedSebrae)`
	width: 542px;
	height: auto;
	border-radius: 12px;
	overflow: hidden;
`;

type HomeSponsorsProps = React.PropsWithoutRef<{
}>;

type HomeMonadaTeamComponent = React.FunctionComponent<HomeSponsorsProps>;

const HomeSponsors: HomeMonadaTeamComponent = ({  }) => {
	return (
		// Note: The ID is used by the navbar to scroll this element into view.
		<Root id='sponsors'>
			<Title>
				Quem já nos acompanha<br />
				nessa trajetória:
			</Title>
			<ImagesContainer>
				<LogosContainer>
					<Predify width={400} height={83} />
					<p>(Falta marca do Ricardo)</p>
				</LogosContainer>
				<Sebrae width={542} height={476} />
			</ImagesContainer>
		</Root>
	);
}

export default HomeSponsors;