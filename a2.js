/*********************************************************************************
* WEB700 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Chinyere Vanessa Arinze Nkem__ Student ID: 133404236__ Date: 07/06/2024.
*
********************************************************************************/


const Data = require('./modules/collegeData.js');

var dataCollection = new Data('./data/students.json', './data/courses.json');

dataCollection.initialize()
    .then(function () {
        // get student data
        dataCollection.getAllStudents()
            .then(function () {
                // get courses data
                dataCollection.getCourses()
                    .then(function () {

                        // get TAs data
                        dataCollection.getTAs()
                            .catch(
                                (e) => { console.log(e) }
                            );
                    })
                    .catch(
                        (e) => { console.log(e) }
                    );
            })
            .catch(
                (e) => { console.log(e) }
            );
    })
    .catch(
        (e) => { console.log(e) }
    );



