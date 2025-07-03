![Preview](https://ibb.co/fzq6zpT3)

# 😂 Random Dad Jokes Generator

A web application that displays random dad jokes alternating with Chuck Norris jokes, built as part of the IT Academy bootcamp.

✨ Features
🎭 Random dad jokes and Chuck Norris jokes

🌤️ Current weather display for Barcelona

📊 Joke rating system (score from 1 to 3)

📁 Clean file structure following best practices

🔷 TypeScript implementation with API integration

## Project Structure

```
📦 src/
├── 📁 api/
│   └── fetchJoke.ts         # Joke fetching logic
│   └── fetchWeather.ts      # Weather fetching logic
├── 📁 data/
│   └── reportJokes.ts       # Array and logic for storing ratings
├── 📁 utils/
│   └── date.ts              # getTodayISO function
├── 📁 tests/
│   └── fetchJoke.test.ts    # Test files (planned)
├── 📁 dom/
│   └── ui.ts                # DOM manipulation functions
├── main.ts                  # Entry point (event logic, etc.)
├── style.css                # Styles
└── index.html
```

## 🚀 Future Implementations

- 🔗 share button / api
- 📍 Location detection via IP or other methods
- 🌡️ Temperature-based joke selection (e.g., Pingu jokes for cold weather, Charmander jokes for hot weather)

## 🛠️ Technologies Used

- 🎨 Bootstrap
- 🔷 TypeScript
- ⚡ Vite
- 🧪 Vitest (planned)

## 📦 Installation

1. Clone this repository

```bash
git clone https://github.com/Clos266/Random-Dad-Jokes-Generator
```

2. Install dependencies

```bash
npm install
```

3. Run development server

```bash
npm run dev
```
