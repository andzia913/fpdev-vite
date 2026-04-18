import { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import { auth } from "../../config/firebase-auth";

import AdminLogging from "../../components/admin/AdminLogging";
import AdminForms from "../../components/admin/AdminForms";

const Admin = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      alert("Błędne dane logowania");
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">

      <h1 className="text-2xl font-semibold mb-8 text-center">
        Panel administracyjny
      </h1>

      {!user ? (
        <AdminLogging handleSignIn={signIn} />
      ) : (
        <AdminForms handleLogOut={logout} />
      )}

    </section>
  );
};

export default Admin;