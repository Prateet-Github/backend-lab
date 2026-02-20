import http from 'http';

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const PORT = 5001;
const server = http.createServer((req, res) => {
 
  if(req.method === 'GET' && req.url === '/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  }
else if (req.method === 'POST' && req.url === '/users') {
    let body = '';

     req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const newUser = JSON.parse(body);
      newUser.id = users.length + 1;
      users.push(newUser);
    

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({message: 'User added successfully', user: newUser }));

    });

}

else if (req.method === 'DELETE' && req.url === '/users') {
    const id = parseInt(req.url.split('/')[2]);
    users = users.filter(user => user.id !== id);


    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'User deleted successfully' }));

  }

  else{
    res.writeHead(404);
    res.end("Route not found");
  }

});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});