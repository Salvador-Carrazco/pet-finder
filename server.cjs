const express = require('express');
const app = express();
const petData = require('./data.js');

const port = 3000;  // 3000 is the default port for express



// // create a route for the home page
app.get ('/', (req, res) => {
    res.send
    ('<h1>Welcome to the Pet Finder API!<h1>');
});
// // create a route for getting all pets
app.get('/pets', (req, res) => {
   const petListData = petData.map((pet) => {
       return `<h3>Name: ${pet.name}</h3>`})
       .join('');
       res.send(petListData);   
});
// // create a route for getting a single pet
app.get('/pets/:id', (req, res) => { 
    const pets = Number(req.params.id);
   
    const petById = petData.filter(pet => pet.id === pets);
   
    if (petById.length >0){
        res.send(petById);
    } else{
        res.status(404).send({message: 'No pet found with that ID'});
    }
        
      
    });
    


// // create a route for getting pet by owner 

app.get('/pets/owner/:owner', (req, res) => {
    const owner = req.params.owner;
    const petsByOwner = petData.filter(pet => pet.owner === owner);

    if (petsByOwner.length > 0) {
        res.send(petsByOwner);
    } else {
        res.status(404).send({ message: 'No pets found for this owner' });
    }
});


app.listen(port, () => {console.log(`listening on port ${port}`)});