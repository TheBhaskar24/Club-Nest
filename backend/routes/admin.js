const express = require('express');
const routes = express.Router()
const { Admin } =require('../authetication/adminSchema');
routes.post('/Admin', async (req, res) => {
    try {
        
            
            const newadmin = new Admin({
                name:req.body.name,
                email_id:req.body.email_id,
                password:req.body.password,
                mobile_number:req.body.mobile_number,
                department:req.body.department,
                
            });

            await newadmin.save();
            res.send('Successfully done');
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



routes.get('/Admin', async(req, res) => {
    try{
        const value = await Admin.find();
        res.send(value);
    }catch(e){
        console.error("errr",e);
    }
});

module.exports = routes;