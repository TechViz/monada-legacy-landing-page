import styled, { FlattenSimpleInterpolation } from 'styled-components';

const BaseImage = styled.img`
	object-fit: contain;
	width: 100%;
	height: 100%;
	user-drag: none;
	user-select: none;
	${(props: { css?: FlattenSimpleInterpolation }) => props.css || ''};
`;

const Images = {
	Logo: {
		Main: styled(BaseImage).attrs(props => ({
			src: '/images/logo/main.svg',
			alt: 'Logo da Mônada',
			...props,
		}))``,
		Textless: styled(BaseImage).attrs(props => ({
			src: '/images/logo/textless.svg',
			alt: 'Logo da Mônada sem texto',
			...props,
		}))``,
	},
	Icons: {
		gift: styled(BaseImage).attrs(props => ({
			src: '/icons/gift.svg',
			alt: 'Icone de um presente',
			...props,
		}))``,
		Facebook: styled(BaseImage).attrs(props => ({
			src: '/icons/facebook.svg',
			alt: 'Icone do Facebook',
			...props,
		}))``,
		Instagram: styled(BaseImage).attrs(props => ({
			src: '/icons/instagram.svg',
			alt: 'Icone do Instagram',
			...props,
		}))``,
		Linkedin: styled(BaseImage).attrs(props => ({
			src: '/icons/linkedin.svg',
			alt: 'Icone do Linkedin',
			...props,
		}))``,
		Youtube: styled(BaseImage).attrs(props => ({
			src: '/icons/youtube.svg',
			alt: 'Icone do Youtube',
			...props,
		}))``,
	},
	Founders: {
		Adla: styled(BaseImage).attrs(props => ({
			src: '/images/founders/adla.jpg',
			alt: 'Adla Viana - Fundadora da Mônada',
			...props,
		}))``,
		Maria: styled(BaseImage).attrs(props => ({
			src: '/images/founders/maria.jpg',
			alt: 'Maria Luiza Salvador - Fundadora da Mônada',
			...props,
		}))``,
		Reijane: styled(BaseImage).attrs(props => ({
			src: '/images/founders/reijane.jpg',
			alt: 'Reijane Salazar - Fundadora da Mônada',
			...props,
		}))``,
	},
}

export default Images;