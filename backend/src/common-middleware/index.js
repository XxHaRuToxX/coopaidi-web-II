const jwt=require('jsonwebtoken');
const multer=require('multer');
const shortid=require('shortid');
const path=require('path');
// const { } = require('../controller/category');

const storage=multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,path.join(path.dirname(__dirname),'uploads'))
    },
    filename: function(req,file,cb){
        cb(null,shortid.generate() + '-' + file.originalname)
    }
});

exports.upload=multer({storage})

exports.requireSignin=(req,res,next)=>{

    if(req.headers.authorization){
        const token=req.headers.authorization.split(" ")[1];
        const user=jwt.verify(token,process.env.JWT_SECRET);
        req.user=user;
        
    }else{
        res.status(400).json({message:'Se requiere autorización'});
    }
    next();
    // jwt.decode()
}

exports.userMiddleware=(req,res,next)=>{
    if(req.user.role !== 'user'){
        return res.status(400).json({message:'Usuario: acceso denegado'})
    }
    next();
}

exports.adminMiddleware=(req,res,next)=>{
    if(req.user.role !== 'admin'){
        return res.status(400).json({message:'Admin: acceso denegado'})
    }
    next();
}