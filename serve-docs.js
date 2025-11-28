const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const BASE_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html',
    '.yaml': 'text/yaml',
    '.yml': 'text/yaml',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
    // Remove query string and decode URL
    let filePath = decodeURIComponent(req.url.split('?')[0]);

    // Default to docs.html
    if (filePath === '/') {
        filePath = '/docs.html';
    }

    const fullPath = path.join(BASE_DIR, filePath);
    const ext = path.extname(fullPath).toLowerCase();
    const mimeType = MIME_TYPES[ext] || 'application/octet-stream';

    // Security: prevent directory traversal
    if (!fullPath.startsWith(BASE_DIR)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    fs.readFile(fullPath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('404 - File Not Found');
            } else {
                res.writeHead(500);
                res.end('500 - Internal Server Error');
            }
            return;
        }

        // Enable CORS
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        res.writeHead(200, { 'Content-Type': mimeType });
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`\n🚀 Servidor de documentação rodando em: http://localhost:${PORT}`);
    console.log(`📚 Acesse a documentação em: http://localhost:${PORT}/docs.html`);
    console.log(`\nPressione Ctrl+C para parar o servidor.\n`);
});
