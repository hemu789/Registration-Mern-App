const express = require('express');
const router = express.Router();
const User = require('../models/user'); 


router.post('/registeruser', async (req, res) => {
    // Assuming you have a request body with the user data, e.g., req.body
    const { name, username, password } = req.body;

    // Check if the required fields are provided
    if (!name || !username || !password) {
        return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    try {
        // Create a new user using your User model
        const newUser = new User({
            name,
            username,
            password,
        });

        // Save the user to the database
        await newUser.save();

        // Send a response to indicate successful registration
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        // Handle any errors that occur during registration
        res.status(500).json({ error: 'Registration failed.' });
    }
});


// router.post('/loginuser' , (req,res) =>{
//     Usermodel.findOne({
//         username: req.body.username,
//         password: req.body.password
//     }, (err,documents)=>{
//         if(e){
//             res.send("Something went wrong")
//         }
//         else{
//             if(documents.length === 0){
//                 res.send("Login Failed")
//             }
//             else{
//                 res.send("Login Successful")
//             }
//         }
//     })
// })

module.exports = router;
