import React from 'react';
import styled from 'styled-components';
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

const PresentButton = styled(FloatIconButton)`
	position: absolute;
	right: 64px;
	bottom: 64px;
	padding: 16px;
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

	return (
		// Note: The ID is used by the navbar to scroll this element into view.
		<Root id='about-us'>
			{/* Note: Youtube Embeds are HEEEAVY (around 700kB). Avoid it */}
			<Video controls>
				<source src="/presentation-video.mp4" type="video/mp4" />
			</Video>
			<PresentButton imageElem={<PresentIcon />} />
		</Root>
	);
}

export default HomeAboutUs;