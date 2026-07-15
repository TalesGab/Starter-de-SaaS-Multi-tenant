"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { slugify } from "@/lib/utils/slug";

export default function CreateOrganization() {
  const [name, setName] = useState("");

  async function createOrganization() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Usuário não encontrado.");
      return;
    }

    const slug = slugify(name);

    // Cria a organização
    const { data: organization, error } = await supabase
      .from("organizations")
      .insert({
        name,
        slug,
        plan: "free",
      })
      .select()
      .single();

    if (error) {
      alert(error.message);
      return;
    }

    // Adiciona o usuário como owner
    const { error: membershipError } = await supabase
      .from("memberships")
      .insert({
        user_id: user.id,
        org_id: organization.id,
        role: "owner",
        status: "active",
      });

    if (membershipError) {
      alert(membershipError.message);
      return;
    }

    alert("Organização criada com sucesso!");
    window.location.href = "/dashboard";
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex w-96 flex-col gap-4">
        <h1 className="text-3xl font-bold">Criar Organização</h1>

        <input
          className="rounded border p-2"
          placeholder="Nome da organização"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={createOrganization}
          className="rounded bg-blue-600 p-2 text-white"
        >
          Criar Organização
        </button>
      </div>
    </main>
  );
}