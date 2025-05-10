import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';


// to genarate a token
const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}



//Route for user login
const loginUser=async (req,res)=>{
    try {
        const {email,password}=req.body;
        //we check is user exists or not 
        const user=await userModel.findOne({email})
        if (!user) {
            return res.json({success:false,message:"User doesn't exists"})
        }
        // we check the password is true or not 
        const isMatch=await bcrypt.compare(password,user.password)
        
        // if(isMatch){
        //     const token=createToken(user._id)
        //     res.json({success:true,token})
        // }
        // else{
        //     res.json({success:false,message:"invalid credentials"})
        // }

        //chat
        if (isMatch) {
            const token = createToken(user._id);
            res.json({
                success: true,
                token,
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                }
            });
        } else {
            res.json({ success: false, message: "invalid credentials" });
        }

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})   
    }
}



//Route for user register
const registerUser=async (req,res)=>{
    try {
        const {name,email,password}=req.body;
        //checking user already exists or not 
        const exists=await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"User already exists"})
        }
        // validating email format and strong password by importing validator 
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Please enter a valid email"})
        }
        if (password.length<8) {
            return res.json({success:false,message:"Please enter a strong password"})
        }
        // to store the password we import bcrypt 
        // hashing user password 
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt)

        // to create the user
        const newUser=new userModel({
            name,
            email,
            password:hashedPassword
        })
        // we save the user in the database
        const user=await newUser.save()
        // after saving the user we provide a token using that user can login or logout form the application
        // const token=createToken(user._id);
        // res.json({success:true,token})

        // chat
        const token = createToken(user._id);
res.json({
  success: true,
  token,
  user: {
    _id: user._id,
    name: user.name,
    email: user.email,
  }
});

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
//Route for admin login
const adminLogin=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
            const token=jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"invalid credentials"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
export {loginUser,registerUser,adminLogin};