const Course = require('../model/course');
const Student=require('../model/student')

async function getAllStudents(req,res){
    const students = await Student.find().exec();
    res.json(students)
}

async function getStudentById(req,res){
    const { id } = req.params;
    const student = await Student.findById(id).populate('courses').exec();
    if (!student) {
        return res.sendStatus(404);
    }
    return res.json(student)
}
async function updateStudentById(req,res){
    const {id}=res.params;
    const { firstName ,lastName, email } = req.body;
    const student = await Student.findByIdAndUpdate(id, {firstName ,lastName, email},{new:true})
    if (!student) {
        return res.sendStatus(404);
    }
    return res.json(student)
    
}
async function deleteStudentById(req,res){
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id).exec();
    if (!student) {
        return res.sendStatus(404);
    }
    return res.sendStatus(204)
}
async function createStudent(req,res){
    const { firstName ,lastName, email } = req.body;
    //验证数据的有效性；
    const student = new Student({ firstName ,lastName, email })
    await student.save();

    // student.save((error,res)=>{ 
    //     if(error){
    //         next(error)
    //     }
    //     res.status(201).json(student)
    // })错误抓取；


    return res.states(201).json(student)
}

async function addStudentToCourse(req,res){
    //get student,get course
    //find students 
    //find course 
    //check student or course exist
    //add students to course
    //return
    const {id, code}=req.params;
    const student=await Student.findById(id).exec();
    const course=await Course.findById(id).exec();
    if(!student||course){
        return res.sendStatus(404);
    }
    student.courses.addToSet(course._id);//如果重复不重复添加
    course.students.addToSet(student._id);
    await student.save();
    await course.save();
    return res.json(student);
}

async function removeStudentToCourse(req,res){
    const {id, code}=req.params;
    const student=await Student.findById(id).exec();
    const course=await Course.findById(id).exec();
    if(!student||course){
        return res.sendStatus(404);
    }
    student.courses.pull(course._id);//如果重复不重复添加
    course.students.pull(student._id);
    await student.save();
    await course.save();
    return res.sendStatus(204);
}

module.exports={
    getAllStudents,
    getStudentById,
    updateStudentById,
    deleteStudentById,
    createStudent,
    addStudentToCourse,
    removeStudentToCourse
}