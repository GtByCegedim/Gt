const Profile = require('../models/Profil')
const ErrorResponse = require("../utils/error");

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
module.exports = {
    AddProfile
}