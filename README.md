# Car Insurance - NN Pet Project

Frontend pet project for a car insurance UI, focused on React architecture, routing, server-state handling, and form validation.

## Features
- 📄 Contract overview page with contract summary and details cards
- 🧾 Claims page (placeholder/static view)
- 📞 Contact page with working form flow
  - React Hook Form + Zod validation
  - Required message field validation
  - Character limit: 1200
  - Disabled submit button until form is valid
  - Mock submit request and success state
- 🧪 Mocked backend via MSW
  - `GET /api/contract`
  - `POST /api/contact`
- 📱💻 Responsive layout (desktop/mobile)

## Tech Stack
- ⚛️ React + TypeScript + Vite
- 🔀 TanStack Router
- 📡 TanStack Query
- 🧾 React Hook Form
- ✅ Zod + `@hookform/resolvers`
- 🅱️ Bootstrap / React-Bootstrap
- 🧪 MSW (Mock Service Worker)
- 🎨 Sass

## Routes
- `/` - Contract page
- `/claims` - Claims page
- `/contacts` - Contact page

## Getting Started
1. Go to frontend directory:
	- `cd src/Front-end`
2. Install dependencies:
	- `yarn`
3. Start development server:
	- `yarn dev`
4. Build for production:
	- `yarn build`

## Notes
- MSW is enabled in development mode from `src/Front-end/src/main.tsx`.
- Contact form UI text is in Czech to match the app language.

## Design
Figma: [Car insurance page design](https://www.figma.com/design/4LCUwJrnBLZsK3Z4OHhm0t/Car-insurance?node-id=0-1&p=f&t=pN5UukCI4NcQK0ad-0)



