"use client";

import { supabase } from "@/lib/supabase/client";

export default function Dashboard() {
  async function logout() {
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  return (
    <main className="flex min-h-screen items-center justify-center flex-col gap-4">
      <h1 className="text-4xl font-bold">Dashboard</h1>

      <button
        onClick={logout}
        className="rounded bg-red-600 px-4 py-2 text-white"
      >
        Sair
      </button>
    </main>
  );
}