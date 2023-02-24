const express = require("express");
const mongoose = require("mongoose");
const Team = require("../models/team");
const User = require("../models/user");
const apiError = require("../utils/error");
const mailer = require("../middleware/mailer");

const createTeam = async (req, res, next) => {
  try {
    const { name, teamLeaderId, invitedEmails } = req.body;
    const newTeam = await Team.create({ name, teamLeaderId });

    const invitedUsers = await User.findAll({
      where: {
        email: invitedEmails,
      },
    });
    console.log(invitedUsers);
    invitedUsers.forEach((invitedUser) => {
      mailer.sendTeamInvitation(invitedUser, req.user.firstName, newTeam.name);
    });

    res.status(201).json({
      success: true,
      data: newTeam,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const acceptInvitation = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const teamName = req.params.teamName;
    // Find the user in the database
    const user = await User.findById(userId);
    console.log(user);
    if (!user) {
      return next(new apiError("User not found.", 404));
    }

    // Find the team in the database
    const team = await Team.findOne({ name: teamName });
    if (!team) {
      return next(new apiError("Team not found.", 404));
    }

    // Add the user to the team
    await team.addMember(user);

    res.status(200).json({ message: `You have joined team ${teamName}.` });
  } catch (error) {
    return next(
      new apiError("Error accepting invitation. Please try again.", 500)
    );
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
  acceptInvitation,
};
