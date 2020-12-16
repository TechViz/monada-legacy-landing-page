import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

type ColorDescriptor = string | ((theme: DefaultTheme) => string);

function resolveColorDescriptor (desc: ColorDescriptor, theme: DefaultTheme) {
	return typeof desc === 'string' ? desc : desc(theme);
}

const Root = styled.button<{
	fullWidth: boolean,
	hoverScaleOffset: number,
	backgroundColor: ColorDescriptor,
	textColor: ColorDescriptor,
	hoverTextColor: ColorDescriptor,
	hoverBackgroundColor: ColorDescriptor,
}>`
	width: ${({ fullWidth }) => fullWidth ? '100%' : 'max-content'};
	padding: 4px 16px;
	text-align: center;
	align-items: center;
	display: flex;
	justify-content: center;
	outline: 0;
	transition: 200ms;
	cursor: pointer;
	border-radius: 32px;
	font-size: 20px;
	background-color: ${({ backgroundColor, theme }) => resolveColorDescriptor(backgroundColor, theme)};
	color: ${({ textColor, theme }) => resolveColorDescriptor(textColor, theme)}
	border: 1px solid ${({ hoverBackgroundColor, theme }) => resolveColorDescriptor(hoverBackgroundColor, theme)};
	:hover, :focus {
		background-color: ${({ hoverBackgroundColor, theme }) => resolveColorDescriptor(hoverBackgroundColor, theme)};
		color: ${({ hoverTextColor, theme }) => resolveColorDescriptor(hoverTextColor, theme)}
	}
`;

type ButtonProps = React.PropsWithChildren<{
	hoverScaleOffset?: number,
	backgroundColor?: ColorDescriptor,
	textColor?: ColorDescriptor,
	hoverTextColor?: ColorDescriptor,
	hoverBackgroundColor?: ColorDescriptor,
	fullWidth?: boolean,
}> & React.ComponentProps<'button'>;

type ButtonComponent = React.FunctionComponent<ButtonProps>;

const Button: ButtonComponent = ({
	children,
	fullWidth = false,
	hoverScaleOffset = 0.1,
	backgroundColor = 'white',
	textColor = (theme: DefaultTheme) => theme.colors.primary.main,
	hoverTextColor = 'white',
	hoverBackgroundColor = (theme: DefaultTheme) => theme.colors.primary.main,
	ref,
	...props
}) => {

	return (
		<Root
			fullWidth={fullWidth}
			hoverScaleOffset={hoverScaleOffset}
			textColor={textColor}
			backgroundColor={backgroundColor}
			hoverTextColor={hoverTextColor}
			hoverBackgroundColor={hoverBackgroundColor}
			{...props}
		>
			{children}
		</Root>
	);
}

export default Button;