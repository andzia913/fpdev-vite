import React, { useState, useEffect } from "react";
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

  const [form, setForm] = useState<FormState>({
    id: "",
    date: "",
    title: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.date || !form.title) {
      setError("Uzupełnij wszystkie pola");
      return;
    }

    try {
      setLoading(true);

      if (form.id) {
        await updateDoc(doc(db, "diary", form.id), {
          date: form.date,
          title: form.title,
        });
      } else {
        await addDoc(collection(db, "diary"), {
          date: form.date,
          title: form.title,
        });
      }

      // RESET
      setForm({ id: "", date: "", title: "" });
      setError("");
      setSuccess(true);

    } catch (e) {
      console.error(e);
      setError("Błąd zapisu");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 2500);
    }
  };

  const handleSelect = (id: string) => {
    const found = diaryData.find((d) => d.id === id);

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
    <div className="bg-white rounded-xl p-6 shadow-sm space-y-6 max-w-lg relative">

      {/* LOADER */}
      {loading && (
        <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10 rounded-xl">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      )}

      <h3 className="font-semibold text-lg">
        Dziennik budowy
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* SELECT */}
        <div className="space-y-1">
          <label className="text-sm text-gray-500">
            Wybierz wpis (opcjonalnie)
          </label>

          <select
            value={form.id}
            onChange={(e) => handleSelect(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          >
            <option value="">Nowy wpis</option>
            {diaryData.map((d) => (
              <option key={d.id} value={d.id}>
                {d.title}
              </option>
            ))}
          </select>
        </div>

        {/* DATE */}
        <div className="space-y-1">
          <label className="text-sm text-gray-500">
            Data
          </label>

          <input
            type="date"
            value={form.date}
            onChange={(e) =>
              setForm({ ...form, date: e.target.value })
            }
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
        </div>

        {/* TEXT */}
        <div className="space-y-1">
          <label className="text-sm text-gray-500">
            Opis
          </label>

          <textarea
            rows={4}
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none"
          />
        </div>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-sm">
            {error}
          </p>
        )}

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[var(--color-primary)] text-white py-2 rounded text-sm font-medium
            disabled:opacity-40"
        >
          {form.id ? "Aktualizuj wpis" : "Dodaj wpis"}
        </button>

      </form>

      {/* TOAST */}
      {success && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 
          bg-green-600 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium">
          Zapisano wpis ✅
        </div>
      )}

    </div>
  );
};

export default DiaryForm;