const db = require('../config/db.con');

module.exports = class courseModel {
    constructor() {
    }

    getAllCourses() {
        return db.execute('SELECT * FROM `courses`');
    }

    getCourseDetails(courseId) {
        return db.execute('SELECT * FROM `courses` WHERE course_id = ?',[courseId]);
    }

}