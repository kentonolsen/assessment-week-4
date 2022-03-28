const express = require("express");
const cors = require("cors");

const app = express();
const nameList = ['James','Carson', 'Tanner', 'Penny']

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
app.put('/api/names/:name', (req, res) => {
  let existingName = req.params.name
  console.log(`parameter${req.params.name}`)
  console.log(`body${req.body.name}`)
  console.log(`var${existingName}`)
  let newName2 = req.body.name
  for(i = 0; i < nameList.length; i++) {
    console.log(nameList[i])
   if(existingName == nameList[i]){
      nameList.splice(i, 1, newName2)
      return res.status(200).send(nameList)
    }
  } res.statusMessage(404).send(nameList)
})
app.delete('/api/names/:id', (req, res) => {
  let deleteId = req.params.id
  console.log(deleteId)
  deleteId--
  console.log(deleteId)
  nameList.splice(deleteId, 1)
  res.status(200).send(nameList)
})

app.get('/api/names', (req, res) => {
  res.status(200).send(nameList)
  console.log('Get Names')
})

app.post('/api/names', (req, res) => {
  let newname = req.body.name
  nameList.push(newname)
  res.status(200).send(nameList)
  console.log('Added a name')
})

app.listen(5500, () => console.log("Server running on 5500"));
