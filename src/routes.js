const express = require("express");
const jwt = require("jsonwebtoken");
const middleware = require("./middleware");

const routes = express.Router();
const TeacherController = require("./controllers/teacherController");
const StudentController = require("./controllers/studentController");

const authConfig = require('./config/auth.json')

routes.post("/login", (req, res) => {
  const username = req.body.username
  const user = { name: username }

  if (!user.name)
    return res.status(400).send({ error: "User not found" })

  if (user.name != 'gustavolimam')
    return res.status(400).send({ error: "Invalid user" })

  var token = jwt.sign({ user }, authConfig.secret, {
    expiresIn: 86400
  });

  res.json(token)
})

routes.use(middleware.module);

routes.post("/teacher", TeacherController.create);
routes.get("/teacher/:email", TeacherController.read);
routes.delete("/teacher/:email", TeacherController.delete);
routes.get("/teacher-students/:teacher_email", TeacherController.readAllStudents);
routes.put("/teacher/:email", TeacherController.update);

routes.post("/student", StudentController.create);
routes.get("/student/:email", StudentController.readStudent);
routes.get("/student", StudentController.read);
routes.delete("/student/:email", StudentController.delete);
routes.put("/student/:email", StudentController.update);

module.exports = routes;
