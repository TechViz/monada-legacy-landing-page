import React from 'react';
import styled from 'styled-components';
import { toastifyProblems } from '../../../libs/toastify-problems';
import ButtonBase from '../button';
import ContactInput from './input';
import { useContactFormSubmit } from './use-submit';
import { toast } from 'react-toastify';

const Root = styled.form`
	color: ${props => props.theme.colors.primary.main};
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
	font-size: 16px;
`;

const Button = styled(ButtonBase)`
	border-radius: 32px;
	font-weight: bold;
	font-size: 18px;
`;

type ContactFormProps = React.PropsWithoutRef<{}>;

type ContactFormComponent = React.FunctionComponent<ContactFormProps>;

type FormData = {
	name: string;
	email: string;
	company: string;
};

const ContactForm: ContactFormComponent = ({}) => {
	const { isLoading, makeRequest } = useContactFormSubmit();

	function extractData(formElem: HTMLFormElement) {
		return {
			name: (formElem['contact-name'] as HTMLInputElement).value.trim(),
			email: (formElem['contact-email'] as HTMLInputElement).value.trim(),
			company: (formElem['contact-company'] as HTMLInputElement).value.trim(),
		} as FormData;
	}

	function validateData(data: FormData) {
		const problems: string[] = [];
		if (!data.name) problems.push('Você deve fornecer o seu nome');
		if (!data.email) problems.push('Você deve fornecer um e-mail de contato');
		if (!data.company) problems.push('Você deve fornecer o nome da sua empresa');
		return problems;
	}

	async function handleSubmit(event: React.FormEvent) {
		event.preventDefault();
		if (isLoading) return;
		const formElem = event.target as HTMLFormElement;
		const data = extractData(formElem);
		const problems = validateData(data);
		if (problems.length > 0) return toastifyProblems(problems);
		await makeRequest(data).catch((error: any) => {
			toast.error('Falha na submissão. Por favor, tente de novo mais tarde');
			throw error;
		});
		toast.success('sucesso! Entraremos em contato com você em breve :)');
		formElem.reset();
	}

	return (
		<Root onSubmit={handleSubmit}>
			<Title>Mônada Analytics</Title>
			<AnalyticsDescription>
				Solicite um teste gratuito da plataforma com a nossa equipe.
			</AnalyticsDescription>
			<InputsContainer>
				<ContactInput name="contact-name" label="Nome*:" />
				<ContactInput name="contact-email" label="E-mail*:" />
				<ContactInput name="contact-company" label="Empresa*:" />
			</InputsContainer>
			<Subtext>Essas informações são importantes.*</Subtext>
			<Button isLoading={isLoading} fullWidth>
				Quero conhecer!
			</Button>
		</Root>
	);
};

export default ContactForm;
