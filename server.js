// Simple Express static server for HTML files
const express = require('express');
const path = require('path');
const app = express();

// Serve all files in the current directory and subdirectories
app.use(express.static(__dirname));

// Default route: show an index.html if present
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
