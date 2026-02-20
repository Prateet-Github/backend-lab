import http from "http";

const server = http.createServer((req,res) => {
  res.end("Node.js Server")
})

server.listen(5001,()=>{
  console.log("Server is running at port 5001")
})