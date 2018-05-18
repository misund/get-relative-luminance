import parseColor from 'parse-color';

/**
 * Calculate relative luminance.
 *
 * Use relative luminance definition from W3C
 * https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
 * @param color string any color string
 * @param args object optional arguments: ignoreTransparency (default: false)
 */
const getRelativeLuminance = (color, { ignoreTransparency = false } = {}) => {
  if (!color) {
    throw new TypeError('getRelativeLuminance() needs you to pass the color parameter.');
    // return 0;
  }

  const {
    rgba: [
      r, g, b, a,
    ],
  } = parseColor(color);

  // @TODO: account for alpha values (rgba etc)
  // Lea Verou has a good looking approach:
  // https://github.com/LeaVerou/contrast-ratio
  if (a < 1 && !ignoreTransparency) {
    throw new TypeError('getRelativeLuminance() does not now how to handle transparency.');
  }

  const srgb = [r, g, b].map(value => value / 255);
  const [R, G, B] = srgb.map(value => (
    value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4));

  const L = (0.2126 * R) + (0.7152 * G) + (0.0722 * B);

  return L;
};

export default getRelativeLuminance;
