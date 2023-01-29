const express = require("express");
const mongoose = require("mongoose");
const Team = require("../models/team"); 
const User = require("../models/user"); 
const apiError = require("../utils/error");
const mailer = require("../middleware/mailer");
const Team_User = require('../models/team_user')


const createTeam = async (req, res, next) => {
  try {
    const teamLeader = req.user; // assuming the user is authenticated and the user object is stored in the request
    const { teamName, teamMembers } = req.body;

    // Create the team in the database
    const newTeam = await Team.create({
      name: teamName,
    });

    // Add the team leader to the team
    await newTeam.addUser(teamLeader, { through: { role: "leader" } });

    // Add the team members to the team
    await Promise.all(
      teamMembers.map((member) => {
        return newTeam.addUser(member, { through: { role: "member" } });
      })
    );

    // Send the invitation emails to the team members
    teamMembers.forEach((member) => {
      sendTeamInvitation(member, teamLeader.name, teamName);
    });

    res.status(201).json({
      message: `Team ${teamName} has been created and invitations have been sent to the team members.`,
    });
  } catch (error) {
    console.error(error);
    return next(new apiError("Error creating team. Please try again.", 500));
  }
};


const acceptInvitation = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const teamName = req.params.teamName;
    // Find the user in the database
    const user = await User.findById(userId);
    if (!user) {
      return next (new apiError('User not found.',404))
    }

    // Find the team in the database
    const team = await Team.findOne({ name: teamName });
    if (!team) {
      return next (new apiError( "Team not found.",404))
    }

    // Add the user to the team
    await team.addMember(user);

    res.status(200).json({ message: `You have joined team ${teamName}.` });
  } catch (error) {
   return next (new apiError("Error accepting invitation. Please try again.",500))
  }
};

const findAllTeams = async (req, res, next) => {
  try {
    const findAllTeam = await Team.findAll();
    if (!findAllTeam) {
      next(new ErrorResponse("filled to feiled ", 401));
    }
    res.json(findAllTeam);
  } catch (error) {
    next(new ErrorResponse(error, 401));
  }
};

module.exports = {
  createTeam,
  findAllTeams,
  acceptInvitation
};
