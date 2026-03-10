// server.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3000;

// 1. Configuration
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(express.json());

// Ensure uploads directory exists
const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
	fs.mkdirSync(uploadDir);
}

// 2. Multer Setup (File Upload Engine)
const storage = multer.diskStorage({
	destination: (req, file, cb) => cb(null, "uploads/"),
	filename: (req, file, cb) => {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		cb(null, uniqueSuffix + path.extname(file.originalname));
	},
});
const upload = multer({ storage: storage });

// 3. Database Simulation (Simple JSON file for persistence)
const dbPath = "./data.json";

const initData = {
	project: {
		title: "GreenLoop 3.0: Healing the Earth, Securing the Smile",
		tagline: "One Innovation. Endless Change. Countless Smiles.",
		theme: "LDC Graduation & Circular Economy",
	},
	resources: [
		{
			id: 1,
			type: "pdf",
			title: "GreenLoop 3.0 Proposal (English)",
			// "filename": "greenloop_3.0_proposal.pdf",
			category: "Core Proposal",
		},
		{
			id: 2,
			type: "image",
			title: "Circular Bio-Digital Ecosystem",
			filename: "greenloop_info.png",
			category: "Infographic",
		},
	],
};

if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, JSON.stringify(initData));

// Helper to read DB
const getDb = () => JSON.parse(fs.readFileSync(dbPath));
const saveDb = (data) => fs.writeFileSync(dbPath, JSON.stringify(data));

// 4. Routes

// Serve HTML Pages
app.get("/", (req, res) =>
	res.sendFile(path.join(__dirname, "views/index.html")),
);
app.get("/proposal", (req, res) =>
	res.sendFile(path.join(__dirname, "views/proposal.html")),
);
app.get("/resources", (req, res) =>
	res.sendFile(path.join(__dirname, "views/resources.html")),
);
app.get("/admin", (req, res) =>
	res.sendFile(path.join(__dirname, "views/admin.html")),
);

// API: Get Resources
app.get("/api/resources", (req, res) => {
	const db = getDb();
	// Map files to add proper URL path
	const resources = db.resources.map((r) => ({
		...r,
		url: `/uploads/${r.filename}`,
	}));
	res.json(resources);
});

// API: Upload Resource (Admin)
app.post("/api/upload", upload.single("file"), (req, res) => {
	if (!req.file) return res.status(400).send("No file uploaded.");

	const db = getDb();
	const newResource = {
		id: Date.now(),
		title: req.body.title || req.file.originalname,
		type: req.body.type || "pdf",
		category: req.body.category || "General",
		filename: req.file.filename,
	};

	db.resources.push(newResource);
	saveDb(db);

	res.json({ success: true, resource: newResource });
});

// Start Server
app.listen(port, () => {
	console.log(`GreenLoop Server running at http://localhost:${port}`);
});
