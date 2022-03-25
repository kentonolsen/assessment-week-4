const express = require("express");
const cors = require("cors");

const app = express();
const nameList = ['James', 'Tanner', 'Penny']

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/api/names', (req, res) => {
  res.status(200).send(nameList)
})
app.post('/api/names', (req, res) => {
  res.status(200)
  let newname = req.body
  nameList.push(newname)
})
app.listen(5500, () => console.log("Server running on 5500"));
