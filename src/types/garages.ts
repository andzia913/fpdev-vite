export type Garage = {
  id: string;
  type: "podziemne" | "zewnetrzne";
  status: "dostępne" | "rezerwacja" | "sprzedane";
  price: number;
};