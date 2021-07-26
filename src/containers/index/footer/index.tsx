import React from 'react';
import styled from 'styled-components';
import Images from '../../../images';
import HomeSubpartRoot from '../home-subpart-root';

const Root = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

const Address = styled.p`
	margin: 0;
	text-align: center;
`;

const Spacer = styled.div`
	width: 100%;
	height: 1px;
	border-top: 1px solid white;
	margin: 64px 0 32px 0;
`;

const LogoTipography = styled(Images.LogoTipography)`
	max-width: 200px;
`;

type FooterProps = React.PropsWithoutRef<{}>;

type FooterComponent = React.FunctionComponent<FooterProps>;

const Footer: FooterComponent = ({}) => {
	return (
		<HomeSubpartRoot>
			<Spacer />
			<Root>
				<LogoTipography />
				<Address>contato@monada.tech</Address>
				<Address>Rua Aquidaban, 1 - São Carlos, SP - Brasil</Address>
			</Root>
		</HomeSubpartRoot>
	);
};

export default Footer;
