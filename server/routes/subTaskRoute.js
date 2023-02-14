const express = require('express');
const  {addSubTask, getSubTaskOfTask, getMySubTasks} = require('../controllers/subTaskController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * components:
 *    schemas:
 *      Subtask:
 *        type: object
 *        required:
 *          - name
 *          - description
 *          - user
 *        properties:
 *          name:
 *            type: string
 *            description: the user name
 *          description:
 *            type: string
 *            description: the user description
 *          user:
 *            type: integer
 *            description: the user's ID
 */

/**
 * @swagger
 * /api/subtask/mysubtasks:
 *  get:
 *    summary: Returns an object of user's Subtasks
 *    responses:
 *      200:
 *        description: Finds a specific user's Subtasks
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Subtask'
*/

/**
 * @swagger
 * /api/subtask/allsubtasks/:id:
 *  get:
 *    summary: Returns an object of task's Subtasks
 *    responses:
 *      200:
 *        description: Finds a specific task's Subtasks
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Subtask'
*/

router.post('/:id',authMiddleware, addSubTask)
router.get('/mysubtasks', authMiddleware,getMySubTasks)
router.get('/allsubtasks/:id',authMiddleware, getSubTaskOfTask)

module.exports = router;