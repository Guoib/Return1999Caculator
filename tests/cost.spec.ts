import { describe, expect, it } from "vitest";
import Back1999Calculator from "@/calculator";

describe("cost", () => {
  const calculator = new Back1999Calculator();
  Back1999Calculator.energyCostPerHundred = 120;

  it("level30", () => {
    expect(calculator.calcGiftValue({ 微尘: 300000, 利齿子儿: 120000, 启寤3: 20 }).toFixed(0)).toBe("1665");
  });

  it("weekly", () => {
    expect(calculator.calcGiftValue({ 微尘: 100000, 利齿子儿: 60000, 启寤3: 5, 启寤2: 20, 启寤1: 20 }).toFixed(0)).toBe(
      "958"
    );
  });
});
