import React from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

const Picture = styled.picture<{ css?: FlattenSimpleInterpolation }>`
	width: 100%;
	height: 100%;
	${({ css }) => css || ''};
`;

const Image = styled.img<{ fit: string }>`
	object-fit: ${({ fit }) => fit};
	width: inherit;
	height: inherit;
	user-drag: none;
	user-select: none;
`;

type BaseImageProps = React.PropsWithChildren<{
	src: string,
	alt: string,
	css?: FlattenSimpleInterpolation,
	fit?: 'contain' | 'cover' | 'fill' | 'inherit' | 'initial' | 'none' | 'revert' | 'scale-down' | 'unset',
}> & Omit<React.ComponentProps<'picture'>, 'ref'>;

const BaseImage = React.forwardRef<HTMLPictureElement, BaseImageProps>(({
	src,
	alt,
	fit = 'contain',
	...props
}, ref) => {
	const webpSrc = src.replace(/\.(png|jpe?g)$/, '.webp');

	return (
		<Picture {...props} ref={ref}>
			<source srcSet={webpSrc} type='image/webp' />
			<Image src={src} alt={alt} fit={fit} />
		</Picture>
	);
});

const Images = {
	Logo: {
		Main: styled(BaseImage).attrs(({ alt }) => ({
			src: require('../images/logo/main.svg'),
			alt: alt || 'Logo da Mônada',
		}))``,
		Textless: styled(BaseImage).attrs(({ alt }) => ({
			src: require('../images/logo/textless.svg'),
			alt: alt || 'Logo da Mônada sem texto',
		}))``,
	},
	Icons: {
		gift: styled(BaseImage).attrs(({ alt }) => ({
			src: require('../images/icons/gift.svg'),
			alt: alt || 'Icone de um presente',
		}))``,
		Facebook: styled(BaseImage).attrs(({ alt }) => ({
			src: require('../images/icons/facebook.svg'),
			alt: alt || 'Icone do Facebook',
		}))``,
		Instagram: styled(BaseImage).attrs(({ alt }) => ({
			src: require('../images/icons/instagram.svg'),
			alt: alt || 'Icone do Instagram',
		}))``,
		Linkedin: styled(BaseImage).attrs(({ alt }) => ({
			src: require('../images/icons/linkedin.svg'),
			alt: alt || 'Icone do Linkedin',
		}))``,
		Youtube: styled(BaseImage).attrs(({ alt }) => ({
			src: require('../images/icons/youtube.svg'),
			alt: alt || 'Icone do Youtube',
		}))``,
		Sunshine: styled(BaseImage).attrs(({ alt }) => ({
			src: require('../images/icons/sunshine.svg'),
			alt: alt || 'Brilho do sol',
		}))``,
	},
	Founders: {
		Adla: styled(BaseImage).attrs(({ alt }) => ({
			src: require('../images/founders/adla.jpg'),
			alt: alt || 'Adla Viana - Fundadora da Mônada',
		}))``,
		Maria: styled(BaseImage).attrs(({ alt }) => ({
			src: require('../images/founders/maria.jpg'),
			alt: alt || 'Maria Luiza Salvador - Fundadora da Mônada',
		}))``,
		Reijane: styled(BaseImage).attrs(({ alt }) => ({
			src: require('../images/founders/reijane.jpg'),
			alt: alt || 'Reijane Salazar - Fundadora da Mônada',
		}))``,
	},
}

export default Images;