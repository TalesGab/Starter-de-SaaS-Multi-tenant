"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    window.location.href = "/dashboard";
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-4 w-80">
        <h1 className="text-2xl font-bold">Login</h1>

        <input
          className="border p-2 rounded"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border p-2 rounded"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white rounded p-2"
          onClick={login}
        >
          Entrar
        </button>
      </div>
    </main>
  );
}