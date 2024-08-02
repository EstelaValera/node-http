const film = require('./data.js');
const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html'});

    const html = `
    <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${film.title}</title>
            </head>
            <body>
                <h1>${film.title}</h1>
                <p>Origin: ${film.origin}</p>
                <p>Year: ${film.year}</p>
                <h3>Description ${film.description}<h3>
                <p>Director: ${film.director}</p>
                <p>Production: ${film.production}</p>
            </body>
        </html>
    `

    res.end(html);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
