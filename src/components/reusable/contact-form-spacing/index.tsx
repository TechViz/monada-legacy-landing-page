import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
	width: 340px;
`;

type ContactFormSpacingProps = React.PropsWithoutRef<{}>;

type ContactFormSpacingComponent = React.FunctionComponent<ContactFormSpacingProps>;

/**
 * This is simply a component that will have the exact length of the sticky contact form. It's used to
 * make sure the form will never cover any readable content.
 */
const ContactFormSpacing: ContactFormSpacingComponent = ({}) => {
	return <Root></Root>;
};

export default ContactFormSpacing;
