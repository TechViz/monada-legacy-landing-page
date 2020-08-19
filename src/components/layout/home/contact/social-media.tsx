import React from 'react';
import styled from 'styled-components';

const Root = styled.a`
	display: flex;
	align-items: center;
	text-decoration: none;
`;

const IconContainer = styled.div`
	width: 32px;
	height: 32px;
	margin: 0 16px;
`;

const Text = styled.p`
	font-size: 16px;
`;

type ContactSocialMediaProps = React.PropsWithoutRef<{
	icon: JSX.Element,
	text: string,
	href: string,
}>;

type ContactSocialMediaComponent = React.FunctionComponent<ContactSocialMediaProps>;

const ContactSocialMedia: ContactSocialMediaComponent = ({ icon, text, href }) => {
	return (
		<Root href={href}>
			<IconContainer>{icon}</IconContainer>
			<Text>{text}</Text>
		</Root>
	);
}

export default ContactSocialMedia;