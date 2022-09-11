import test from 'ava';
import getRelativeLuminance from './index.js';

function round(number: number, precision: number): number {
	const factor = 10 ** precision;
	return Math.round(number * factor) / factor;
}

test('white should have 1 relative luminance', (t) => {
	t.is(getRelativeLuminance('rgb(255,255,255)'), 1);
});

test('black should have 0 relative luminance', (t) => {
	t.is(getRelativeLuminance('rgb(0,0,0)'), 0);
});

test('rgb(136,136,136) should have 0.2462 relative luminance', (t) => {
	t.is(getRelativeLuminance('rgb(136,136,136)'), 0.246_201_326_707_835_46);
});

test('should handle named css colors', (t) => {
	t.deepEqual(
		getRelativeLuminance('hotpink'),
		getRelativeLuminance('rgb(255, 105, 180)'),
	);
});

test('should handle hex colors', (t) => {
	t.deepEqual(
		getRelativeLuminance('#ff69b4'),
		getRelativeLuminance('rgb(255, 105, 180)'),
	);
});

test('should handle hsl colors', (t) => {
	t.is(
		round(
			getRelativeLuminance('hsl(330, 100%, 71%)') -
				getRelativeLuminance('hotpink'),
			2,
		),
		0,
	);
});

test('should fail on rgba with a < 1', (t) => {
	const error = t.throws(
		() => {
			getRelativeLuminance('rgba(4,4,4,0.5)');
		},
		{instanceOf: TypeError},
	);
	t.is(
		error?.message,
		'getRelativeLuminance() does not now how to handle transparency.',
	);
});

test('should handle rgba with a = 1', (t) => {
	t.deepEqual(
		getRelativeLuminance('rgba(255,105,180,1)'),
		getRelativeLuminance('rgb(255, 105, 180)'),
	);
});

test('should fail on hsla colors with a < 1', (t) => {
	const error = t.throws(
		() => {
			getRelativeLuminance('hsl(330, 100%, 71%, 0.5)');
		},
		{instanceOf: TypeError},
	);
	t.is(
		error?.message,
		'getRelativeLuminance() does not now how to handle transparency.',
	);
});

test('should handle hsla with a = 1', (t) => {
	t.deepEqual(
		getRelativeLuminance('hsla(330, 100%, 71%, 1)'),
		getRelativeLuminance('hsl(330, 100%, 71%)'),
	);
});

test('should fail when color is empty', (t) => {
	const error = t.throws(
		() => {
			getRelativeLuminance('');
		},
		{instanceOf: TypeError},
	);
	t.is(
		error?.message,
		'getRelativeLuminance() needs you to pass the color parameter.',
	);
});
