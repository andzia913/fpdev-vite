import React, { useEffect, useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import useFlatsData from "../utils/dataService";
import { Input } from "./AdminInput";

const validatePrice = (val: string) => {
  const num = Number(val);
  if (!val) return "Pole wymagane";
  if (isNaN(num)) return "Nieprawidłowa liczba";
  if (num < 1000) return "Za mała wartość";
  return "";
};

const FlatEditor = () => {
  const { flatsData } = useFlatsData();

  const [selected, setSelected] = useState<any>(null);

  const [priceMeter, setPriceMeter] = useState("");
  const [priceFlat, setPriceFlat] = useState("");
  const [status, setStatus] = useState("");

  const [errors, setErrors] = useState<any>({});

  const handleSave = async () => {
    if (!selected) return;
    
    const newErrors = {
      priceMeter: validatePrice(priceMeter),
      priceFlat: validatePrice(priceFlat),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    await updateDoc(doc(db, "mieszkania", selected.numberOfFlat), {
      priceOfMeter: priceMeter || selected.priceOfMeter,
      priceOfFlat: priceFlat || selected.priceOfFlat,
      statute: status || selected.statute,
    });

    alert("Zapisano");
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">

      <h3 className="font-semibold">Mieszkania</h3>

      <select
        onChange={(e) =>
          setSelected(
            flatsData.find(f => f.numberOfFlat === e.target.value)
          )
        }
        className="border px-3 py-2 rounded max-w-xs"
      >
        <option>Wybierz</option>
        {flatsData.map(f => (
          <option key={f.numberOfFlat}>{f.numberOfFlat}</option>
        ))}
      </select>

      {selected && (
        <div className="flex flex-wrap gap-4">

          <Input
            label="Cena m²"
            placeholder={selected.priceOfMeter}
            onChange={setPriceMeter}
            error={errors.priceMeter}
          />

          <Input
            label="Cena całkowita"
            placeholder={selected.priceOfFlat}
            onChange={setPriceFlat}
            error={errors.priceFlat}
          />

          <div className="max-w-xs w-full">
            <label className="text-sm text-gray-500">Status</label>
            <select
              className="w-full border rounded px-3 py-2"
              onChange={(e) => setStatus(e.target.value)}
              defaultValue={selected.statute}
            >
              <option value="dostępne">Dostępne</option>
              <option value="rezerwacja">Rezerwacja</option>
              <option value="sprzedane">Sprzedane</option>
            </select>
          </div>

        </div>
      )}

      {selected && (
        <button
          onClick={handleSave}
          className="bg-[var(--color-primary)] text-white px-4 py-2 rounded"
        >
          Zapisz
        </button>
      )}

    </div>
  );
};

export default FlatEditor;