import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin: 0 16px;
	width: min-content;
	text-align: center;
	padding: 16px 32px;
	border-radius: 16px;
	height: 450px;
	width: 300px;
`;

const Name = styled.p`
	font-size: 32px;
	color: ${props => props.theme.colors.purple.main};
	font-weight: bold;
	margin: 0;
`;

const Picture = styled.div`
	height: 250px;
	width: 250px;
	border-radius: 100%;
	overflow: hidden;
	margin: 32px 0;
	box-shadow: ${props => props.theme.shadows.card.normal};
`;

const PersonTitle = styled.p`
	font-size: 24px;
	color: ${props => props.theme.colors.purple.main};
	margin: 0;
`;

type MonadaTeamPictureProps = React.PropsWithoutRef<{
	personName: string,
	personTitle: string,
}>;

type MonadaTeamPictureComponent = React.FunctionComponent<MonadaTeamPictureProps>;

const MonadaTeamPicture: MonadaTeamPictureComponent = ({ personName, children, personTitle }) => {
	return (
		<Root>
			<Name>{personName}</Name>
			<Picture>
				{children}
			</Picture>
			<PersonTitle>{personTitle}</PersonTitle>
		</Root>
	);
}

export default MonadaTeamPicture;