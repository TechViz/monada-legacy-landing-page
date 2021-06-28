import React from 'react';
import styled from 'styled-components';
import HomeSubpartRoot from '../home-subpart-root';

const Text = styled.p`
	color: ${props => props.theme.colors.primary.main};
	font-size: 40px;
	margin: 64px 0;
	text-align: center;
`;

const Larger = styled.span`
	font-size: 80px;
`;

const Smaller = styled.span`
	font-size: 24px;
`;

type SocialProofProps = React.PropsWithoutRef<{}>;

type SocialProofComponent = React.FunctionComponent<SocialProofProps>;

const SocialProof: SocialProofComponent = ({}) => {
	return (
		<HomeSubpartRoot>
			<Text>
				“Aumento da diversidade
				<br />
				étnico-racial de colaboradores:
				<br />
				<Larger>+36%</Larger>
				<br />
				de lucratividade.”
				<br />
				<Smaller>(McKinsey, 2020)</Smaller>
			</Text>
		</HomeSubpartRoot>
	);
};

export default SocialProof;
