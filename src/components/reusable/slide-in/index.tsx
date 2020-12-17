import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
	position: relative;
`;

type SlideInProps = React.PropsWithoutRef<{
	duration?: number,
	offset?: number,
	direction: 'up' | 'down' | 'left' | 'right',
}>;

type SlideInComponent = React.FunctionComponent<SlideInProps>;

const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time));

const SlideIn: SlideInComponent = ({ duration = 2000, direction, offset = 100, children }) => {
	const rootRef = React.useRef<HTMLDivElement>(null);
	const noscriptRef = React.useRef<HTMLElement>(null);

	React.useEffect(() => {
		// If this function runs, we surely have JavaScript enabled.
		noscriptRef.current!.style.display = 'none';

		(async () => {
			const { style } = rootRef.current!;
			style.display = 'block';
			style.opacity = '0';
			await sleep(10);
			(style as any)[direction] = '0px';
			style.opacity = '1';
		})();
	}, []);

	return (
		<div>
			{/* If JavaScript is disabled, just display the content, without animation */}
			<noscript ref={noscriptRef}>
				{children}
			</noscript>
			<Root ref={rootRef} style={{ display: 'none', transition: `${duration}ms`, [direction]: offset + 'px', opacity: 0 }}>
				{children}
			</Root>
		</div>
	);
}

export default SlideIn;