export type garageType = {
  id: string;
  type: "podziemne" | "zewnetrzne";
  status: "dostepne" | "rezerwacja" | "sprzedane" | "niedostepne";
  price: number;
  disabled?: boolean | undefined; 
};