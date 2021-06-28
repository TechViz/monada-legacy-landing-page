/** This is an `interpolation function`. You can imagine as if there was a ball
 * that starts at the `start` number, and ends at the `end` number, ant it takes
 * `maxTime` milisseconds to complete the whole course. This function will receive
 * all these arguments, and a `deltaTime` argument, which is the ammount of time that
 * has passed since the ball started it's course. This function will then try to
 * predict the current position of the ball.
 * For more information about interpolation, link: https://en.wikipedia.org/wiki/Interpolation
 *
 * @argument start The starting number.
 * @argument end The end number.
 * @argument deltaTime The time in milisseconds that has already passed.
 * @argument maxTime The maximum ammount of time in milisseconds for the animation to run.
 * @returns The current number step.
 */
function step(start: number, end: number, deltaTime: number, maxTime: number) {
	const sineArgument = (deltaTime / maxTime) * Math.PI - Math.PI / 2;
	const sine = (Math.sin(sineArgument) + 1) / 2;
	return (end - start) * sine + start;
}

/**
 * @argument scrollableElem The element that would be scrolled. Normaly, this would be
 * the `window` element, but could be any other element.
 * @argument targetElem The element that should enter into view.
 * @argument time The time, in milisseconds, to execute the animation
 */
async function smoothScroll(
	scrollableElem: HTMLElement,
	targetElem: HTMLElement,
	time: number,
	offset = 0,
) {
	// This Promise will be resolved when the animation ends
	return new Promise<undefined>(resolve => {
		const currentWindowsScroll = scrollableElem.scrollTop;
		const elementTop = targetElem.offsetTop - scrollableElem.offsetTop + offset;

		// Here, we want to scroll the `currentWindowScroll` into the `elementTop`.

		const initialTime = Date.now();

		/** The "frame" function that will update the screen's scroll postiion */
		function applyStep() {
			const currentTime = Date.now();

			// always scroll to the destiny if enough time has passed.
			// Guarantees no math imprecision wil be visible by the user.
			if (currentTime >= initialTime + time) {
				scrollableElem.scroll(0, elementTop);
				// The function ended. Promise can be resolved now.
				resolve(undefined);
				return;
			}

			// Calculate and scroll to the resulting step.
			const delta = currentTime - initialTime;
			const stepValue = step(currentWindowsScroll, elementTop, delta, time);
			scrollableElem.scroll(0, Math.floor(stepValue));
			requestAnimationFrame(applyStep);
		}
		requestAnimationFrame(applyStep);
	});
}

/**
 * Will scroll the element with id `idToFocus` into view (and align them with the
 * top of the screen).
 *
 * @argument idToFocus The Id of the element that should be focused.
 * @argument animationTime The time it takes for the animation to happen.
 */
export async function smoothScrollIntoElementId(
	idToFocus: string,
	animationTime = 1000,
	offset = 0,
) {
	if (!document) throw new Error('Trying to scroll into element while server-side rendering!');

	const containerElem = document.body.parentElement;

	if (!containerElem) {
		console.info('Warning. The container element was not found. Scroll function will be ignored.');
		return;
	}

	const targetElem = document.getElementById(idToFocus);
	if (!targetElem) {
		console.warn(`Trying to scroll to invalid element of id '${idToFocus}'`);
		return;
	}

	return smoothScroll(containerElem, targetElem, animationTime, offset);
}
