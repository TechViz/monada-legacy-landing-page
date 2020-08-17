import React from "react";
import Styled from 'styled-components';

const Root = Styled.button`
	width: max-content;
	height: max-content;
	margin: 0.2rem 0.5rem;
	background-color: transparent;
	border: none;
	outline: none;
`;

const Bar = Styled.div<{ animationTime: number }>`
	position: relative;
	width: 30px;
	height: 4px;
	background-color: ${props => props.theme.colors.primary.main};
	margin: 8px 0;
	top: 0;
	transition: ${({ animationTime }) => animationTime}ms cubic-bezier(0.77, 0, 0.175, 1);
`;

type HamburguerProps = React.PropsWithRef<{
	/** callback called when the hamburguer is opened */
	onOpen?: () => void,
	/** callback called when the hamburguer is closed */
	onClose?: () => void,
	/** Time (in milisseconds) it takes to animate the hamburguer */
	animationTime?: number,
}>;

type HamburguerComponent = React.ForwardRefRenderFunction<HTMLButtonElement, HamburguerProps>;

const Hamburguer: HamburguerComponent = ({
	onOpen = (()=>{}),
	onClose = (()=>{}),
	animationTime = 200, //in milisseconds
	...props
}, ref) => {
	let [isOpen, setIsOpen] = React.useState<boolean>(false);

	React.useEffect(()=>{
		if(isOpen) onOpen();
		else onClose();
	}, [isOpen]);

	return (
		<Root {...props} onClick={() => setIsOpen(s => !s)} ref={ref}>
			<Bar animationTime={animationTime} style={{
				top: isOpen? `11px` : `0px`,
				transform: isOpen? `rotate(45deg)` : 'rotate(0deg)',
			}}/>
			<Bar animationTime={animationTime} style={{
				opacity: isOpen? `0` : `1`
			}}/>
			<Bar animationTime={animationTime} style={{
				top: isOpen? `-13px` : `0px`,
				transform: isOpen? `rotate(-45deg)` : 'rotate(0deg)',
			}}/>
		</Root>
	);
}

export default React.forwardRef(Hamburguer);