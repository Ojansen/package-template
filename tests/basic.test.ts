import { describe, expect, it } from "vitest";
import { base } from "../src";
describe("Basic.test.ts", () => {
  it("should test correctly", () => {
    expect(base()).toBe("It works");
  });
});
