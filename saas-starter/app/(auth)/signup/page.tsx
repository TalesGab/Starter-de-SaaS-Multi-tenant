"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signup() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Conta criada!");
    window.location.href = "/login";
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-4 w-80">
        <h1 className="text-2xl font-bold">Criar conta</h1>

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
          className="bg-green-600 text-white rounded p-2"
          onClick={signup}
        >
          Criar conta
        </button>
      </div>
    </main>
  );
}