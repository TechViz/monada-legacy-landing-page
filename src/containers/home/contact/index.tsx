import React from 'react';
import styled from 'styled-components';
import Images from '../../../constants/images';
import ContactSocialMedia from './social-media';
import TextInput from '../../../components/reusable/text-input;';
import Button from '../../../components/reusable/button';

const Root = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: max-content auto;
	justify-items: center;
	column-gap: 64px;
`;

const Title = styled.h2`
	grid-column: span 2;
`;

const SocialMediaList = styled.div`
	justify-self: flex-start;
`;

const ActionTitle = styled.h3`
	font-weight: normal;
	font-size: 24px;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	font-size: 16px;
`;

const SocialMediaContainer = styled.div``;

type HomeContactProps = React.PropsWithoutRef<{
}>;

type HomeContactComponent = React.FunctionComponent<HomeContactProps>;

const HomeContact: HomeContactComponent = ({  }) => {
	return (
		// Note: The ID is used by the navbar to scroll this element into view.
		<Root id='contact'>
			<Title>Contate-nos</Title>
			<Form>
				<ActionTitle>Mande-nos uma mensagem</ActionTitle>
				<TextInput label='Seu nome' />
				<TextInput label='Seu e-mail' />
				<TextInput label='Sua mensagem' numberOfLines={3} />
				<Button type='submit'>Enviar</Button>
			</Form>
			<SocialMediaContainer>
				<ActionTitle>Acesse nossas redes sociais</ActionTitle>
				<SocialMediaList>
					<ContactSocialMedia
						icon={<Images.Icons.Facebook />}
						text='facebook.com/MonadaTech'
						href='#'
					/>
					<ContactSocialMedia
						icon={<Images.Icons.Youtube />}
						text='youtube.com/MonadaTech'
						href='#'
					/>
					<ContactSocialMedia
						icon={<Images.Icons.Linkedin />}
						text='linkedin.com/MonadaTech'
						href='#'
					/>
					<ContactSocialMedia
						icon={<Images.Icons.Instagram />}
						text='instagram.com/MonadaTech'
						href='#'
					/>
				</SocialMediaList>
			</SocialMediaContainer>
		</Root>
	);
}

export default HomeContact;