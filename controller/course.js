const courseModel = require('../model/course-model');

const getallcourses = async (req,res,next) => {
    try {
        

        const course = new courseModel();
        const courses = await course.getAllCourses();
        console.log(courses)
        return res.json({
            courses : courses[0]
        });
    } catch (error) {
        return res.status(400).json({
            "errors" : [{
                "msg" : "Invalid username or password"
            }]
        });
    }
}


const getcoursedetails = async (req,res,next) => {
    try {
        const courseId = req.params.courseId;
        const course = new courseModel();
        const courses = course.getCourseDetails(courseId);
        return res.json({
            coursDetails : courses[0]
        });
    } catch (error) {
        return res.status(400).json({
            "errors" : [{
                "msg" : "Invalid username or password"
            }]
        });
    }
}

module.exports = {
    getallcourses,
    getcoursedetails
}