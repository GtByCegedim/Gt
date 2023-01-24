const express = require("express");
const mongoose = require("mongoose");
const Team = require("../models/team"); // import the Team model
const User = require("../models/user"); // import the User model
const apiError = require("../utils/error");
const mailer = require("../middleware/mailer");

const createTeam = async (req, res) => {
  try {
    const teamLeader = req.user; // assuming the user is authenticated and the user object is stored in the request
    const { teamName, teamMembers } = req.body;
    // Create the team in the database
    const newTeam = await Team.create({
      name: teamName,
      teamLeaderId: teamLeader.id,
    });

    // Add the team members to the team
    await newTeam.addMembers(teamMembers);

    // Send the invitation emails to the team members
    teamMembers.forEach((member) => {
      sendTeamInvitation(member, teamLeader.name, teamName);
    });

    res.status(201).json({
      message: `Team ${teamName} has been created and invitations have been sent to the team members.`,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating team. Please try again." });
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
};
