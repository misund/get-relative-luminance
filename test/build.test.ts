/* global describe, it */
import assert from "assert";
import getRelativeLuminance from "../build/index.js";

describe("Built output", () => {
  it("should export a working ESM module", () => {
    assert.strictEqual(typeof getRelativeLuminance, "function");
  });

  it("should calculate luminance correctly from built output", () => {
    assert.strictEqual(getRelativeLuminance("rgb(255,255,255)"), 1);
    assert.strictEqual(getRelativeLuminance("rgb(0,0,0)"), 0);
  });
});
