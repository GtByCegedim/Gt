const express = require("express");
const {
  addTaskToUser,
  AllTaskOfProject,
  AllTaskOfUser,
  AllMyTasks,
} = require("../controllers/tasks");
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

/**
 * @swagger
 * components:
 *    schemas:
 *      Tasks:
 *        type: object
 *        properties:
 *          title:
 *            type: string
 *            description: the task's title
 *          description:
 *            type: text
 *            description: the task's description
 *          deadline:
 *            type: date
 *            description: the task's deadline
 *          duration:
 *            type: string
 *            description: the task's duration ?
 *          unit:
 *            type: integer
 *            description: the unit to evaluate the task (hour/point ...)
 *          projectId:
 *            type: integer
 *            description: the task's projectId
 *          manager:
 *            type: integer
 *            description: the task's
 */

/**
 * @swagger
 * /api/task/my:
 *  get:
 *    summary: Returns an object of a specific user's task
 *    responses:
 *      200:
 *        description: Finds all user's tasks
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items: 
 *                $ref: '#/components/schemas/Tasks'
*/

/**
 * @swagger
 * /api/task/ofuser:
 *  get:
 *    summary: Returns an object of all users's tasks
 *    responses:
 *      200:
 *        description: Finds all tasks of all users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items: 
 *                $ref: '#/components/schemas/tasks'
 * 
*/

/**
 * @swagger
 * /api/task/:id:
 *  get:
 *    summary: Returns an object of all project's tasks
 *    responses:
 *      200:
 *        description: Finds all tasks of a specific project
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items: 
 *                $ref: '#/components/schemas/Tasks'
 * 
*/

/* This is a route that is being created. The first parameter is the path, the second is the function
that will be called when the route is hit. */
router.post("/add/:id", authMiddleware, addTaskToUser);
router.get("/my", authMiddleware, AllMyTasks);
router.get("/ofuser", authMiddleware, AllTaskOfUser);
router.get("/:id", authMiddleware, AllTaskOfProject);

module.exports = router;
