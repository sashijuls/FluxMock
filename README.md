# Flux

A financial ecosystem built for Indonesian international students in Taiwan and their families. Flux bridges the gap between Indonesian Rupiah and New Taiwan Dollar — making tuition payments, daily spending, and currency exchange seamless.

---

## Products

### FluxSnipe
Automatic FX rate catcher. Parents set a target IDR → TWD rate and Flux auto-executes the transfer when the market hits it — no more refreshing exchange rate apps at 2am.

### FluxWallet
Student digital wallet for everything campus-related: tuition payments, monthly allowance, QR pay, MRT top-up, and the broader Taiwan campus ecosystem.

### FluxPremium
Subscription plan (NT$150/mo or NT$1,200/yr) with unlimited transfers, airline cashback, and exclusive campus perks.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.7 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + CSS Modules |
| Animation | Framer Motion |
| Charts | Chart.js + react-chartjs-2 |
| Icons | Lucide React |
| Analytics | Firebase |

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page — Hero, product showcase, how it works, security, CTA |
| `/dashboard` | Student dashboard — balance, quick actions, FX widget, snipe tracker, transactions |
| `/snipe` | FluxSnipe — rate chart, target setter, active snipes, history |
| `/wallet` | FluxWallet — balance, wallet/card/QR tabs, transaction list |
| `/transfers` | Transfer flow |
| `/premium` | Pricing page — billing toggle, tier comparison, perks grid |

---

## Getting Started

**1. Install dependencies**
```bash
npm install
```

**2. Set up environment variables**

Create a `.env.local` file in the root:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
```

**3. Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Landing page
│   ├── dashboard/
│   ├── snipe/
│   ├── wallet/
│   ├── transfers/
│   └── premium/
├── components/
│   ├── landing/          # Landing page sections
│   ├── dashboard/        # Dashboard widgets
│   ├── layout/           # Navbar, Footer, MobileBottomNav
│   └── ui/               # Design system primitives (Button, Badge, GlassCard, etc.)
└── lib/
    ├── firebase.ts
    └── utils.ts
```

---

> This is an MVP mock website built for pitch and demo purposes.
