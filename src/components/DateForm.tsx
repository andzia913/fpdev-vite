import { useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const DateForm = () => {
  const [date, setDate] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await updateDoc(doc(db, "dates", "end-date"), {
      selectedDate: date,
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm space-y-3 max-w-md hidden">

      <h3 className="font-semibold">Data inwestycji</h3>

      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded px-3 py-2"
        />

        <button className="bg-black text-white px-4 rounded">
          Zapisz
        </button>
      </form>

    </div>
  );
};

export default DateForm;