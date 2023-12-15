import mongoose from "mongoose";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import { isAdminRequest } from "./auth/[...nextauth]";
import { validationResult } from "express-validator";
import { check, body, param } from "express-validator";


// Starting the changes
export default async function handle(req, res){
    const {method} = req;
    await mongooseConnect();
    await isAdminRequest(req,res);

    // Define validation rules
    const validateProduct = [
        body("title").isString().notEmpty(),
        body("description").isString(),
        body("price").isNumeric(),
        body("images").isArray(),
        body("category").isString(),
        body("properties").isObject(),
    ];
    // Handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    if(method === 'GET')
    {
        if(req.query?.id){
            res.json(await Product.findOne({_id:req.query?.id}));
        }
        else{
            res.json(await Product.find());
        }
        
    }

    if(method === 'POST'){
        const {title, description, price, images,category,properties} = req.body;
        const productDoc = await Product.create({
            title,description,price,images,category,properties,
        })
        res.json(productDoc);
    }

    if(method === 'PUT'){
        const {title, description, price,images,category,properties,_id} = req.body;
        await Product.updateOne({_id}, {title,description,price,images,category,properties});
        res.json(true);
    }

    if(method === 'DELETE')
    {
        if(req.query?.id){
            await Product.deleteOne({_id:req.query?.id});
            res.json(true);
        }
    }
}