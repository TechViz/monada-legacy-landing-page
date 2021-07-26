import React from 'react';
import styled, { css } from 'styled-components';
import Images from '../../../images';
import HomeSubpartRoot from '../home-subpart-root';

const ImagesContainer = styled.div`
	background-color: ${props => props.theme.colors.white.full};
	border-radius: 4px;
	padding: 16px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-content: space-between;
	column-gap: 8px;
	row-gap: 8px;
	${props => props.theme.mediaQueries.maxScreen.custom(600)} {
		grid-template-columns: 1fr 1fr;
	}
	${props => props.theme.mediaQueries.maxScreen.custom(450)} {
		grid-template-columns: 1fr;
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

const commonImageCSS = css`
	min-width: 150px;
`;

const BfSolucoes = styled(Images.Sponsors.BfSolucoes)`
	${commonImageCSS}
`;

const Iam = styled(Images.Sponsors.Iam)`
	${commonImageCSS}
`;

const Onovolab = styled(Images.Sponsors.Onovolab)`
	${commonImageCSS}
`;

const Predify = styled(Images.Sponsors.Predify)`
	${commonImageCSS}
`;

const Sancahub = styled(Images.Sponsors.Sancahub)`
	${commonImageCSS}
`;

const StartupSpSebrae = styled(Images.Sponsors.StartupSpSebrae)`
	${commonImageCSS}
`;

const AnotherTabLink = styled.a.attrs({ rel: 'noopener', target: '_blank' })``;

type SponsorsProps = React.PropsWithoutRef<{}>;

type SponsorsComponent = React.FunctionComponent<SponsorsProps>;

const Sponsors: SponsorsComponent = ({}) => {
	return (
		<HomeSubpartRoot>
			<Title>Nossos colaboradores</Title>
			<ImagesContainer>
				<AnotherTabLink href="https://www.bfsolucoes.com/">
					<BfSolucoes css={commonImageCSS} />
				</AnotherTabLink>
				<AnotherTabLink href="https://onovolab.com/">
					<Onovolab />
				</AnotherTabLink>
				<AnotherTabLink href="https://iamfounder.com.br/">
					<Iam />
				</AnotherTabLink>
				<AnotherTabLink href="https://predify.me/">
					<Predify />
				</AnotherTabLink>
				<AnotherTabLink href="https://sancahub.org/">
					<Sancahub />
				</AnotherTabLink>
				<AnotherTabLink href="https://www.sebrae.com.br/sites/PortalSebrae">
					<StartupSpSebrae />
				</AnotherTabLink>
			</ImagesContainer>
		</HomeSubpartRoot>
	);
};

export default Sponsors;
