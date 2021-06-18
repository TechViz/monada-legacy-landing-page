/**
 * Used to describe shadows of hoverable components, such as buttons.
 */
type HoverableShadow = {
	/** The shadow that should be applied when there is no mouse interaction */
	normal: string;
	/** The shadow that should be applied when the user is clicking the element. */
	active: string;
	/** The shadow that should be applied when the user is hovering the mouse on top
	 * of the element. Should also be applied for the `focus` event to provide
	 * feedback for keyboard users. */
	hover: string;
};

export type DefaultThemeShadows = {
	/** Layout shadows are shadows related to things like cards, the navbar, etc...
	 * These shadows are usually larger and more subtle */
	card: {
		medium: string;
	};

	/** Button shadows are shadows for clickable elements. They are usually
	 * sharper and more dynamic. */
	button: {
		medium: string;
	};
};

export const DefaultThemeShadows = {
	card: {
		medium: `4px 4px 4px rgba(0, 0, 0, 0.25)`,
	},

	button: {
		medium: `-2px 2px 15px rgba(0, 0, 0, 0.25)`,
	},
} as DefaultThemeShadows;
