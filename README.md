# EdRoro Nexus

Personal brand website for Digital and Content Creation, using 3D Animation, Video Game Development, and Music Production.

## Tech Stack

- **Framework**: Next.js 15
- **UI Components**: Material-UI (MUI)
- **Styling**: Emotion (CSS-in-JS)
- **Bundling**: Webpack (optimized configuration)

## Project Structure

```
edroro-nexus/
├── public/              # Static files
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── assets/          # Static assets
│   │   ├── images/      # Image files
│   │   ├── fonts/       # Font files
│   │   ├── videos/      # Video files
│   │   ├── models/      # 3D model files
│   │   └── audio/       # Audio files
│   ├── components/      # React components
│   │   ├── ui/          # Basic UI components
│   │   ├── layout/      # Layout components
│   │   ├── navigation/  # Navigation components
│   │   ├── media/       # Media player components
│   │   └── portfolio/   # Portfolio components
│   ├── lib/             # Utility functions and hooks
│   │   ├── hooks/       # Custom React hooks
│   │   ├── utils/       # Utility functions
│   │   ├── api/         # API client and functions
│   │   ├── constants/   # Application constants
│   │   └── context/     # React context providers
│   └── styles/          # Global styles and theme
└── next.config.mjs      # Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ed-roro/edroro-nexus.git
   cd edroro-nexus
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Build and Deployment

To build the application for production:

```bash
npm run build
# or
yarn build
```

The build will include bundle analysis reports in the `.next/analyze` directory.

## Features

- Responsive design for all device sizes
- Optimized performance with Webpack configuration
- Material UI components with custom theming
- Emotion for CSS-in-JS styling
- Organized project structure following best practices

## License

This project is licensed under the MIT License - see the LICENSE file for details.
