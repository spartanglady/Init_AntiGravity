# Agentic Commerce Website

A modern, responsive website demonstrating the future of autonomous online retail and agentic commerce. This project showcases how AI agents can redefine customer experiences through autonomous decision-making and hyper-personalization.

## Features

- **Visual Upgrades**: Enhanced UI with glassmorphism, dynamic animations, and a premium aesthetic.
- **Interactive Components**:
  - **Hero Section**: Engaging landing area with clear value proposition.
  - **Trend Section**: Highlights emerging trends in agentic commerce.
  - **Demo Section**: Interactive demonstration of agent capabilities.
  - **Navigation & Footer**: Fully responsive navigation and footer components.
- **Responsive Design**: Optimized for various screen sizes.

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (Custom properties, Flexbox/Grid)
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd Init_AntiGravity
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## CI/CD Workflows

This project includes GitHub Actions workflows for continuous integration and deployment:

- **CI (`.github/workflows/ci.yml`)**: Runs on push/pull_request to `main`. Installs dependencies, runs linting, and builds the project.
- **Static Deploy (`.github/workflows/static.yml`)**: Deploys the application to GitHub Pages.
