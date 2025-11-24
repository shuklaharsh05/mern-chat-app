# Chat App

Full‑stack real‑time messaging application with secure authentication, conversational search and online presence tracking. The project pairs an Express/MongoDB backend with a Vite/React frontend and Socket.IO for instant delivery.

## Features
- Email/password authentication with JWT cookies, bcrypt hashing and protected routes
- React chat UI with conversation lists, message threads, typing input and toast feedback
- Online user presence and instant message delivery via Socket.IO
- Persistent conversations/messages stored in MongoDB with population helpers
- Responsive styling built with Tailwind CSS and DaisyUI components
- Centralized state using React Context + Zustand, plus reusable data hooks

## Tech Stack
- **Frontend:** React 18, Vite, Tailwind CSS, DaisyUI, Zustand, React Router, React Hot Toast
- **Backend:** Node.js, Express, MongoDB/Mongoose, Socket.IO, JSON Web Tokens, bcrypt
- **Tooling:** Nodemon, ESLint, PostCSS, Vite build pipeline

## Project Structure
```
.
├── backend
│   ├── controllers/        # Auth, user and message controllers
│   ├── db/                 # MongoDB connection helper
│   ├── middleware/         # Auth/route protection middleware
│   ├── models/             # Conversation, Message, User schemas
│   ├── routes/             # /api/auth, /api/messages, /api/user
│   ├── socket/             # Socket.IO server + helpers
│   └── server.js           # Express entrypoint & static file hosting
├── frontend
│   ├── src/
│   │   ├── components/     # Chat UI, sidebar, skeletons
│   │   ├── context/        # Auth + Socket providers
│   │   ├── hooks/          # Data fetching & mutations
│   │   ├── pages/          # Auth + home routes
│   │   └── utils/          # Emoji list, time formatting helpers
│   └── vite.config.js
├── package.json            # Root scripts (server + build orchestration)
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm 9+
- MongoDB instance (local or hosted)

### Installation
```bash
git clone https://github.com/<your-user>/chat-app.git
cd chat-app
npm install             # installs server deps
cd frontend && npm install && cd ..
```

### Environment Variables
Create a `.env` file in the project root (same level as `backend/`) with:
```
PORT=5000
MONGO_DB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/chat
JWT_SECRET=replace-with-strong-secret
NODE_ENV=development
```

Optional:
- `CLIENT_ORIGIN` to lock down CORS if you update `backend/socket/socket.js`.
- Update `frontend/src/context/SocketContext.jsx` to point `io(...)` to your local/server URL (e.g., `http://localhost:5000`) for development.

### Running Locally
Use two terminals:
```bash
# Terminal 1 – backend + Socket.IO server
npm run server

# Terminal 2 – frontend dev server
cd frontend
npm run dev
```
The backend listens on `PORT` (default `5000`) and also serves the production build from `frontend/dist`. The Vite dev server defaults to `http://localhost:5173`.

### Production Build
```bash
npm run build
```
The root `build` script installs frontend dependencies and runs `npm run build --prefix frontend`. Serve the contents of `frontend/dist` behind the Express server (`npm start`) or any static host.

## API Overview
- `POST /api/auth/signup` – create account
- `POST /api/auth/login` / `POST /api/auth/logout`
- `GET /api/user` – fetch all users excluding current user
- `GET /api/messages/:conversationId` – get conversation history
- `POST /api/messages/send/:receiverId` – send new message

All protected routes use the `protectRoute` middleware which verifies the JWT stored in the `jwt` httpOnly cookie.

## Testing & Linting
- Backend: no automated tests yet (contributions welcome).
- Frontend lint: `cd frontend && npm run lint`.

## Deployment Notes
- Ensure your frontend `SocketContext` points to the deployed backend URL.
- Configure environment variables on your hosting provider (Render, Vercel, etc.).
- For SSL deployments set `NODE_ENV=production` so cookies use the `secure` flag.

## Contributing
1. Fork the repo & create a feature branch.
2. Follow the coding style enforced by ESLint/Tailwind conventions.
3. Submit a PR with a clear description and screenshots/GIFs where helpful.

## License
ISC License © Harsh

---

Need help or found a bug? Open an issue or start a discussion.

