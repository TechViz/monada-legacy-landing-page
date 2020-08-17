import React from 'react';
import styled from 'styled-components';
import { useHamburguer } from '../contexts/hamburguer';

const Root = styled.div`
	height: 100%;
	overflow: hidden;
`;

const MovableContainer = styled.div<{ offset: number }>`
	height: 100%;
	position: relative;
	transition: 500ms;
	top: ${({ offset }) => offset}px;
	display: flex;
	flex-direction: column;
`;

const Backdrop = styled.div<{ show: boolean }>`
	height: 100%;
	width: 100%;
	background-color: black;
	opacity: ${({ show }) => show ? `0.5` : `0`};
	pointer-events: none;
	position: fixed;
	transition: 500ms;
	left: 0px;
`;

type AppContainerProps = React.PropsWithoutRef<{}>;
type AppContainerComponent = React.FunctionComponent<AppContainerProps>;

/** This component should only be used in the `/src/pages/_app.tsx` component.
* The `AppContainer` component was created to contain the whole application. It's
* primary purpose is to allow for the screen to slide when the hamburguer opens. */
const AppContainer: AppContainerComponent = ({ children }) => {
	const { isHamburguerOpen, hamburguerOffset } = useHamburguer();

	return (
		<Root>
			{/* Used by the hamburguer animation */}
			<MovableContainer offset={isHamburguerOpen ? hamburguerOffset : 0}>
				{/* A black curtain to darken the screen when the hamburguer is open */}
				<Backdrop show={isHamburguerOpen} />
				{React.useMemo(() => children, [children])}
			</MovableContainer>
		</Root>
	);
}

export default AppContainer;