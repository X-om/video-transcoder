import { describe, it, expect } from "vitest";
import { greet, capitalize, formatDate } from "../index.js";

describe("Utils", () => {
  describe("greet", () => {
    it("should greet correctly", () => {
      expect(greet("World")).toBe("Hello, World!");
    });
  });

  describe("capitalize", () => {
    it("should capitalize first letter", () => {
      expect(capitalize("hello")).toBe("Hello");
    });

    it("should handle empty string", () => {
      expect(capitalize("")).toBe("");
    });
  });

  describe("formatDate", () => {
    it("should format date correctly", () => {
      const date = new Date("2025-01-15T10:30:00Z");
      expect(formatDate(date)).toBe("2025-01-15");
    });
  });
});
