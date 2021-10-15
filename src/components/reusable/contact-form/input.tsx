import React, { FC } from 'react';
import styled from 'styled-components';

const Root = styled.label`
	color: ${props => props.theme.colors.gray.dark};
`;

const Label = styled.p`
	margin: 0;
	margin-bottom: 8px;
`;

const Input = styled.input`
	border: 1px solid ${props => props.theme.colors.gray.dark};
	border-width: 0 0 1px 0;
	width: 100%;
`;

const ContactInput: FC<{
	label: string;
	name: string;
}> = ({ label, name }) => {
	return (
		<Root>
			<Label>{label}</Label>
			<Input name={name} />
		</Root>
	);
};

export default ContactInput;
