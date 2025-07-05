# Absolute Lawn & Tree - Customer Portal

A modern Next.js application for Absolute Lawn & Tree's customer portal and business website.

## Features

- 🌳 Professional landscaping business website
- 👤 Customer authentication with Clerk
- 📊 Customer portal with service history
- 🔐 Admin dashboard for business management
- 📱 Responsive design with Tailwind CSS
- ⚡ Built with Next.js 14 App Router

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Clerk account for authentication

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alt-project
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Clerk keys to `.env.local`:
- Get your keys from [Clerk Dashboard](https://dashboard.clerk.com)
- Update `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── components/         # Shared components
│   ├── portal/            # Customer portal pages
│   ├── sign-in/           # Authentication pages
│   └── sign-up/
├── components/ui/         # Reusable UI components
└── lib/                   # Utility functions
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Framework**: Next.js 14 with App Router
- **Authentication**: Clerk
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Deployment

The application is ready for deployment on Vercel, Netlify, or any platform supporting Next.js.

Remember to set your environment variables in your deployment platform.

## License

Private project for Absolute Lawn & Tree.