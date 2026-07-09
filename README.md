
## Nome progetto e autore

- **Nome progetto:** Italian Meals App
- **Autore:** Fabio Gentile

---

## Installazione e avvio

```bash
git clone https://github.com/fabiogentile-gif/ItalianMealsAPP.git
cd ItaliansMeals
npm install
npx expo start
```

## Prerequisiti

- Node.js LTS
- npm o yarn
- Expo Go (Android / iOS) oppure emulatori configurati
- Connessione internet (API TheMealDB)

---

## API utilizzate

- https://www.themealdb.com/documentation  
- https://www.themealdb.com/api.php  

---

## Utenti mock (login)

| Email | Password |
|------|----------|
| mario.rossi@student.it | React2026! |
| giulia.bianchi@student.it | Expo2026! |
| luca.verdi@student.it | Mobile2026! |

---

## Deep Linking

```bash
npx uri-scheme open "exp://<YOUR_IP>:8081/--/meal/52772" --android
```

- http://localhost:8081/MealDetails?idMeal=52961

---

## Google Doc (lab 13–19)

**Link:** https://docs.google.com/document/d/1RXdJJVh4GlMYAngYksM9MLcUvdgkYoO3lizdgMCK36Y/edit?tab=t.twgpr3gmlcqs#heading=h.c3r0kqx87q1r

---

## Stato globale 6 Motivazione

### Gestione tramite:
Context API 

### Motivazione:
- evita prop drilling
- centralizza utente e preferiti
- struttura più semplice per React Native

---

## Edge case gestiti

- errore rete API -> messaggio + Retry
- login fallito -> errore senza crash
- lista vuota -> UI fallback
- preferiti e userdata persistiti con AsyncStorage
- deep link invalido -> gestione errore sicura

---

