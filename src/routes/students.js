const express = require('express');
const {
     getAllStudents,
    getStudentById,
    updateStudentById,
    deleteStudentById,
    createStudent,
    addStudentToCourse,
    removeStudentToCourse
} = require('../controllers/students')

const router = express.Router();

router.get('/',getAllStudents);
router.get('/:id',getStudentById);
router.put('/:id',updateStudentById);
router.delete('/:id',deleteStudentById);
router.post('/',createStudent);

router.post('/:id/courses/:code',addStudentToCourse)
router.delete('/:id:courses/:code',removeStudentToCourse)
module.exports = router