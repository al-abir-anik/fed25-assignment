# FED25 - Mini Ecommerce Web App

This is a **mini eCommerce web application** built for the FED25 assignment at Pimjo.  
It includes a **Landing Page**, **Login Authentication**, and an **Ecommerce Dashboard** powered by **custom Next.js API routes**.

## 🔗 Live Demo

👉 **Live Site:** [https://fed25-assignment.vercel.app/](https://fed25-assignment.vercel.app/)

---

## Features

### Authentication

- Email/password login (credentials: `admin@example.com / admin123`).
- Login redirects to **Dashboard**, logout redirects to **Landing Page**.

### Landing Page

- Fully responsive (desktop, tablet, mobile).
- Styled entirely with **Tailwind CSS**.
- Includes **search and filter functionality** for product listings.

### Dashboard

- Accessible **only after login**.
- Displays:
  - **Summary cards** (Total Orders, Revenue, Customers).
  - **Products table** (ID, Name, Price, Stock, Category).
  - **Orders table** (ID, Customer, Amount, Status).
- Supports **loading and error states** during API fetch.

### APIs

- `/api/products` → list of products
- `/api/orders` → list of orders
- `/api/stats` → summary stats

## Tech Stack

- **Frontend:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **Data:** Mock in-memory JSON
- **Auth:** NextAuth.js (credentials provider) OR custom API route

## Project Structure

public/
src/
├─ app/
│ ├─ api/
│ │ ├─ auth/route.jsx
│ │ ├─ orders/route.jsx
│ │ ├─ products/route.jsx
│ │ └─ stats/route.jsx
│ ├─ dashboard/
│ │ ├─ orders/page.jsx
│ │ ├─ products/page.jsx
│ │ └─ stats/page.jsx
│ ├─ shop/ # Landing / shop page
│ ├─ layout.jsx
│ ├─ page.jsx # Homepage route
│ ├─ not-found.jsx
│ └─ loading.jsx
│
├─ assets/ # Images or static assets
├─ components/ # Reusable UI components
├─ contexts/ # Context API files (auth, theme, etc.)
├─ providers/ # App providers (auth, theme, state)
└─ style/
└─ index.css # Global Tailwind CSS styles
