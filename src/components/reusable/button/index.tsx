import styled from 'styled-components';

const Button = styled.button<{
	fullWidth?: boolean,
}>`
	width: ${({ fullWidth }) => fullWidth ? '100%' : 'max-content'};
	padding: 8px 32px;
	text-align: center;
	align-items: center;
	display: flex;
	justify-content: center;
	outline: 0;
	transition: 200ms;
	cursor: pointer;
	border-radius: 32px;
	font-size: 20px;
	text-decoration: none;
	background-color: white;
	color: ${props => props.theme.colors.primary.main};
	border: 1px solid ${props => props.theme.colors.primary.main};
	:hover {
		background-color: ${props => props.theme.colors.primary.main};
		color: white;
	}
`;

export default Button;