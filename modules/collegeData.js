
class Data {


    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }


    initialize() {
        const fs = require('fs');
        let parent = this;
        return new Promise(function (resolve, reject) {
            fs.readFile(parent.students, 'utf8', function (err, dataFromStudentFile) {
                if (err) {
                    reject('unable to read students.json');
                    return;
                }

                let students_liist = JSON.parse(dataFromStudentFile);
                parent.students = students_liist;

                if (students_liist) {
                    // read the courses json
                    fs.readFile(parent.courses, 'utf8', function (err, dataFromCourseFile) {
                        if (err) {
                            reject('unable to read courses.json');
                            return;
                        }

                        let courses_list = JSON.parse(dataFromCourseFile);

                        resolve('Data reading successful');
                        parent.courses = courses_list;
                        return;
                    });
                }

            });

        });
    }


    getAllStudents() {
        let parent = this;
        return new Promise(function (resolve, reject) {
            if (parent.students.length === 0) {
                reject('no results returned.')
                return
            }

            console.log('Successfully retrieved ' + parent.students.length + ' students');
            resolve();
            return
        });
    }


    getTAs() {
        let parent = this;
        return new Promise(function (resolve, reject) {
            var ta_list = parent.students.filter(function (student_array) {

                if (student_array.TA == true) {
                    return student_array;
                }
            });
            if (ta_list.length === 0) {
                reject('no results returned.')
                return
            }

            console.log('Successfully retrieved ' + ta_list.length + ' TAs');
            resolve();
            return
        });
    }


    getCourses() {
        let parent = this;
        return new Promise(function (resolve, reject) {
            if (parent.courses.length == 0) {
                reject('no results returned.')
                return
            }

            console.log('Successfully retrieved ' + parent.courses.length + ' courses');
            resolve();
            return
        });
    }

}


module.exports = Data;
