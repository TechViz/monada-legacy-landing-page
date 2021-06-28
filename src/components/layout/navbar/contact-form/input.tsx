import React from 'react';
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

type ContactInputProps = React.PropsWithoutRef<{
	label: string;
}>;

type ContactInputComponent = React.FunctionComponent<ContactInputProps>;

const ContactInput: ContactInputComponent = ({ label }) => {
	return (
		<Root>
			<Label>{label}</Label>
			<Input />
		</Root>
	);
};

export default ContactInput;
