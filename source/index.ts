import parseColor from 'parse-color';

/**
 * Calculate relative luminance.
 *
 * Use relative luminance definition from W3C
 * https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
 * @param color string any color string
 * @param args object optional arguments: ignoreTransparency (default: false)
 */
const getRelativeLuminance = (
	color: string,
	{ignoreTransparency = false} = {},
) => {
	if (!color) {
		throw new TypeError(
			'getRelativeLuminance() needs you to pass the color parameter.',
		);
		// Return 0;
	}

	const {
		rgba: [r, g, b, a],
	} = parseColor(color);

	// @TODO: account for alpha values (rgba etc)
	// Lea Verou has a good looking approach:
	// https://github.com/LeaVerou/contrast-ratio
	if (a < 1 && !ignoreTransparency) {
		throw new TypeError(
			'getRelativeLuminance() does not now how to handle transparency.',
		);
	}

	const srgb = [r, g, b].map((value) => value / 255);
	const [red, green, blue] = srgb.map((value) =>
		value <= 0.039_28 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4,
	) as [number, number, number];

	const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;

	return luminance;
};

export default getRelativeLuminance;
