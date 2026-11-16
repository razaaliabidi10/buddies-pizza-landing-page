import { describe, expect, it } from "vitest";
import { deals, sizes, stuffedCrust, formatPKR } from "./menu";

const price = (id: string) => deals.find((d) => d.id === id)?.price;

describe("Buddies menu prices (PKR)", () => {
  it("pizza sizes match the printed menu", () => {
    expect(sizes.map((s) => s.price)).toEqual([300, 500, 700]);
  });
  it("12 inch stuffed crust is Rs. 999", () => {
    expect(stuffedCrust.price).toBe(999);
  });
  it("deal prices match the printed menu", () => {
    expect(price("deal-2")).toBe(900);
    expect(price("deal-3")).toBe(1300);
    expect(price("deal-5")).toBe(1099);
    expect(price("deal-11")).toBe(1700);
    expect(price("deal-16")).toBe(1150);
  });
  it("formats rupees", () => {
    expect(formatPKR(1450)).toBe("Rs. 1,450");
  });
});
