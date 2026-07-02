# Progetto finale - Tutorial: Italian Meals App

## Obiettivo

Realizzare un'app **Expo/React Native** individuale che integra le competenze delle **lezioni 1–19** (laboratori 01–19). L'app mostra **piatti italiani** da [TheMealDB](https://www.themealdb.com/), con **login mock**, navigazione, API, preferiti persistiti, stato globale, UI responsive e accessibilità.

Le **lezioni 20–21** (feature native, notifiche) sono **opzionali**: implementale solo se sei in grado.

**Soluzioni di riferimento (lab 01–21):** https://github.com/its-javadizavieh/WMD-React-Native/tree/main/lab_solutions

Riusa componenti e pattern già visti nei laboratori - **non ripartire da zero**.

---

## Scadenze

| Fase                | Quando                                          | Cosa consegnare                                                                                       |
| ------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Checkpoint**      | **9 luglio 2026**                               | Repository sul tuo **GitHub** + file **`PROGRESS.md`** con **screenshot** di ogni schermata richiesta |
| **Consegna finale** | **Fine del quarto semestre** (data da definire) | Link repo su **FAD** + **README** completo                                                            |

Sviluppo **in aula** e **a casa**, con commit consigliati **ogni settimana**.

---

## Documentazione API

- https://www.themealdb.com/documentation
- https://www.themealdb.com/api.php

---

## Scenario

**Italian Meals App**: dopo il login l’utente vede avatar + nome, poi lista piatti italiani, dettaglio ricetta, preferiti, ricerca e impostazioni.

---

## Schermate obbligatorie

| # | Schermata | Requisiti |
|--|--|--|
| 1 | Login | Form controllato + errori |
| 2 | Header profilo | Avatar rotondo + nome utente |
| 3 | Lista piatti | API + loading/error/success |
| 4 | Ricerca | filtro lista |
| 5 | Dettaglio | lookup per idMeal |
| 6 | Preferiti | AsyncStorage |
| 7 | Impostazioni | logout + info utente |
| 8 | Errore API | retry |
| 9 | Accessibilità | almeno 2 accorgimenti |
| 10 | Deep link | apertura `meal/:idMeal` |

---

## Login mock

```ts
export const MOCK_USERS = [
  {
    email: "mario.rossi@student.it",
    password: "React2026!",
    name: "Mario Rossi",
    avatarUri: "https://picsum.photos/seed/mario-rossi/128",
  },
  {
    email: "giulia.bianchi@student.it",
    password: "Expo2026!",
    name: "Giulia Bianchi",
    avatarUri: "https://picsum.photos/seed/giulia-bianchi/128",
  },
  {
    email: "luca.verdi@student.it",
    password: "Mobile2026!",
    name: "Luca Verdi",
    avatarUri: "https://picsum.photos/seed/luca-verdi/128",
  },
];

export function validateLogin(email: string, password: string) {
  return MOCK_USERS.find(
    (u) => u.email === email.trim() && u.password === password,
  );
}