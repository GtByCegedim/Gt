const express = require("express");
const mongoose = require("mongoose");
const Team = require("../models/team");
const User = require("../models/user");
const apiError = require("../utils/error");
const Team_User = require('../models/team_user')
const mailer = require("../middleware/mailer");

/**
 * It creates a new team with the name and manager_id provided in the request body
 
 * @param req - id de projet(params) et le non de groupe
 * @param res - The response object.
 * @param next - This is a function that we call when we want to move on to the next middleware.
 * @acces : Only EN LIGNE
 */
const createTeam = async (req, res, next) => {

  try {
    const manager_id = req.user.id;
    const project_id = req.params.id;
    const {
      name
    } = req.body;
    const createTeam = await Team.create({
      name: name,
      manager: manager_id,
      project: project_id,
      bane: false
    });
    if (!createTeam) return next(new apiError("Team not created.", 404));
    res.status(201).json({
      success: true,
    });
  } catch (err) {
    return next(new apiError(err, 500));
  }
};


const findAllTeams = async (req, res, next) => {
  try {
    const findAllTeam = await Team.findAll();
    if (findAllTeam.length == 0) {
      return next(new apiError("No team found", 401));
    }
    res.json({
      findAllTeam
    });
  } catch (error) {
    next(new apiError(error, 401));
  }
};


/**
 * This function is used to add a user to a team.
 * @param req - The request object. This contains information about the HTTP request that raised the
 * event.
 * @param res - The response object.
 * @param next - This is a function that you call when you're done with your middleware.
 */
const addUserInTeam = async (req, res, next) => {
  try {
    const manager = req.user;
    const team_id = req.params.id;
    const {
      user_id
    } = req.body;
    const findTeamById = await Team.findByPk(team_id)
    if (!findTeamById) return next(new apiError("No team found", 404));
    if (findTeamById.manager != manager.id) return next(new apiError("You are not manager of this project", 401));
    const findUserById = await User.findByPk(user_id)
    if (!findTeamById) return next(new apiError("No user Found", 404));
    const AddUserInTeam = await Team_User.create({
      userId: findUserById.id,
      teamId: findTeamById.id
    })
    if (!AddUserInTeam) return next(new apiError("error added user in team", 401));
    res.json({
      message: `User as a name : ${findUserById.firstName} added secces in team ${findTeamById.name}`
    })
  } catch (error) {
    return next(new apiError(error, 500));
  }

}

module.exports = {
  createTeam,
  findAllTeams,
  addUserInTeam
};