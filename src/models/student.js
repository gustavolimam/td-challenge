const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
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
  age: {
    type: Number,
    required: true,
  },
  teacher_email: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
})

const Student = mongoose.model('Student', StudentSchema)

module.exports = Student;
