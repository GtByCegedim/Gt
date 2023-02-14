
const express = require('express');
const router = express.Router();
const ErrorHandler = require('../middleware/errorMiddleware')

const { createTeam, findAllTeams, acceptInvitation } = require("../controllers/team");
const { sendTeamInvitation } = require('../middleware/mailer');
const { authMiddleware } = require('../middleware/authMiddleware');

/**
 * @swagger
 * components:
 *    schemas:
 *      findAllTeams:
 *        type: object
 *        properties:
 *          name:
 *            type: string
 *            description: the team's name
 *          teamLeaderId:
 *            type: integer
 *            description: the teamleader's is
 *        example:
 *            name: the winners
 *            teamLeaderId: 19
 *          
 */

/**
 * @swagger
 * /api/teams/all:
 *  get:
 *    summary: Returns an object of user's informations
 *    responses:
 *      200:
 *        description: Finds all teams
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items: 
 *                $ref: '#/components/schemas/findAllTeams'
 * 
*/

router.post('/create',authMiddleware, createTeam);
router.post('/invitations', sendTeamInvitation);
router.get('/all',findAllTeams)
router.post('/accept-invitation/:userId/:teamName', acceptInvitation);
router.use(ErrorHandler)

module.exports = router;
