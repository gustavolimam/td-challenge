const Student = require("../models/student");

module.exports = {
  // método para retornar dados de um estudante
  async readStudent(req, res) {
    try {
      const student = await Student.find({ email: req.params.email })
      return res.json(student);
    } catch (err) {
      return res.json(err)
    }
  },

  // método para retornar dados de todos os estudantes
  async read(req, res) {
    try {
      const student = await Student.find({}).sort("-createdAt");
      return res.json(student);
    } catch (err) {
      return res.json(err)
    }
  },

  // método para deletar dados de um estudante
  async delete(req, res) {
    try {
      const student = await Student.remove({ email: req.params.email })
      return res.json(student);
    } catch (err) {
      return res.json(err)
    }
  },

  // método para atualizar dados de um estudante
  async update(req, res) {
    try {
      const student = await Student.findOneAndUpdate({ email: req.params.email }, req.body)
      return res.json(student);
    } catch (err) {
      return res.json(err)
    }
  },

  // método para criar um novo estudante
  async create(req, res) {
    try {
      const student = await Student.create(req.body);
      return res.json(student);
    } catch (err) {
      return res.json(err)
    }
  }
}
