import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
	width: 100%;
	height: 0px;
	position: relative;
	padding-bottom: 100%;
`;

const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

type AspectRatioWrapperProps = React.PropsWithChildren<{
}> & React.ComponentProps<typeof Root>;

type AspectRatioWrapperComponent = React.FunctionComponent<AspectRatioWrapperProps>;

const AspectRatioWrapper: AspectRatioWrapperComponent = ({ children, ...props }) => {
	return (
		<Root {...props}>
			<Container>
				{children}
			</Container>
		</Root>
	);
}

export default AspectRatioWrapper;