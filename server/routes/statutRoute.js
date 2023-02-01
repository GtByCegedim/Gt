const express = require('express');
const { addNewStatut, updateStatusOfTask } = require('../controllers/statusController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add/:id',authMiddleware,addNewStatut)
// router.delete('/delete/:idProject/:idStatut',authMiddleware,this.delete)
router.put('/update/:id',authMiddleware,updateStatusOfTask)

module.exports = router;