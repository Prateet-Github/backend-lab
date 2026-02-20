import http from "http";

const PORT = 5001;
const HOST = '127.0.0.1';

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const server = http.createServer((req,res) => {
  if(req.method === "GET" && req.url === '/users'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users));
  }
  else if(req.method === 'POST' && req.url === '/users'){
   let body = '';

   req.on('data', chunk => {
    body += chunk.toString();
   })

   req.on('end', () => {
    const newUser = JSON.parse(body);
    newUser.id = users.length + 1;
    users.push(newUser);

    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message:"New user added", 
      user : newUser
    }));
   })
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});