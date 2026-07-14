"use client";

import { supabase } from "@/lib/supabase";

export default function Home() {
  async function testar() {
    const { data, error } = await supabase.auth.getSession();

    console.log("Sessão:", data);
    console.log("Erro:", error);
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <button
        onClick={testar}
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Testar conexão com Supabase
      </button>
    </main>
  );
}