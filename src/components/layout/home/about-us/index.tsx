import React from 'react';
import styled, { keyframes } from 'styled-components';
import FloatIconButton from '../../../reusable/float-icon-button';
import Images from '../../../../constants/images';

const Root = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 64px;
	position: relative;
`;

const PresentIcon = styled(Images.Icons.gift)`
	width: 32px;
	height: 32px;
`;

const PresentButtonContainer = styled.div`
	animation-name: ${keyframes`
		0% {
			transform: scale(0.9);
		} 50% {
			transform: scale(1.1);
		} 100% {
			transform: scale(0.9);
		}
	`};
	animation-duration: 4000ms;
	animation-timing-function: ease;
	animation-iteration-count: infinite;

	transtion: 200ms;
	position: absolute;
	right: 64px;
	bottom: 64px;
`;

const PresentButtonShine = styled(Images.Icons.Sunshine)`
	animation-name: ${keyframes`
		from {
			transform: rotate(0deg);
		} to {
			transform: rotate(360deg);
		}
	`};
	animation-duration: 10000ms;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	position: absolute;
	top: 0;
`;

const PresentButton = styled(FloatIconButton)`
	position: relative;
	padding: 8px;
	margin: 16px;
	background-color: ${props => props.theme.colors.primary.white};
`;

const Video = styled.video`
	border: 1px solid black;
	width: auto;
	height: 100%;
`;

type HomeAboutUsProps = React.PropsWithoutRef<{}>;
type HomeAboutUsComponent = React.FunctionComponent<HomeAboutUsProps>;

const HomeAboutUs: HomeAboutUsComponent = () => {
	const sunshineRef = React.useRef<HTMLPictureElement>(null);
	const buttonContainerRef = React.useRef<HTMLDivElement>(null);

	return (
		// Note: The ID is used by the navbar to scroll this element into view.
		<Root id='about-us'>
			{/* Note: Youtube Embeds are HEEEAVY (around 700kB). Avoid it */}
			<Video controls>
				<source src="/presentation-video.mp4" type="video/mp4" />
			</Video>
			<PresentButtonContainer ref={buttonContainerRef}>
				<PresentButtonShine ref={sunshineRef} />
				<PresentButton imageElem={<PresentIcon />} />
			</PresentButtonContainer>
		</Root>
	);
}

export default HomeAboutUs;