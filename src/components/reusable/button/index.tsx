import React from 'react';
import type { DefaultTheme } from 'styled-components';
import styled, { useTheme } from 'styled-components';
import SpinnerTemplate from '../spinner';

type ColorDescriptor = string | ((theme: DefaultTheme) => string);

function solveColorDescriptor(colorDescriptor: ColorDescriptor, theme: DefaultTheme) {
	return typeof colorDescriptor === `string` ? colorDescriptor : colorDescriptor(theme);
}

const Root = styled.button<{
	fullWidth: boolean;
	backgroundColor: ColorDescriptor;
	textColor: ColorDescriptor;
	isDisabled?: boolean;
}>`
	width: ${({ fullWidth }) => (fullWidth ? `100%` : `max-content`)};
	padding: 8px 42px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 0;
	outline: 0;
	font-size: inherit;
	transition: 200ms;
	cursor: pointer;
	border-radius: 8px;
	user-select: none;
	border: 1px solid;
	box-shadow: ${({ theme }) => theme.shadows.button.medium};
	background-color: ${({ backgroundColor, theme }) => solveColorDescriptor(backgroundColor, theme)};
	${props =>
		props.isDisabled
			? `
		background-color: ${props.theme.colors.gray.main};
	`
			: ``}
	border-color: ${({ backgroundColor, theme }) => solveColorDescriptor(backgroundColor, theme)};
	color: ${({ textColor, theme }) => solveColorDescriptor(textColor, theme)};

	${props =>
		props.isDisabled
			? ``
			: `
		:hover {
			background-color: ${solveColorDescriptor(props.textColor, props.theme)};
			color: ${solveColorDescriptor(props.backgroundColor, props.theme)};
		}
		:active {
		}
	`}
`;

const Spinner = styled(SpinnerTemplate)<{
	hoverColor: string;
	isDisabled?: boolean;
}>`
	margin-left: 8px;
	transition: 200ms;
	${props =>
		props.isDisabled
			? ``
			: `
		${Root}:focus &, ${Root}:hover & {
			stroke: ${props.hoverColor};
		}
	`}
`;

type ButtonProps = React.PropsWithoutRef<{
	backgroundColor?: ColorDescriptor;
	textColor?: ColorDescriptor;
	variant?: 'white' | 'primary';

	/**
	 * If true, the button's width will be set to `100%`.
	 */
	fullWidth?: boolean;
	isLoading?: boolean;
	isDisabled?: boolean;
	onClickWhileDisabled?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> &
	React.ComponentProps<'button'>;

type ButtonComponent = React.FunctionComponent<ButtonProps>;

/** This is the application's default button. */
const Button: ButtonComponent = ({
	children,
	fullWidth = false,
	backgroundColor,
	variant = 'primary',
	textColor,
	ref,
	isLoading,
	isDisabled,
	onClickWhileDisabled = () => {},
	onClick = () => {},
	...props
}) => {
	const theme = useTheme();

	function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
		if (isDisabled || isLoading) {
			onClickWhileDisabled(event);
		} else {
			onClick(event);
		}
	}

	let textColorSelector = textColor;
	let backgroundColorSelector = backgroundColor;

	if (variant === 'primary') {
		textColorSelector = textColorSelector || ((theme: DefaultTheme) => theme.colors.white.full);
		backgroundColorSelector =
			backgroundColorSelector || ((theme: DefaultTheme) => theme.colors.primary.main);
	} else if (variant === 'white') {
		textColorSelector = textColorSelector || ((theme: DefaultTheme) => theme.colors.primary.main);
		backgroundColorSelector =
			backgroundColorSelector || ((theme: DefaultTheme) => theme.colors.white.full);
	} else {
		throw new Error('Invalid Variant');
	}

	return (
		<Root
			fullWidth={fullWidth}
			textColor={textColorSelector}
			backgroundColor={backgroundColorSelector}
			isDisabled={isDisabled}
			onClick={handleClick}
			{...props}
		>
			{children}
			{isLoading && (
				<Spinner
					isDisabled={isDisabled || isLoading}
					hoverColor={solveColorDescriptor(backgroundColorSelector, theme)}
					color={solveColorDescriptor(textColorSelector, theme)}
					strokeWidth={2}
					size={20}
				/>
			)}
		</Root>
	);
};

export default Button;
