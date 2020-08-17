import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
`;

type HeaderLogoProps = React.PropsWithoutRef<{
}>;

type HeaderLogoComponent = React.FunctionComponent<HeaderLogoProps>;

const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time));

const HeaderLogo: HeaderLogoComponent = ({  }) => {
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
	}

	React.useEffect(() => {
		reset();
		animate();
	}, []);

	return (
		<Root>
			<svg viewBox='176 79 448.5 463.9978942871094' height='463.9978942871094' width='448.5'>
				<style>{`
				.building {
					transform-origin: 50% 370.68px;
					transition: 1000ms;
					transform: scale(1, 0);
					filter: grayscale(1);
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
				}
				`}</style>
				<defs>
					<linearGradient id='linear-gradient' x1='178.23' y1='473.77' x2='618.8' y2='473.77' gradientUnits='userSpaceOnUse'>
						{/* <stop offset='0' stopColor='#a59fea'/> */}
						<stop offset='0' stopColor='white'/>
						<stop offset='1' stopColor='#8228e0'/>
					</linearGradient>
				</defs>
				<rect className='ball-background' ref={ballBackgroundRef} stroke='#fff' strokeMiterlimit='10' strokeWidth='10.71px' fill='url(#linear-gradient)' x='178.23' y='405.02' width='440.57' height='137.51' rx='65.54' ry='65.54'/>
				<ellipse className='ball' ref={ballRef} fill='#8228e0' cx='550.66' cy='474.57' rx='64.86' ry='62.34'/>
				{/* Red building */}
				<g className='building' ref={redBuildingRef}>
					<polygon className='building-body' style={{ fill: 'gray' }} fill='#cd004b' points='441.32 153.5 441.32 129.63 422.83 129.63 422.83 112.28 382.78 112.28 382.78 129.63 364.29 129.63 364.29 153.5 339.64 153.5 339.64 370.68 465.97 370.68 465.97 153.5 441.32 153.5'/>
				</g>
				{/* Orange building */}
				<g className='building' ref={orangeBuildingRef}>
					<polyline className='white-line' points='338.24 370.68 382.02 370.68 382.02 228.8 361.3 228.8 361.3 214.49 338.93 214.49'/>
					<polygon className='building-body' style={{ fill: 'gray' }} fill='#f3711b' points='351.36 236.02 351.36 221.22 286.58 221.22 286.58 236.02 265.85 236.02 265.85 370.68 372.09 370.68 372.09 236.02 351.36 236.02'/>
				</g>
				{/* Yellow building */}
				<g className='building' ref={yellowBuildingRef}>
					<rect className='white-line' x='265.52' y='262.04' width='34.24' height='108.64'/>
					<rect className='building-body' style={{ fill: 'gray' }} fill='#fcb808' x='226.89' y='268.68' width='62.22' height='102'/>
				</g>
				{/* Blue building */}
				<g className='building' ref={blueBuildingRef}>
					<polyline className='white-line' points='462.68 370.68 426.65 370.68 426.65 164.11 466.68 188.21'/>
					<polygon className='building-body' style={{ fill: 'gray' }} fill='#008ad1' points='529.92 370.68 436.59 370.68 436.59 177.36 529.92 231.97 529.92 370.68'/>
				</g>
				{/* Green building */}
				<g className='building' ref={greenBuildingRef}>
					<rect className='white-line' x='494.95' y='262.75' width='35.26' height='107.86'/>
					<rect className='building-body' style={{ fill: 'gray' }} fill='#04b34a' x='504.88' y='268.68' width='62.22' height='102'/>
				</g>
			</svg>
		</Root>
	);
}

export default HeaderLogo;