# LocalFix - Trusted Repair Services Platform

A full-featured web application connecting customers with verified local repair technicians for various services including bike, mobile, laptop, AC, plumbing, and electrical repairs.

## Project Overview

LocalFix is a modern React application built with TypeScript, Vite, and Tailwind CSS. It provides:
- Service browsing and discovery
- Technician booking system
- User and technician dashboards
- Admin management panel
- Real-time notifications

## Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation & Development

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd localfix-trusted-repairs

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

## Building for Production

```sh
# Build for GitHub Pages (production)
npm run build:github

# Build for local testing
npm run build

# Preview the production build locally
npm run preview
```

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. 

### Manual Deployment Steps:
1. Push code to main branch: `git push origin main`
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Visit: https://sibin05.github.io/localfix-trusted-repairs/

### GitHub Pages Configuration:
- Source: GitHub Actions
- Branch: main
- Build folder: dist

## Available Scripts

- `npm run dev` - Start development server
- `npm run build:github` - Build for GitHub Pages deployment
- `npm run build` - Build for production (local)
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```
src/
├── pages/        # Route pages (Home, Services, Booking, etc.)
├── components/   # Reusable React components
├── lib/          # Utilities, types, and mock data
├── hooks/        # Custom React hooks
├── App.tsx       # Main application component
└── main.tsx      # Application entry point
```

## Technologies Used

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router v6
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **HTTP Client**: TanStack React Query
- **Testing**: Vitest
- **Linting**: ESLint

## Features

- 🔍 Service search and filtering
- 👔 Browse verified technicians with ratings
- 📅 Easy booking system with date/time selection
- 👤 User dashboard for managing bookings
- 🔧 Technician dashboard for handling requests
- 🏢 Admin panel for system management
- 📱 Mobile-responsive design
- ⚡ Fast load times with code splitting
- 🎨 Modern UI with smooth animations

## Environment Setup

### Environment Variables

Create a `.env.local` file if needed for any API endpoints (currently using mock data only).

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -am 'Add new feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a pull request

## License

This project is open source and available under the MIT License.
