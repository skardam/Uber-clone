const userModel =  require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res) => {
    console.log('register route')
    console.log(req);
    
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const { fullName, email, password } = req.body;

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({ firstName: fullName.firstName,
        lastName: fullName.lastName,
        email, 
        password: hashedPassword });

    const token = user.generateAuthToken();
    res.status(201).json({ token, user });
}

module.exports.loginUser = async (req, res) => {
    console.log('login route')
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select('+password');
    if(!user) return res.status(401).json({ errors: [{ msg: 'Invalid credentials' }] }); 
           
    const validPassword = await user.comparePassword(password);
    if(!validPassword) return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });

    const token = user.generateAuthToken();
    res.status(200).json({ token, user });
}