export type Garage = {
  id: string;
  type: "podziemne" | "zewnetrzne";
  status: "dostepne" | "rezerwacja" | "sprzedane";
  price: number;
  disabled?: boolean | undefined; 
};