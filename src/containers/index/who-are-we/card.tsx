import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
	display: flex;
	align-items: center;
	column-gap: 100px;

	${props => props.theme.mediaQueries.maxScreen.custom(700)} {
		flex-direction: column;
		justify-content: center;
		text-align: center;
	}
`;

const Name = styled.p`
	margin: 0;
	font-weight: bold;
`;

const Occupation = styled.p`
	margin: 0;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

type WhoAreWeCardProps = React.PropsWithoutRef<{
	imageComponent: React.ReactNode;
	name: string;
	occupation: string;
}>;

type WhoAreWeCardComponent = React.FunctionComponent<WhoAreWeCardProps>;

const WhoAreWeCard: WhoAreWeCardComponent = ({ imageComponent, name, occupation }) => {
	return (
		<Root>
			{imageComponent}
			<TextContainer>
				<Name>{name}</Name>
				<Occupation>{occupation}</Occupation>
			</TextContainer>
		</Root>
	);
};

export default WhoAreWeCard;
