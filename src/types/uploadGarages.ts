import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

// 🔥 lista miejsc dla niepełnosprawnych
const DISABLED_SPOTS = new Set([
  1, 2, 36, 37,
  45, 46, 47, 48, 49, 50, 51
]);

const generateGarages = () => {
  const garages = [];

  // 🚗 PODZIEMNE (MP)
  for (let i = 1; i <= 33; i++) {
    const num = i.toString().padStart(2, "0");

    garages.push({
      id: `MP-${num}`,
      type: "podziemne",
      status: "dostepne",
      price: 0,
      isDisabled: false, // 🔥 zmiana nazwy (czytelniej)
    });
  }

  // 🚗 ZEWNĘTRZNE (MZ)
  for (let i = 1; i <= 72; i++) {
    const num = i.toString().padStart(2, "0");

    garages.push({
      id: `MZ-${num}`,
      type: "zewnetrzne",
      status: "dostepne",
      price: 0,
      isDisabled: DISABLED_SPOTS.has(i), // 🔥 KLUCZ
    });
  }

  return garages;
};

const uploadGarages = async () => {
  const garages = generateGarages();

  for (const garage of garages) {
    await setDoc(doc(db, "garages", garage.id), garage);
    console.log("Dodano:", garage.id);
  }

  console.log("DONE 🔥");
};

export default uploadGarages;

import { collection, getDocs, updateDoc } from "firebase/firestore";

export const migratePricePerMeter = async () => {
try {
    console.log("🚀 Konwersja priceOfFlat → number...");

    const snapshot = await getDocs(collection(db, "mieszkania"));

    let updated = 0;

    for (const d of snapshot.docs) {
      const data = d.data();

      const raw = data.priceOfFlat;

      // 🔥 jeśli już number → pomijamy
      if (typeof raw === "number") continue;

      // 🔥 czyszczenie stringa (na przyszłość)
      const cleaned = String(raw)
        .replace(/\s/g, "")     // usuń spacje
        .replace("zł", "")      // usuń zł jeśli ktoś wpisał
        .replace(",", ".");     // na wszelki wypadek

      const num = Number(cleaned);

      if (isNaN(num)) {
        console.warn("⛔ Nie udało się sparsować:", d.id, raw);
        continue;
      }

      await updateDoc(doc(db, "mieszkania", d.id), {
        priceOfFlat: num,
      });

      console.log(`✅ ${d.id}: ${raw} → ${num}`);

      updated++;
    }

    console.log(`🔥 DONE! Zmieniono: ${updated}`);
  } catch (e) {
    console.error("❌ Błąd:", e);
  }
};

