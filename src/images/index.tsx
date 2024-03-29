/** *************************************************************************
 *                         What is this file?                               *
 *                                                                          *
 * This file contains all imports to all images, icons and etc... It has a  *
 * base component that all images should share, and has to organize all     *
 * images in a single export default object.                                *
 *                                                                          *
 ************************************************************************** */

import React from 'react';
import type { FlattenSimpleInterpolation } from 'styled-components';
import styled from 'styled-components';
import ImageURLs from './image-urls';

const hasWebpCounterpartRegex = /\.(png|jpe?g)$/;

const Picture = styled.picture<{ css?: FlattenSimpleInterpolation }>`
	width: 100%;
	height: 100%;
	${({ css }) => css || ``};
`;

const Image = styled.img<{ fit: string }>`
	object-fit: ${({ fit }) => fit};
	width: inherit;
	height: inherit;
	user-drag: none;
	user-select: none;
`;

type BaseImageProps = React.PropsWithChildren<{
	imageData: StaticImageData;
	alt: string;
	css?: FlattenSimpleInterpolation;
	fit?:
		| 'contain'
		| 'cover'
		| 'fill'
		| 'inherit'
		| 'initial'
		| 'none'
		| 'revert'
		| 'scale-down'
		| 'unset';
}> &
	Omit<React.ComponentProps<'picture'>, 'ref'>;

/**
 * This component is the base of all images in the App. It will apply some default styling,
 * and will automaticaly handle webp sources.
 */
const BaseImage = React.forwardRef<HTMLPictureElement, BaseImageProps>(
	({ imageData: { src }, alt, fit = `contain`, ...props }, ref) => {
		const webpSrc = src.match(hasWebpCounterpartRegex)
			? src.replace(hasWebpCounterpartRegex, `.webp`)
			: ``;

		return (
			<Picture {...props} ref={ref}>
				{webpSrc && <source srcSet={webpSrc} type="image/webp" />}
				<Image src={src} alt={alt} fit={fit} />
			</Picture>
		);
	},
);

const Images = {
	/** Here's an image import example. Just copy and paste it with the correct import path. */
	main: styled(BaseImage).attrs(({ alt }) => ({
		imageData: ImageURLs.logo,
		alt: alt || `Logo Mônada`,
	}))``,

	LogoTipography: styled(BaseImage).attrs(({ alt }) => ({
		imageData: ImageURLs.logoTipography,
		alt: alt || `Mônada`,
	}))``,

	HeroImage: styled(BaseImage).attrs(({ alt }) => ({
		imageData: ImageURLs.heroImage,
		alt: alt || `Some analytics graphics`,
	}))``,

	Maria: styled(BaseImage).attrs(({ alt }) => ({
		imageData: ImageURLs.maria,
		alt: alt || `Maria Salvador`,
	}))``,

	Adla: styled(BaseImage).attrs(({ alt }) => ({
		imageData: ImageURLs.adla,
		alt: alt || `Adla Viana`,
	}))``,

	Reijane: styled(BaseImage).attrs(({ alt }) => ({
		imageData: ImageURLs.reijane,
		alt: alt || `Reijane Salazar`,
	}))``,

	LinkedinLogo: styled(BaseImage).attrs(({ alt }) => ({
		imageData: ImageURLs.linkedinLogo,
		alt: alt || `Icone Linkedin`,
	}))``,

	InstagramLogo: styled(BaseImage).attrs(({ alt }) => ({
		imageData: ImageURLs.instagramLogo,
		alt: alt || `Icone Linkedin`,
	}))``,

	Sponsors: {
		BfSolucoes: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.sponsors.bfSolucoes,
			alt: alt || `Logo BF solucoes`,
		}))``,
		Iam: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.sponsors.iam,
			alt: alt || `Logo IAM`,
		}))``,
		Onovolab: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.sponsors.onovolab,
			alt: alt || `Logo Onovolab`,
		}))``,
		Predify: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.sponsors.predify,
			alt: alt || `Logo Predify`,
		}))``,
		Sancahub: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.sponsors.sancahub,
			alt: alt || `Logo Sancahub`,
		}))``,
		StartupSpSebrae: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.sponsors.startupSpSebrae,
			alt: alt || `Logo Startup Sebrae`,
		}))``,
		Zygon: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.sponsors.zygon,
			alt: alt || `Logo Zygon`,
		}))``,
	},
};

export default Images;
