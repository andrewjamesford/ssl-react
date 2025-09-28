# SSL React Demo Application

A React application demonstrating SSL/TLS concepts and secure web development practices.

## Features

- Modern React application built with Vite
- SSL/TLS demonstration
- Automated GitHub Actions release workflow

## Getting Started

### Prerequisites

- Node.js (LTS version)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/andrewjamesford/ssl-react.git
cd ssl-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Release Process

This project uses GitHub Actions for automated releases. To create a new release:

1. Create and push a version tag:
```bash
git tag v1.0.0
git push origin v1.0.0
```

2. The GitHub Action will automatically:
   - Build the application
   - Create a release
   - Upload the dist folder as a zip archive

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.
