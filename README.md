#Hierarchy of FSD
Higher layers can use lower layers
Lower layers cannot depend on higher layers

app
pages
widgets
features
entities
shared

Page → Widget → Feature → Entity → API

AddTransactionPage
  → AddTransactionForm (feature)
      → transaction entity
          → supabase API


src/
 ├── app/
 ├── pages/
 ├── widgets/
 ├── features/
 │    ├── add-transaction/
 │    ├── edit-transaction/
 │    └── auth/
 ├── entities/
 │    ├── transaction/
 │    ├── category/
 │    └── user/
 └── shared/
      ├── ui/
      ├── lib/
      └── api/
Perfect. Ultra-brief, clean, final explanation 👇

For your **React Native finance tracker**:

---

# 🧱 Layers in Simple Words

## 🏢 `app/`

Global setup.

* Providers (Zustand, TanStack Query)
* Navigation (Expo Router layouts)
* App configuration

> Infrastructure only.

---

## 📱 `pages/`

Screens.

* DashboardPage
* TransactionsPage
* ProfilePage

They:

* Combine widgets
* Have no business logic

> Pages = Screen composition.

---

## 🧩 `widgets/`

Big UI blocks used inside pages.

Examples:

* TransactionList
* MonthlySummary
* BudgetOverview

They:

* Combine features + entities
* Handle layout logic

> Widgets = Reusable screen sections.

---

## ⚙️ `features/`

User actions (verbs).

Examples:

* add-transaction
* edit-transaction
* set-budget
* login

Inside a feature:

```
model/ → form state, validation, submit logic
ui/    → feature-specific components
```

> Features = “Do something”.

---

## 🧠 `model/` (inside feature)

Interaction logic.

Contains:

* Zustand store (form state)
* Validation
* Mutation logic
* Submit handlers

No UI layout.
No navigation.

---

## 📦 `entities/`

Business objects (nouns).

Examples:

* transaction
* budget
* user

If using DTO-only:

* types.ts only

If full domain:

* types
* API
* core logic

> Entities = “What something is”.

---

## 🛠 `shared/`

Pure reusable tools.

* UI components (Button, Input)
* Helpers (formatCurrency)
* Supabase client
* Constants

No business meaning.

---

# 🔄 How They Connect

Flow is always:

```
app
 → pages
   → widgets
     → features
       → entities
         → shared
```

Never the opposite direction.

---

# 🧠 One Sentence Each

* **Entity** → What it is
* **Feature** → What you can do with it
* **Widget** → Big UI block
* **Page** → Screen
* **App** → Infrastructure
* **Model** → State + logic

---

That’s the clean mental model.

If you follow this, your finance tracker will be structured like a senior-level project. 🚀
