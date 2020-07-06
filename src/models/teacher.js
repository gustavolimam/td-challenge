const mongoose = require('mongoose')

const TeacherSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  subject: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
})

const Teacher = mongoose.model('Teacher', TeacherSchema)

module.exports = Teacher;
