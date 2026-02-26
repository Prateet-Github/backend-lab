import express from 'express';

const app = express();
app.use(express.json());

let users = [
  {id:1,name:"one",email:"1@mail.com"},
  {id:2,name:"two",email:"2@mail.com"},
  {id:3,name:"three",email:"3@mail.com"}

];

app.get('/:id',(req,res)=>{
  const withId = req.params.id
  const user = users.find(user => user.id === parseInt(withId))
  if(user){
    res.status(200).json(user)
  }else{
    res.status(404).json({message:"User not found"})
  }
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