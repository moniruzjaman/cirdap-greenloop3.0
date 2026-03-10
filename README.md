# GreenLoop 3.0 - CIRDAP Innovation Challenge 2026

![GreenLoop Banner](https://img.shields.io/badge/CIRDAP-Innovation%20Challenge%202026-green)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![Express](https://img.shields.io/badge/Express-5.x-blue)

## Overview

**GreenLoop 3.0** is an innovative solution designed for the CIRDAP-REEDS Rural Development Innovation Challenge 2026. The project proposes a paradigm shift to address agricultural inefficiencies and "Inorganic Value Leaks" in preparation for Bangladesh's LDC graduation in 2026.

### Theme
**LDC Graduation & Circular Economy** - Efficiency-by-Design for a Circular Future

### Tagline
*"Healing the Earth, Securing the Smile"*

## Features

- **Physical Circular Farming (Layer A)**
  - 12-Parameter Soil Sensor for precision agriculture
  - Arsenic Shield (3F4D+MD) for water safety
  - Solar Cold Chain for reduced post-harvest losses

- **Digital Governance (Layer B)**
  - Hyperledger Blockchain for immutable data integrity
  - SHA-256 cryptographic verification
  - PostgreSQL off-chain data management

- **Key Impact Metrics**
  - $220 Billion Annual Savings Potential
  - 3,500 kg CO2 Offset per Unit
  - 100% Circular Bio-Ecosystem

## Tech Stack

- **Backend:** Node.js, Express.js 5.x
- **File Handling:** Multer
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Data Storage:** JSON file-based (upgradable to PostgreSQL)
- **External Libraries:** Font Awesome, Google Fonts

## Project Structure

```
greenloop-cirdap/
├── server.js           # Main Express server
├── package.json        # Project dependencies
├── public/
│   ├── css/
│   │   └── style.css   # Main stylesheet
│   └── js/
│       └── main.js     # Frontend JavaScript
├── views/
│   ├── index.html      # Homepage
│   ├── proposal.html   # Project proposal details
│   ├── resources.html  # Resource gallery
│   └── admin.html      # Admin dashboard
├── uploads/            # File uploads directory (auto-created)
└── data.json           # Resource database (auto-created)
```

## Installation

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/moniruzjaman/cirdap-greenloop3.0.git
   cd cirdap-greenloop3.0
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Access the application**
   Open your browser and navigate to: `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Homepage |
| GET | `/proposal` | Proposal details page |
| GET | `/resources` | Resources gallery |
| GET | `/admin` | Admin dashboard |
| GET | `/api/resources` | Get all resources (JSON) |
| POST | `/api/upload` | Upload a new resource |

## Deployment

### Heroku Deployment

1. Create a `Procfile` in the root directory:
   ```
   web: node server.js
   ```

2. Deploy to Heroku:
   ```bash
   heroku create your-app-name
   git push heroku main
   ```

### Render.com Deployment

1. Connect your GitHub repository to Render
2. Set build command: `npm install`
3. Set start command: `node server.js`

### Vercel Deployment

This project can be deployed to Vercel with minimal configuration:

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### Railway Deployment

1. Connect your GitHub repository to Railway
2. Railway will auto-detect Node.js and deploy

### Environment Variables (Optional)

Create a `.env` file for custom configuration:
```env
PORT=3000
NODE_ENV=production
```

## Admin Features

The admin panel (`/admin`) allows you to:
- Upload new resources (PDFs, images)
- Categorize resources by type
- Manage project documentation

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- **CIRDAP** - Centre on Integrated Rural Development for Asia and the Pacific
- **REEDS** - Rural Development Innovation Challenge Program
- Bangladesh LDC Graduation Task Force

---

**Project Team:** GreenLoop 3.0 Development Team

**Competition:** CIRDAP-REEDS Rural Development Innovation Challenge 2026
