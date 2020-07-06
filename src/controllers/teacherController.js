const Teacher = require("../models/teacher");
const Student = require("../models/student");

module.exports = {
  // método para retornar dados de um professor
  async read(req, res) {
    const teacher = await Teacher.find({ email: req.params.email })
    return res.json(teacher);
  },

  async readAllStudents(req, res) {
    const students = await Student.find({ teacher_email: req.params.teacher_email })

    return res.json(students)
  },

  // método para deletar dados de um professor
  async delete(req, res) {
    const teacher = await Teacher.remove({ email: req.params.email })
    return res.json(teacher);
  },

  // método para atualizar dados de um professor
  async update(req, res) {
    const teacher = await Teacher.findOneAndUpdate({ email: req.params.email }, req.body)
    return res.json(teacher);
  },

  // método para criar um novo professor
  async create(req, res) {
    try {
      const teacher = await Teacher.create(req.body);
      return res.json(teacher);
    } catch (err) {
      return res.json(err)
    }
  }
}
