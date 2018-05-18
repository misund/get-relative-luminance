/* global describe, it */
import assert from 'assert';
import getRelativeLuminance from '..';

function round(number, precision) {
  const factor = 10 ** precision;
  return Math.round(number * factor) / factor;
}

describe('Get relative luminance', () => {
  describe('Test values', () => {
    it('white should have 1 relative luminance', () => {
      assert.equal(getRelativeLuminance('rgb(255,255,255)'), 1);
    });

    it('black should have 0 relative luminance', () => {
      assert.equal(getRelativeLuminance('rgb(0,0,0)'), 0);
    });

    it('rgb(136,136,136) should have 0.2462 relative luminance', () => {
      assert.equal(getRelativeLuminance('rgb(136,136,136)'), 0.24620132670783546);
    });
  });

  describe('Color formats', () => {
    it('should handle named css colors', () => {
      assert.equal(getRelativeLuminance('hotpink'), getRelativeLuminance('rgb(255, 105, 180)'));
    });

    it('should handle hex colors', () => {
      assert.equal(getRelativeLuminance('#ff69b4'), getRelativeLuminance('rgb(255, 105, 180)'));
    });

    it('should handle hsl colors', () => {
      assert.equal(round(getRelativeLuminance('hsl(330, 100%, 71%)') - getRelativeLuminance('hotpink'), 2), 0.00);
    });
  });

  describe('Transparency', () => {
    it('should fail on rgba with a < 1', () => {
      assert.throws(() => getRelativeLuminance('rgba(4,4,4,0.5)'), TypeError);
    });

    it('should handle rgba with a = 1', () => {
      assert.equal(getRelativeLuminance('rgba(255,105,180,1)'), getRelativeLuminance('rgb(255, 105, 180)'));
    });

    it('should fail on hsla colors with a < 1', () => {
      assert.throws(() => getRelativeLuminance('hsl(330, 100%, 71%, 0.5)'), TypeError);
    });

    it('should handle hsla with a = 1', () => {
      assert.equal(getRelativeLuminance('hsla(330, 100%, 71%, 1)'), getRelativeLuminance('hsl(330, 100%, 71%)'));
    });
  });
});
