import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";

type Props = {
  handleSignIn: (email: string, password: string) => void;
};

const AdminLogging = ({ handleSignIn }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">

        <h2 className="text-xl font-semibold text-center">
          Panel administracyjny
        </h2>

        {/* EMAIL */}
        <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[var(--color-primary)]">
          <FiMail className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Email"
            className="w-full outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* PASSWORD */}
        <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[var(--color-primary)]">
          <FiLock className="text-gray-400 mr-2" />
          <input
            type="password"
            placeholder="Hasło"
            className="w-full outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={() => handleSignIn(email, password)}
          className="w-full bg-[var(--color-primary)] text-white py-2 rounded-lg font-medium hover:opacity-90 transition"
        >
          Zaloguj się
        </button>

      </div>
    </div>
  );
};

export default AdminLogging;