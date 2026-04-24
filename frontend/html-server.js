const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const publicPath = path.join(__dirname, 'public');

// Serve static files (CSS, JS, images)
app.use('/css', express.static(path.join(publicPath, 'css')));
app.use('/js', express.static(path.join(publicPath, 'js')));
app.use('/images', express.static(path.join(publicPath, 'images')));

// Serve HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/:page', (req, res) => {
    const page = req.params.page;
    const filePath = path.join(publicPath, `${page}.html`);
    
    // Check if HTML file exists
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        // Return 404 or fallback to index
        res.status(404).sendFile(path.join(publicPath, 'index.html'));
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`✓ Pure HTML server running on port ${PORT}`);
    console.log(`✓ NO REACT - serving static HTML files only`);
});
