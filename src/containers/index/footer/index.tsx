import React from 'react';
import styled from 'styled-components';
import HomeSubpartRoot from '../home-subpart-root';

const Root = styled.div`
	margin-top: 64px;
`;

const Title = styled.p`
	color: ${props => props.theme.colors.primary.main};
	font-size: 32px;
	text-align: center;
	margin: 0;
	font-weight: bold;
`;

const Address = styled.p`
	margin: 0;
	text-align: center;
`;

type FooterProps = React.PropsWithoutRef<{}>;

type FooterComponent = React.FunctionComponent<FooterProps>;

const Footer: FooterComponent = ({}) => {
	return (
		<HomeSubpartRoot>
			<Root>
				<Title>Mônada</Title>
				<Address>contato@monada.tech</Address>
				<Address>Rua Aquidaban, 1 - São Carlos, SP - Brasil</Address>
			</Root>
		</HomeSubpartRoot>
	);
};

export default Footer;
