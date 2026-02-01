# Secure User Portal

A full-stack authentication system built with Node.js, Express, MongoDB, and JWT, using httpOnly cookies for secure session handling and deployed in production.

## Live Demo
- Frontend: https://secure-user-portal.netlify.app/
- Backend: https://secure-user-portal-backend.onrender.com

> Demo project. Do not use real passwords.

## Features
- User registration and login
- JWT-based authentication
- httpOnly cookie-based sessions
- Protected routes with middleware
- Secure logout
- Production-ready CORS setup
- Deployed on Render (backend) and Netlify (frontend)

## Auth Flow
1. User logs in with credentials
2. Server verifies user and signs JWT
3. JWT is sent as an httpOnly cookie
4. Browser sends cookie automatically on future requests
5. Protected routes verify JWT and return user data

## Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express, MongoDB, Mongoose, JWT
- Deployment: Render, Netlify

## Project Structure
```bash
secure-user-portal/
├── backend/
│ ├── src/
│ │ ├── controllers/ # Auth logic
│ │ ├── routes/ # API routes
│ │ ├── models/ # MongoDB schemas
│ │ ├── middlewares/ # Auth middleware
│ │ └── config/ # DB and app config
│ ├── package.json
│ └── .gitignore
│
├── frontend/
│ ├── css/ # Styling
│ ├── js/ # Frontend logic
│ ├── login.html
│ ├── register.html
│ ├── dashboard.html
│ └── _redirects
│
└── README.md
```
## Authentication Flow
1. User logs in with credentials
2. Server validates user and signs JWT
3. JWT is sent as an httpOnly cookie
4. Cookie is verified on protected routes
5. User data is fetched securely from the database

## Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express, MongoDB, Mongoose, JWT
- Deployment: Render (backend), Netlify (frontend)

## Security Notes
- JWT stored in httpOnly cookies (XSS-safe)
- Cookies configured with secure and sameSite settings
- CORS restricted to frontend domain
- Environment variables not committed

> Passwords are not hashed in this version. This project is intended for learning and demonstration.

## Future Improvements
- Password hashing
- Rate limiting
- Email verification
- Admin analytics

## Author
**Aviral**
