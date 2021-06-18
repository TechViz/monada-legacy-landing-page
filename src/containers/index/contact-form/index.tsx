import React from 'react';
import styled from 'styled-components';
import ButtonBase from '../../../components/reusable/button';
import ContactInput from './input';

const Root = styled.div`
	position: fixed;
	right: 0px;
	width: 340px;
	background-color: ${props => props.theme.colors.white.full};
	color: ${props => props.theme.colors.primary.main};
	box-shadow: ${props => props.theme.shadows.card.medium};
	z-index: ${props => props.theme.zIndex.modal};
	padding: 32px;
	border-radius: 8px 0 0 8px;
	top: 50%;
	transform: translate(0%, -50%);
`;

const Title = styled.p`
	font-weight: bold;
	font-size: 32px;
	margin: 0;
`;

const AnalyticsDescription = styled.p`
	margin: 0;
	margin-top: 8px;
	font-size: 16px;
`;

const Subtext = styled.p`
	font-size: 10px;
	margin-top: 8px;
	margin-bottom: 32px;
	color: ${props => props.theme.colors.gray.dark};
	font-style: italic;
`;

const InputsContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 32px;
	margin-top: 32px;
`;

const Button = styled(ButtonBase)`
	border-radius: 32px;
	font-weight: bold;
	font-size: 18px;
`;

type ContactFormProps = React.PropsWithoutRef<{}>;

type ContactFormComponent = React.FunctionComponent<ContactFormProps>;

const ContactForm: ContactFormComponent = ({}) => {
	return (
		<Root>
			<Title>Mônada Analytics</Title>
			<AnalyticsDescription>
				Solicite um teste gratuito da plataforma com a nossa equipe.
			</AnalyticsDescription>
			<InputsContainer>
				<ContactInput label="Nome*:" />
				<ContactInput label="E-mail*:" />
				<ContactInput label="Empresa*:" />
			</InputsContainer>
			<Subtext>Essas informações são importantes.*</Subtext>
			<Button fullWidth>Quero conhecer!</Button>
		</Root>
	);
};

export default ContactForm;
