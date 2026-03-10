# GreenLoop 3.0 - CIRDAP Innovation Challenge 2026

![GreenLoop Banner](https://img.shields.io/badge/CIRDAP-Innovation%20Challenge%202026-green)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![Express](https://img.shields.io/badge/Express-5.x-blue)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-brightgreen)

## 🌿 Live Demo

**Static Portal (GitHub Pages):** [https://moniruzjaman.github.io/cirdap-greenloop3.0](https://moniruzjaman.github.io/cirdap-greenloop3.0)

## Overview

**GreenLoop 3.0** is an innovative solution designed for the CIRDAP-REEDS Rural Development Innovation Challenge 2026. The project proposes a paradigm shift to address agricultural inefficiencies and "Inorganic Value Leaks" in preparation for Bangladesh's LDC graduation in 2026.

### Theme
**LDC Graduation & Circular Economy** - Efficiency-by-Design for a Circular Future

### Tagline
*"Healing the Earth, Securing the Smile"*

## 🎯 Project Structure

This repository contains two versions of the project:

### 1. Static Portal (`/docs`) - GitHub Pages Ready
A beautiful multimedia showcase portal for competition juries.

```
docs/
├── index.html          # Main static portal
├── assets/
│   ├── css/
│   │   └── style.css   # Professional styling
│   ├── js/
│   │   └── main.js     # Interactive features
│   └── media/
│       ├── greenloop_video.mp4       # Project video
│       ├── CIRDAP_Proposal.pdf       # Proposal document
│       ├── GreenLoop_Presentation.pptx # Slide deck
│       └── greenloop_banner.png      # Project banner
```

### 2. Full Web Application (Root) - Dynamic Server
Complete Express.js application with admin panel and API.

```
├── server.js           # Main Express server
├── package.json        # Project dependencies
├── public/             # Static assets
├── views/              # HTML templates
├── uploads/            # File uploads directory
└── data.json           # Resource database
```

## 🚀 Features

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

## 📦 Installation

### Static Portal (No installation required)
Simply open `docs/index.html` in a browser or deploy to GitHub Pages.

### Full Web Application

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

## 🌐 Deployment

### GitHub Pages (Static Portal)

1. Go to repository **Settings** → **Pages**
2. Under "Source", select **Deploy from a branch**
3. Select **main** branch and **/docs** folder
4. Click **Save**

Your site will be live at: `https://[username].github.io/cirdap-greenloop3.0`

### Other Platforms

| Platform | Build Command | Start Command |
|----------|---------------|---------------|
| Heroku | `npm install` | `node server.js` |
| Render | `npm install` | `node server.js` |
| Vercel | `npm install` | `node server.js` |
| Railway | `npm install` | `node server.js` |

## 📋 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Homepage |
| GET | `/proposal` | Proposal details page |
| GET | `/resources` | Resources gallery |
| GET | `/admin` | Admin dashboard |
| GET | `/api/resources` | Get all resources (JSON) |
| POST | `/api/upload` | Upload a new resource |

## 🎬 Multimedia Resources

| Resource | Description | Format |
|----------|-------------|--------|
| Project Video | Full presentation video | MP4 |
| Proposal Document | Complete CIRDAP proposal | PDF |
| Presentation Slides | Blockchain & Circular Agriculture deck | PPTX |
| Project Banner | High-resolution banner image | PNG |

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js 5.x
- **File Handling:** Multer
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Data Storage:** JSON file-based (upgradable to PostgreSQL)
- **External Libraries:** Font Awesome, Google Fonts

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- **CIRDAP** - Centre on Integrated Rural Development for Asia and the Pacific
- **REEDS** - Rural Development Innovation Challenge Program
- Bangladesh LDC Graduation Task Force

---

**Project Team:** GreenLoop 3.0 Development Team

**Competition:** CIRDAP-REEDS Rural Development Innovation Challenge 2026
