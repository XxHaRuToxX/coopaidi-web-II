const { check, validationResult } = require('express-validator');

exports.validateSignupRequest=[
    check('firstName')
    .notEmpty()
    .withMessage('Nombres es requisito'),
    check('lastName')
    .notEmpty()
    .withMessage('Apellidos son requisitos'),
    check('lastName'),
    check('email')
    .isEmail()
    .withMessage('Se requiere un correo válido'),
    check('password')
    .isLength({min: 6})
    .withMessage('La contraseña debe contener al menos 6 carácteres')
];

exports.validateSigninRequest=[
    
    check('email')
    .isEmail()
    .withMessage('Se requiere un correo válido'),
    check('password')
    .isLength({min: 6})
    .withMessage('La contraseña debe contener al menos 6 carácteres')
];

exports.isRequestValidated=(req,res,next)=>{
    const errors=validationResult(req);
    if(errors.array().length>0){
        return res.status(400).json({error:errors.array()[0].msg})
    }
    next();
}