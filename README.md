# 🚀 SaaS Starter Multi-Tenant

Uma base moderna para desenvolvimento de aplicações SaaS multi-tenant utilizando **Next.js**, **Supabase** e **Stripe**.

O objetivo deste projeto é fornecer uma arquitetura escalável para sistemas B2B, incluindo autenticação, organizações, controle de permissões, convites e gerenciamento de assinaturas.

---

## 📚 Tecnologias

- Next.js 16
- React 19
- TypeScript
- Supabase
- PostgreSQL
- Row Level Security (RLS)
- Stripe (em desenvolvimento)
- Tailwind CSS

---

# ✨ Funcionalidades

## ✅ Implementadas

- Estrutura inicial do projeto
- Integração com Supabase
- Autenticação (estrutura)
- Banco de dados multi-tenant
- Trigger automático para criação de perfil
- Row Level Security (RLS) inicial
- Estrutura para login, cadastro e dashboard

## 🚧 Em desenvolvimento

- Login completo
- Cadastro completo
- Criação de organizações
- Convite de membros
- Controle de permissões (RBAC)
- Billing com Stripe
- Portal do cliente
- Middleware de autenticação
- Dashboard

---

# 🗂 Estrutura do Banco

## profiles

Informações adicionais do usuário.

- id
- name
- avatar_url
- created_at

## organizations

Representa cada empresa/cliente do sistema.

- id
- name
- slug
- stripe_customer_id
- plan
- created_at

## memberships

Relacionamento entre usuários e organizações.

- user_id
- org_id
- role
- status

## invites

Convites enviados para novos membros.

- org_id
- email
- role
- token
- expires_at
- status

---

# 🔐 Segurança

Este projeto utiliza **Row Level Security (RLS)** do Supabase para garantir o isolamento entre organizações.

Toda entidade pertencente ao sistema possuirá um campo:

```sql
org_id
```

garantindo que um cliente nunca tenha acesso aos dados de outro.

---

# 📦 Instalação

Clone o projeto:

```bash
git clone <url-do-repositorio>
```

Entre na pasta:

```bash
cd saas-starter
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

Execute o projeto:

```bash
npm run dev
```

---

# 🛣 Roadmap

- [x] Configuração inicial
- [x] Estrutura do banco
- [x] Trigger de Profiles
- [x] RLS inicial
- [ ] Login
- [ ] Cadastro
- [ ] Middleware
- [ ] Organizações
- [ ] Convites
- [ ] RBAC
- [ ] Dashboard
- [ ] Stripe Checkout
- [ ] Stripe Webhooks
- [ ] Portal do Cliente

---

# 🏗 Arquitetura

```
Next.js
      │
      ▼
Supabase Auth
      │
      ▼
Profiles
      │
      ▼
Organizations
      │
      ▼
Memberships
      │
      ▼
RLS
      │
      ▼
Dashboard
```

---


