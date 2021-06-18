import React from 'react';
import styled from 'styled-components';
import HomeSubpartRoot from '../home-subpart-root';

const Text = styled.p`
	color: ${props => props.theme.colors.primary.main};
	font-size: 64px;
	margin: 0;
	text-align: center;
`;

type SocialProofProps = React.PropsWithoutRef<{}>;

type SocialProofComponent = React.FunctionComponent<SocialProofProps>;

const SocialProof: SocialProofComponent = ({}) => {
	return (
		<HomeSubpartRoot>
			<Text>
				“ Prova Social
				<br />
				(%’s)”
			</Text>
		</HomeSubpartRoot>
	);
};

export default SocialProof;
