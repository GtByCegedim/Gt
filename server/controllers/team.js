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
      email
    } = req.body;
    const findTeamById = await Team.findByPk(team_id)
    if (!findTeamById) return next(new apiError("No team found", 404));
    if (findTeamById.manager != manager.id) return next(new apiError("You are not manager of this project", 401));
    const findUserByEmail = await User.findOne({
      where : {
        email : email
      }
    })
    if (!findUserByEmail) return next(new apiError("No user Found", 404));
    const AddUserInTeam = await Team_User.create({
      userId: findUserByEmail.id,
      teamId: findTeamById.id
    })
    if (!AddUserInTeam) return next(new apiError("error added user in team", 401));
    mailer.sendTeamInvitation(findUserByEmail , manager.lastName , findTeamById.name )
    res.json({
      message: `User as a name : ${findUserByEmail.firstName} added secces in team ${findTeamById.name}`
    })
  } catch (error) {
    return next(new apiError(error, 500));
  }

}

/**
 * It takes a team id and a manager id, finds the team by id, checks if the manager is the manager of
 * the team, and if so, bans the team
 * @param req - id manager + id team
 * @param res - The response object.
 * @param next - This is a function that you call when you're done with your middleware.
 */
const baneTeam = async (req, res, next) => {
  try {
    const manager_id = req.user.id;
    const team_id = req.params.id;
    const findTeamById = await Team.findByPk(team_id)
    if (!findTeamById) return next(new apiError("No team found", 404));
    if (findTeamById.manager != manager_id) return next(new apiError("You are not manager of this Team", 401));
    const baneTeam = await Team.update({
      bane: true
    }, {
      where: {
        id: team_id
      }
    })
    if(!baneTeam) return next(new apiError(" team not baned", 404));
    res.json({
      message : `le groupe ${findTeamById.name} is banned`
    })
  } catch (error) {
    return next(new apiError(error, 500));
  }
}

const findAllUserOfTeam = async (req, res ,next) => {
  let users = []
  try {
    const team_id = req.params.id;
    const checkTeam = await Team.findByPk(team_id)
    if(!checkTeam) return next(new apiError("No team found", 404));
    const getAllUserTeamId = await Team_User.findAll({
      where : {
        teamId:team_id
      }
    })
    if(getAllUserTeamId.length  == 0) return next(new apiError("No team found", 404));
    const userIds = getAllUserTeamId.map(teamUser => teamUser.dataValues.userId); 
    if(userIds.length == 0) return next(new apiError("No Users found", 404));
    for(let i = 1 ; i<=userIds.length;i++) {
      const findUser = await User.findByPk(i)
      users.push(findUser)
    }
    res.json(users)
  } catch (error) {
    return next(new apiError(error, 500));
  }
}

module.exports = {
  createTeam,
  findAllTeams,
  addUserInTeam,
  baneTeam,
  findAllUserOfTeam
};