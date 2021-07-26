import React from 'react';
import styled from 'styled-components';
import ContactFormSpacing from '../../components/reusable/contact-form-spacing';

const Root = styled.div`
	width: 100%;
	display: flex;
	color: ${props => props.theme.colors.white.full};
`;

const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0 64px 0 140px;
	${props => props.theme.mediaQueries.maxScreen.custom(700)} {
		padding: 0 32px;
	}
	${props => props.theme.mediaQueries.maxScreen.custom(500)} {
		padding: 0 16px;
	}
`;

const PaddedContainer = styled.div`
	max-width: 673px;
	width: 100%;
`;

type HomeSubpartRootProps = React.PropsWithoutRef<{}>;

type HomeSubpartRootComponent = React.FunctionComponent<HomeSubpartRootProps>;

const HomeSubpartRoot: HomeSubpartRootComponent = ({ children }) => {
	return (
		<Root>
			<Content>
				<PaddedContainer>{children}</PaddedContainer>
			</Content>
			<ContactFormSpacing />
		</Root>
	);
};

export default HomeSubpartRoot;
