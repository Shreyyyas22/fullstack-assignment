# Help Center API

This project is a Help Center API built with Node.js and Express, with a frontend styled using TailwindCSS and React.

## Getting Started

These instructions will help you set up the project locally.

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository
2. Install dependencies
```bash
npm install
```
3. Insert your MongoDB connention string to .env file.
4. Start the backend server:
```bash
npx nodemon index.js
```
5. Start the React Frontend:
```bash
npm start
```

API Endpoints
GET /cards - Retrieve all cards.
POST /cards - Create a new card.
GET /cards/:title - Retrieve a specific card by title.


