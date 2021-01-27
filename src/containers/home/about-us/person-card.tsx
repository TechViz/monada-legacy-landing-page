import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { BaseImage } from '../../../constants/images'

const Root = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: calc(270px + 1rem);
`;

const ImageContainer = styled.div<{ bgColor: ColorFunction }>`
	height: 270px;
	width: 270px;
	position: relative;
	background-color: ${props => props.bgColor(props.theme.colors)};
	border-radius: 16px;
	display: flex;
	justify-content: flex-end;
`;

const InnerImageLink = styled.a`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 0.75rem;
`;

const Image = styled(BaseImage)<{ bgColor: ColorFunction }>`
	border-radius: 100%;
	overflow: hidden;
	border: 4px solid ${props => props.bgColor(props.theme.colors)};
`;

const ImageBackgroundCover = styled.div`
	width: 55%;
	background-color: white;
	margin: 0.5rem;
	border-radius: 4px;
`;

const Name = styled.p`
	font-size: 30px;
	font-weight: 900;
	margin: 0;
	margin-top: 40px;
`;

const TextContainer = styled.div`
	width: 100%;
	color: ${props => props.theme.colors.purple.main};
`;

const Profession = styled.p`
	margin: 8px 0 14px 0;
	font-size: 20px;
	font-style: italic;
`;

const PositionAtMonada = styled.p`
	margin: 0;
	font-weight: bold;
	font-size: 22px;
`;

type ColorFunction = (theme: DefaultTheme['colors']) => string;

type PersonCardProps = React.PropsWithoutRef<{
	imageURL: string,
	name: string,
	profession: string,
	positionAtMonada: string,
	bgColor: ColorFunction,
	linkedin: string,
}>;

type PersonCardComponent = React.FunctionComponent<PersonCardProps>;

const PersonCard: PersonCardComponent = ({
	imageURL,
	name,
	profession,
	positionAtMonada,
	bgColor,
	linkedin,
}) => {
	return (
		<Root>
			<ImageContainer bgColor={bgColor}>
				<ImageBackgroundCover />
				<InnerImageLink href={linkedin} rel="noreferrer noopener" target="_blank">
					<Image
						fit="cover"
						bgColor={bgColor}
						alt={"Fundador(a) " + name}
						src={imageURL}
						/* Prevents cumulative shifting. Yes, this is a magic number */
						width={238}
						height={238}
					/>
				</InnerImageLink>
			</ImageContainer>
			<TextContainer>
				<Name>{name}</Name>
				<Profession>{profession}</Profession>
				<PositionAtMonada>{positionAtMonada}</PositionAtMonada>
			</TextContainer>
		</Root>
	);
}

export default PersonCard;