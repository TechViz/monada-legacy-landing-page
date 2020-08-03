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
}

export default Images;