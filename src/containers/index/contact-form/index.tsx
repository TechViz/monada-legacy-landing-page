import React from 'react';
import styled from 'styled-components';
import ContactForm from '../../../components/reusable/contact-form';
import HomeSubpartRoot from '../home-subpart-root';

const Root = styled.div`
	width: 100%;
	margin: 16px 0 64px 0;
	background-color: ${props => props.theme.colors.white.full};
	padding: 32px;
	border-radius: 8px;
	box-shadow: ${props => props.theme.shadows.card.medium};

	display: none;
	${props => props.theme.mediaQueries.maxScreen.custom(1130)} {
		display: block;
	}
`;

type ContactFormProps = React.PropsWithoutRef<{}>;

type ContactFormComponent = React.FunctionComponent<ContactFormProps>;

const ContactFormSection: ContactFormComponent = ({}) => {
	return (
		<HomeSubpartRoot>
			<Root>
				<ContactForm />
			</Root>
		</HomeSubpartRoot>
	);
};

export default ContactFormSection;
