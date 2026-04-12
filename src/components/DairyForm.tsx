import React, { useState } from "react";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import useDiaryData from "../utils/dataServiceDiaryData";

interface DiaryEntry {
  id: string;
  date: string;
  title: string;
}

interface FormState {
  id: string;
  date: string;
  title: string;
}

const DiaryForm = () => {
  const { diaryData } = useDiaryData() as { diaryData: DiaryEntry[] };

  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState<FormState>({
    id: "",
    date: "",
    title: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.date || !form.title) {
      setError("Uzupełnij wszystkie pola");
      return;
    }

    try {
      if (form.id) {
        // UPDATE
        await updateDoc(doc(db, "diary", form.id), {
          date: form.date,
          title: form.title,
        });
      } else {
        // ADD
        await addDoc(collection(db, "diary"), {
          date: form.date,
          title: form.title,
        });
      }

      setForm({ id: "", date: "", title: "" });
      setError("");
      alert("Zapisano wpis");
    } catch {
      setError("Błąd zapisu");
    }
  };

  const handleSelect = (id: string) => {
    const found = diaryData.find((d: DiaryEntry) => d.id === id);

    if (found) {
      setForm({
        id: found.id,
        date: found.date,
        title: found.title,
      });
    } else {
      setForm({ id: "", date: "", title: "" });
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">

      {/* HEADER */}
      <button
        className="font-semibold text-left"
      >
        Dziennik budowy
      </button>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">

          {/* SELECT */}
          <div>
            <label className="text-sm text-gray-500">
              Wybierz wpis (opcjonalnie)
            </label>

            <select
              value={form.id}
              onChange={(e) => handleSelect(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Nowy wpis</option>
              {diaryData.map((d:any) => (
                <option key={d.id} value={d.id}>
                  {d.title}
                </option>
              ))}
            </select>
          </div>

          {/* DATE */}
          <div>
            <label className="text-sm text-gray-500">Data</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* TEXT */}
          <div>
            <label className="text-sm text-gray-500">Opis</label>
            <textarea
              rows={4}
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* ERROR */}
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="bg-[var(--color-primary)] text-white px-4 py-2 rounded"
          >
            {form.id ? "Aktualizuj wpis" : "Dodaj wpis"}
          </button>

        </form>
      
    </div>
  );
};

export default DiaryForm;