import React from 'react';
import styled from 'styled-components';
import { CONTACT_FORM_WIDTH } from '../../layout/navbar/contact-form';

const Root = styled.div`
	width: ${CONTACT_FORM_WIDTH}px;
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
