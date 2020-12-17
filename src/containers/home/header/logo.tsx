import React from 'react';

type HeaderLogoProps = React.PropsWithoutRef<{
}> & React.ComponentProps<'svg'>;

type HeaderLogoComponent = React.FunctionComponent<HeaderLogoProps>;

const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time));

const HeaderLogo: HeaderLogoComponent = ({ ...props }) => {
	const letterContainerRef = React.useRef<SVGGElement>(null);
	const redBuildingRef = React.useRef<SVGGElement>(null);
	const orangeBuildingRef = React.useRef<SVGGElement>(null);
	const greenBuildingRef = React.useRef<SVGGElement>(null);
	const yellowBuildingRef = React.useRef<SVGGElement>(null);
	const blueBuildingRef = React.useRef<SVGGElement>(null);
	const ballRef = React.useRef<SVGEllipseElement>(null);
	const ballBackgroundRef = React.useRef<SVGRectElement>(null);

	function reset () {
		const resetElem = (elem: React.RefObject<SVGGElement>) => elem.current!.setAttribute('style', '');
		resetElem(redBuildingRef);
		resetElem(orangeBuildingRef);
		resetElem(greenBuildingRef);
		resetElem(yellowBuildingRef);
		resetElem(blueBuildingRef);
		resetElem(ballRef);
		resetElem(ballBackgroundRef);
		setBuildingChildrenColor(redBuildingRef, 'gray');
		setBuildingChildrenColor(orangeBuildingRef, 'gray');
		setBuildingChildrenColor(blueBuildingRef, 'gray');
		setBuildingChildrenColor(greenBuildingRef, 'gray');
		setBuildingChildrenColor(yellowBuildingRef, 'gray');
		setLettersColor('gray');
	}

	async function setBuildingChildrenColor (building: React.RefObject<SVGGElement>, color: string = '') {
		const children = building.current!.querySelectorAll('.building-body') as any as SVGElement[];
		for(const child of children) {
			child.style.fill = color;
		}
	}

	async function animateBuilding (building: React.RefObject<SVGGElement>) {
		const { style } = building.current!;
		style.transform = 'scale(1, 1)';
	}

	async function animateBall () {
		const ballStyle = ballRef.current!.style;
		const backgroundStyle = ballBackgroundRef.current!.style;

		ballStyle.opacity = '1';
		await sleep(500);

		ballStyle.transform = 'translate(0, 0)';
		backgroundStyle.opacity = '1';
		backgroundStyle.transform = 'scale(1, 1)';
	}

	function setLettersColor (color: string = '') {
		const children = letterContainerRef.current!.querySelectorAll('.letter') as any as SVGElement[];
		for(const child of children) {
			child.style.fill = color;
		}
	}

	async function animate () {
		await sleep(500);
		animateBuilding(redBuildingRef);
		await sleep(200);
		animateBuilding(orangeBuildingRef);
		await sleep(100);
		animateBuilding(blueBuildingRef);
		await sleep(200);
		animateBuilding(greenBuildingRef);
		await sleep(50);
		animateBuilding(yellowBuildingRef);
		await sleep(1000);
		animateBall();
		await sleep(500);
		setBuildingChildrenColor(redBuildingRef);
		setBuildingChildrenColor(orangeBuildingRef);
		setBuildingChildrenColor(blueBuildingRef);
		setBuildingChildrenColor(greenBuildingRef);
		setBuildingChildrenColor(yellowBuildingRef);
		setLettersColor();
	}

	React.useEffect(() => {
		reset();
		animate();
	}, []);

	return <>
		<svg {...props} viewBox="163.29 86 457 605.54" style={{ width: '100%', height: '100%' }}>
			<style>{styleString}</style>
			<defs>
				<linearGradient id="linear-gradient" x1="171.5" y1="463.77" x2="612.07" y2="463.77" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="white"/>
					<stop offset="1" stopColor="#8228e0"/>
				</linearGradient>
			</defs>
			<rect fill="#efefef" x="163.29" y="86" width="457" height="441" rx="84.55" ry="84.55"/>
			<rect className='ball-background' ref={ballBackgroundRef} stroke='#fff' strokeMiterlimit='10' strokeWidth='10.71px' fill='url(#linear-gradient)' x='178.23' y='405.02' width='440.57' height='137.51' rx='65.54' ry='65.54'/>
			<ellipse className='ball' ref={ballRef} fill='#8228e0' cx='550.66' cy='474.57' rx='64.86' ry='62.34'/>
			{/* Red building */}
			<g className='building' ref={redBuildingRef}>
				<rect className='building-body' style={{ fill: 'gray' }} fill='#cd004b' x="314.7" y="119.28" width="140.68" height="242.72" rx="24" ry="24"/>
			</g>
			{/* Orange building */}
			<g className='building' ref={orangeBuildingRef}>
				<rect className='building-body' style={{ fill: 'gray' }} fill='#f3711b' x="246.8" y="218.84" width="103.12" height="143.16" rx="20" ry="20"/>
			</g>
			{/* Yellow building */}
			<g className='building' ref={yellowBuildingRef}>
				<rect className='building-body' style={{ fill: 'gray' }} fill='#fcb808' x="202.7" y="264.12" width="69.26" height="97.88" rx="18.19" ry="18.19"/>
			</g>
			{/* Blue building */}
			<g className='building' ref={blueBuildingRef}>
				<path className='building-body' style={{ fill: 'gray' }} fill='#008ad1' d="M518.73,362H447.65a16.41,16.41,0,0,1-16.41-16.41V203.14A16.41,16.41,0,0,1,455,188.5l71.08,35.85a16.41,16.41,0,0,1,9,14.65v106.6A16.41,16.41,0,0,1,518.73,362Z"/>
			</g>
			{/* Green building */}
			<g className='building' ref={greenBuildingRef}>
				<rect className='building-body' style={{ fill: 'gray' }} fill='#04b34a' x="511.62" y="264.12" width="69.26" height="97.88" rx="15.72" ry="15.72"/>
			</g>
			<g ref={letterContainerRef}>
				<path style={{ fill: 'gray' }} className="letter" d="M210.74,660.18a4.17,4.17,0,0,1-4.16,2.4h-6.24a4,4,0,0,1-4-2.4l-11.84-26.4c-1.44-3-3.36-10.08-4.16-13.12a127.53,127.53,0,0,1,1.12,13.28v53.44a4.24,4.24,0,0,1-4.16,4.16h-5.76a4.21,4.21,0,0,1-4-4.16V594.89a4.21,4.21,0,0,1,4-4.16h5.92a4.2,4.2,0,0,1,4,2.72l19.2,42.72a56.47,56.47,0,0,1,3,8.8,56.61,56.61,0,0,1,3-8.8l19.2-42.72a4.2,4.2,0,0,1,4-2.72h5.6a4.24,4.24,0,0,1,4.16,4.16v92.49a4.24,4.24,0,0,1-4.16,4.16h-5.76a4.24,4.24,0,0,1-4.16-4.16V633.94a80.54,80.54,0,0,1,1.28-12.64,118.17,118.17,0,0,1-4.32,12.48Z"/>
				<path style={{ fill: 'gray' }} className="letter" d="M315.39,665.78a25.64,25.64,0,0,1-25.76,25.76h-6.56a25.75,25.75,0,0,1-25.76-25.76V616.49a25.85,25.85,0,0,1,25.76-25.76h6.56a25.64,25.64,0,0,1,25.76,25.76Zm-28.64-87.53-5,4.48c-2.08,1.92-3.2,2.4-5.28,2.4h-4.16c-2.08,0-3.84-1.28-2.08-3.84l6.24-8.64c1.92-2.56,3.52-3.52,5.6-3.52h9.44c2.08,0,3.52.64,5.6,3.52l6.24,8.64c1.76,2.56,0,3.84-2.08,3.84h-4.16c-2.08,0-3-.64-5.12-2.4Zm2.88,100.49c6.56,0,11.84-5.44,11.84-12.48V616c0-7-5.28-12.48-11.84-12.48H282.9c-6.4,0-11.68,5.44-11.68,12.48v50.25c0,7,5.28,12.48,11.68,12.48Z"/>
				<path style={{ fill: 'gray' }} className="letter" d="M349.94,633.78a72.35,72.35,0,0,1-4.16-12.16,88.17,88.17,0,0,1,1.12,12.32v53.44a4.24,4.24,0,0,1-4.16,4.16h-5.6a4.24,4.24,0,0,1-4.16-4.16V594.89a4.24,4.24,0,0,1,4.16-4.16h6.4a4.35,4.35,0,0,1,4,2.72l26.88,59.69a93.52,93.52,0,0,1,3.84,11,76.32,76.32,0,0,1-1.12-11V594.89a4.24,4.24,0,0,1,4.16-4.16h5.6a4.24,4.24,0,0,1,4.16,4.16v92.49a4.24,4.24,0,0,1-4.16,4.16h-7.52c-1.6,0-3.68-.64-4.32-2.08Z"/>
				<path style={{ fill: 'gray' }} className="letter" d="M417.15,604.65c2.4-8.32,10.72-13.92,19.84-13.92s17.6,5.6,20,13.92L464.83,632a60.89,60.89,0,0,1,1.28,11.84v43.52a4.24,4.24,0,0,1-4.16,4.16h-5.6a4.24,4.24,0,0,1-4.16-4.16v-28.8h-30.4v28.8a4.24,4.24,0,0,1-4.16,4.16H412a4.24,4.24,0,0,1-4.16-4.16V643.86A55.44,55.44,0,0,1,409.14,632Zm4.64,41.13h30.4V644.5a53.76,53.76,0,0,0-1.12-9.76l-6.88-24.32c-1.12-3.68-3.36-6.88-7.2-6.88s-6.08,2.72-7.2,6.88l-6.88,24.16a39.94,39.94,0,0,0-1.12,9.92Z"/>
				<path style={{ fill: 'gray' }} className="letter" d="M482.91,687.38V594.89a4.24,4.24,0,0,1,4.16-4.16h28.16A25.64,25.64,0,0,1,541,616.49v49.29a25.64,25.64,0,0,1-25.76,25.76H487.07A4.24,4.24,0,0,1,482.91,687.38Zm13.92-8.64h18.4c6.56,0,11.84-5.44,11.84-12.48V616c0-7-5.28-12.48-11.84-12.48h-18.4Z"/>
				<path style={{ fill: 'gray' }} className="letter" d="M567.07,604.65c2.4-8.32,10.72-13.92,19.84-13.92s17.6,5.6,20,13.92L614.75,632A60.89,60.89,0,0,1,616,643.86v43.52a4.24,4.24,0,0,1-4.16,4.16h-5.6a4.24,4.24,0,0,1-4.16-4.16v-28.8h-30.4v28.8a4.24,4.24,0,0,1-4.16,4.16h-5.6a4.24,4.24,0,0,1-4.16-4.16V643.86A55.44,55.44,0,0,1,559.07,632Zm4.64,41.13h30.4V644.5a53.82,53.82,0,0,0-1.12-9.76l-6.88-24.32c-1.12-3.68-3.36-6.88-7.2-6.88s-6.08,2.72-7.2,6.88l-6.88,24.16a39.94,39.94,0,0,0-1.12,9.92Z"/>
			</g>
		</svg>
		{/* <noscript>
			<Images.Logo.Main />
	 	</noscript> */}
	</>;
}

const styleString = `
	.building {
		transform-origin: 50% 362.000022888px;
		transition: 1000ms;
		transform: scale(1, 0);
	}
	.ball {
		opacity: 0;
		transition: 1000ms;
		transform: translate(-307.57px, 0);
	}
	.ball-background {
		transition: 1000ms;
		opacity: 0;
		transform-origin: 178.23px 0;
		transform: scale(0, 1);
	}
	.white-line {
		fill: white;
	}
	.building-body {
		transition: 1000ms;
		stroke: #efefef;
		stroke-width: 11px;
	}
	.letter {
		fill: #8228e0;
		transition: 1000ms;
	}
`.replace(/\t|\n/g, '');

export default HeaderLogo;