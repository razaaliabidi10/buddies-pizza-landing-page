// Prices in Pakistani Rupees, taken from the Buddy's Pizza printed menu.
export const PHONE_PRIMARY = "0342-2455974";
export const PHONE_TEL = "+923422455974";

export type PizzaSize = {
  id: string;
  name: string;
  price: number;
  note: string;
};

export const sizes: PizzaSize[] = [
  { id: "small", name: "Small", price: 300, note: "Solo cravings, sorted." },
  { id: "medium", name: "Medium", price: 500, note: "For you and a buddy." },
  { id: "large", name: "Large", price: 700, note: "The whole gang's favourite." },
];

export const stuffedCrust = { id: "stuffed-12", name: '12" Stuffed Crust', price: 999 };

export type Deal = {
  id: string;
  name: string;
  items: string[];
  price: number | null; // null = price not readable on the printed menu
};

export const deals: Deal[] = [
  { id: "deal-2", name: "Deal 2", items: ["2 Medium Pizza"], price: 900 },
  { id: "deal-3", name: "Deal 3", items: ["2 Large Pizza"], price: 1300 },
  { id: "deal-4", name: "Deal 4", items: ["2 Large Pizza", "1 Ltr Drink"], price: 1450 },
  { id: "deal-5", name: "Deal 5", items: ["2 Medium Pizza", "1 Ltr Drink"], price: 1099 },
  {
    id: "deal-8",
    name: "Deal 8",
    items: ["1 Large Pizza", "1 Medium Pizza", "Cold Drink 1 Ltr"],
    price: 1250,
  },
  { id: "deal-9", name: "Deal 9", items: ["1 Chicken Pasta", "Cold Drink 345ml"], price: 549 },
  { id: "deal-10", name: "Deal 10", items: ["1 Medium Pizza", "1 Cold Drink 345ml"], price: 550 },
  {
    id: "deal-11",
    name: "Deal 11",
    items: ["2 Large Pizza", "1 Chicken Cheese Sandwich", "Cold Drink 1 Ltr"],
    price: 1700,
  },
  { id: "deal-14", name: "Deal 14", items: ["1 Medium Pizza", "1 Pizza Pie"], price: 1100 },
  { id: "deal-15", name: "Deal 15", items: ["1 Large Pizza", "1 Pasta + Sandwich"], price: 1450 },
  { id: "deal-16", name: "Deal 16", items: ["1 Large Pizza", "1 Medium Pizza"], price: 1150 },
];

export const familyDeal: Deal = {
  id: "family",
  name: "Family Deal",
  items: ["2 Large Pizza", "Pizza Pie", "1 Stuffed Crust Pizza", "1 Cold Drink 1.5 Ltr"],
  price: null,
};

export const formatPKR = (n: number) => `Rs. ${n.toLocaleString("en-PK")}`;
