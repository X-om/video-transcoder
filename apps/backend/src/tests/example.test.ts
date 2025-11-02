import { describe, it, expect } from "vitest";
import { greet } from "@repo/utils";

describe("Backend Tests", () => {
  it("should greet correctly", () => {
    expect(greet("Test")).toBe("Hello, Test!");
  });

  it("should perform basic math", () => {
    expect(2 + 2).toBe(4);
  });
});
