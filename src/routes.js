const express = require("express");

const routes = express.Router();
const TeacherController = require("./controllers/teacherController");
const StudentController = require("./controllers/studentController");

routes.post("/teacher", TeacherController.create);
routes.get("/teacher/:email", TeacherController.read);
routes.delete("/teacher/:email", TeacherController.delete);
routes.get("/teacher-students/:teacher_email", TeacherController.readAllStudents);
routes.put("/teacher/:email", TeacherController.update);

routes.post("/student", StudentController.create);
routes.get("/student/:email", StudentController.readStudent);
routes.get("/student", StudentController.readStudent);
routes.delete("/student/:email", StudentController.delete);
routes.put("/student/:email", StudentController.update);

module.exports = routes;
