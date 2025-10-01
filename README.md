# Tic-Tac-Toe (React + TypeScript)

A small but polished Tic-Tac-Toe built with React and TypeScript. It showcases state management with hooks, typed domain models, and a clean separation between UI and game logic. Players can rename themselves, play alternating turns, see who wins or if it’s a draw, and review a live log of every move.

## Features

- **Rename players**: Edit “Player 1” / “Player 2” labels before or during the match.
- **Turn management**: Alternates between **X** and **O**; prevents moves on occupied cells.
- **Win detection**: Checks rows, columns, and diagonals after each move; supports draw state.
- **Action log (history)**: Records every move with player, position.
- **Reset / New game**: Clear the board and logs while keeping player names.

## Tech Stack

- **React** (functional components + hooks)
- **TypeScript** (strict mode recommended)
- **Vite**

## Getting Started

```bash
# 1) Install deps
npm install

# 2) Run locally
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (Vite default) or the port shown in your terminal.

## Win Detection

- Precompute the 8 win lines: 3 rows, 3 cols, 2 diagonals.
- After each move, verify whether any line contains three identical non-empty symbols.
- If the board is full and no line matches, it’s a **DRAW**.
