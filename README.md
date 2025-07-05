# Absolute Lawn & Tree - Customer Portal

A modern Next.js application for Absolute Lawn & Tree's customer portal and business website with advanced file storage capabilities.

## Features

- 🌳 Professional landscaping business website
- 👤 Customer authentication with Clerk
- 📊 Customer portal with service history
- 🔐 Admin dashboard for business management
- 📁 **File storage with Convex** - Upload, manage, and organize files
- 🎥 **Multi-format support** - Images, videos, documents, and more
- 📱 Responsive design with Tailwind CSS
- ⚡ Built with Next.js 14 App Router
- 🔒 Secure file handling with type validation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Clerk account for authentication

### Installation

1. Clone the repository:
```bash
git clone https://github.com/skyevasquez/ALT.git
cd ALT
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

5. Set up Convex for file storage:
```bash
npx convex dev
```
- Select "create a new project" when prompted
- Copy the deployment URL and add it to `.env.local` as `NEXT_PUBLIC_CONVEX_URL`
- See [CONVEX_SETUP.md](./CONVEX_SETUP.md) for detailed instructions

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

### File Upload Demo

To test the file storage functionality:

1. Navigate to `/file-upload-demo` in your browser
2. Upload files by dragging and dropping or clicking to select
3. View uploaded files with download and delete options
4. Test with various file types (images, videos, documents)

**Note**: File uploads require Convex to be properly configured (step 5 above).

## Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── api/convex/        # Convex API routes
│   ├── components/        # Shared components
│   ├── file-upload-demo/  # File upload demonstration
│   ├── portal/           # Customer portal pages
│   ├── sign-in/          # Authentication pages
│   └── sign-up/
├── components/ui/        # Reusable UI components
├── convex/              # Convex backend functions
│   ├── files.ts         # File storage operations
│   └── schema.ts        # Database schema
├── lib/                 # Utility functions
│   └── hooks/           # Custom React hooks
└── docs/               # Documentation files
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Framework**: Next.js 14 with App Router
- **Backend**: Convex (real-time database & file storage)
- **Authentication**: Clerk
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **File Upload**: React Dropzone with Convex Storage
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Deployment

The application is ready for deployment on Vercel, Netlify, or any platform supporting Next.js.

Remember to set your environment variables in your deployment platform.

## License

Private project for Absolute Lawn & Tree.