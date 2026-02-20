import express from 'express';

const app = express();
app.use(express.json());

let users = [];

app.get('/',(_req,res)=>{
res.status(200).json(users)
})

app.post('/',(req,res)=>{
  users.push(req.body)
  res.status(201).json({message:"User Added"})
})

app.delete('/:id',(req,res)=>{
  users = users.filter(user => user.id !== parseInt(req.params.id))
  res.status(200).json({message:"User deleted"})
})

app.listen(3000,() => {
  console.log("Server listenig at port 3000")
})