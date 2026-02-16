import express from 'express';

const app = express();

app.get('/non-blocking', (_req, res) => {
res.status(200).send("This is non-blocking.")
});

app.get('/blocking', (_req, res) => {
let result = 0;
for (let i = 0 ; i < 10000000000;i++){
  result++ ;
}
res.status(200).send(`Result is ${result}`);
});

const PORT = 5001;
const HOST = '0.0.0.0';

app.listen(PORT,HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});