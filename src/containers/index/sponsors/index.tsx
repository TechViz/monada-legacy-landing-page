import React from 'react';
import styled, { css } from 'styled-components';
import Images from '../../../images';
import HomeSubpartRoot from '../home-subpart-root';

const ImagesContainer = styled.div`
	border-radius: 4px;
	padding: 16px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	width: 100%;
	justify-content: space-between;
	row-gap: 16px;
	${props => props.theme.mediaQueries.maxScreen.custom(930)} {
		grid-template-columns: 1fr;
	}
`;

const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: space-between;
	row-gap: 16px;
	${props => props.theme.mediaQueries.maxScreen.custom(930)} {
		grid-template-columns: 1fr;
		align-items: center;
	}
`;

const RightContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	row-gap: 16px;
	${props => props.theme.mediaQueries.maxScreen.custom(930)} {
		grid-template-columns: 1fr;
		align-items: center;
	}
`;

const Title = styled.h1`
	color: ${props => props.theme.colors.white.full};
	font-size: 35px;
	margin: 16px 0 12px 0;
	${props => props.theme.mediaQueries.maxScreen.custom(575)} {
		font-size: 30px;
	}
`;

const largeImageCSS = css`
	width: 200px;
`;

const smallImageCSS = css`
	width: 200px;
`;

const BfSolucoes = styled(Images.Sponsors.BfSolucoes)`
	${largeImageCSS}
`;

const Iam = styled(Images.Sponsors.Iam)`
	${smallImageCSS}
`;

const Onovolab = styled(Images.Sponsors.Onovolab)`
	${largeImageCSS}
`;

const Predify = styled(Images.Sponsors.Predify)`
	${smallImageCSS}
`;

const Sancahub = styled(Images.Sponsors.Sancahub)`
	${smallImageCSS}
`;

const StartupSpSebrae = styled(Images.Sponsors.StartupSpSebrae)`
	${smallImageCSS}
`;

const Zygon = styled(Images.Sponsors.Zygon)`
	${smallImageCSS}
`;

const AnotherTabLink = styled.a.attrs({ rel: 'noopener', target: '_blank' })``;

type SponsorsProps = React.PropsWithoutRef<{}>;

type SponsorsComponent = React.FunctionComponent<SponsorsProps>;

const Sponsors: SponsorsComponent = ({}) => {
	return (
		<HomeSubpartRoot>
			<Title>Nossos parceiros</Title>
			<ImagesContainer>
				<LeftContainer>
					<AnotherTabLink href="https://predify.me/">
						<Predify />
					</AnotherTabLink>
					<AnotherTabLink href="https://iamfounder.com.br/">
						<Iam />
					</AnotherTabLink>
					<AnotherTabLink href="https://sancahub.org/">
						<Sancahub />
					</AnotherTabLink>
					<AnotherTabLink href="https://www.sebrae.com.br/sites/PortalSebrae">
						<Zygon />
					</AnotherTabLink>
					<AnotherTabLink href="https://www.sebrae.com.br/sites/PortalSebrae">
						<StartupSpSebrae />
					</AnotherTabLink>
				</LeftContainer>
				<RightContainer>
					<AnotherTabLink href="https://www.bfsolucoes.com/">
						<BfSolucoes />
					</AnotherTabLink>
					<AnotherTabLink href="https://onovolab.com/">
						<Onovolab />
					</AnotherTabLink>
				</RightContainer>
			</ImagesContainer>
		</HomeSubpartRoot>
	);
};

export default Sponsors;
