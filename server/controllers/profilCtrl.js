const Profile = require('../models/Profil')
const ErrorResponse = require("../utils/error");

/**
 * It creates a new profile for a user.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that we call when we want to pass control to the next middleware
 * function.
 * @returns {
 *     "message": "Profile of  create"
 * }
 */
const AddProfile = async (req,res,next)=>{
    try {
        const {adresse, telephone, date_de_naissance} = req.body;
        if(!adresse || !telephone || !date_de_naissance)  return next(new ErrorResponse("Fill all filled", 401));
        const user_id = req.user.id;
        const createProfile = await Profile.create({
        adresse : adresse,
        telephone : telephone,
        date_de_naissance :date_de_naissance,
        user: user_id
        });
        if(!createProfile)  return next(new ErrorResponse("Profile no create ", 401));
        res.json({
            message: "Profile of  create"
        })
    } catch (error) {
        return next(new ErrorResponse(error, 500));
    }
}

const UpdateProfile = async(req, res, next)=> {
    try {
        const {adresse, telephone, date_de_naissance} = req.body;
        if(!adresse || !telephone || !date_de_naissance)  return next(new ErrorResponse("Fill all filled", 401));
        const user_id = req.user.id;
        const findProfile = await Profile.findOne({
            where : {
                user : user_id
            }
        })
        if(!findProfile)  return next(new ErrorResponse("Profile not found", 404));
        const updateProfile = await Profile.update({
            adresse : adresse,
            telephone : telephone,
            date_de_naissance :date_de_naissance,
            user: user_id
        },
        {
            where : {
                user: user_id
            }
        })
        if(!updateProfile)  return next(new ErrorResponse("Profile not updated", 401));
        res.json({
            message : "profil updated"
        })
    } catch (error) {
        return next(new ErrorResponse(error, 500));
    }
}   
module.exports = {
    AddProfile,
    UpdateProfile
}