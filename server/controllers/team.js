const express = require('express');
const mongoose = require('mongoose');
const Team = require('../models/team'); // import the Team model
const User = require('../models/user'); // import the User model

const createTeam = async (req, res) => {
    try {
      // Extract the team name and member IDs from the request body
      const { name, members } = req.body;
  
      // Create a new team object
      const newTeam = new Team({ name, members });
  
      // Save the new team to the database
      await newTeam.save();
  
      // Update the users with the new team ID
      await User.updateMany({ _id: { $in: members } }, { $push: { teams: newTeam._id } });
  
      // Return a success response
      res.status(201).json({ success: true, message: "Team created successfully" });
    } catch (error) {
      // Return an error response
      res.status(500).json({ success: false, message: "Error creating team", error });
    }
  };


  const sendInvitations = async (req, res) => {
    try {
      // Extract the team ID and user IDs from the request body
      const { teamId, userIds } = req.body;
  
      // Find the team by ID
      const team = await Team.findById(teamId);
  
      // Check if the team exists
      if (!team) {
        return res.status(404).json({ success: false, message: "Team not found" });
      }
  
      // Send the invitations to the specified users
      
  
      // Return a success response
      res.status(200).json({ success: true, message: "Invitations sent successfully" });
    } catch (error) {
      // Return an error response
      res.status(500).json({ success: false, message: "Error sending invitations", error });
    }
  };
  

  module.exports = {
    createTeam,
    sendInvitations
  }
  