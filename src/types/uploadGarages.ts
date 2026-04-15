const generateGarages = () => {
  const garages = [];

  for (let i = 1; i <= 33; i++) {
    const num = i.toString().padStart(2, "0");

    garages.push({
      id: `MP-${num}`,
      type: "podziemne",
      status: "dostepne",
      price: 0,
      disabled: false,
    });
  }

  for (let i = 1; i <= 72; i++) {
    const num = i.toString().padStart(2, "0");

    garages.push({
      id: `MZ-${num}`,
      type: "zewnetrzne",
      status: "dostepne",
      price: 0,
      disabled: false, // np. pierwsze 5 dla niepełnosprawnych
    });
  }

  return garages;
};

import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase"; // Twój config


const uploadGarages = async () => {
  const garages = generateGarages();

  for (const garage of garages) {
    await addDoc(collection(db, "garages"), garage);
    console.log("Dodano:", garage.id); 
  }

  console.log("DONE 🔥");
};
export default uploadGarages;
