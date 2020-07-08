# Documentação

## Detalhes das APIs

Para a correta execução das APIs, deverá ser utilizado como base da url da requisição `localhost:5000` ou utilizar pelo heroku `https://td-teste.herokuapp.com`.

### Login

**URL:** `base_url/login`

**Method:** `POST`

# TEACHER

### createTeacher

**URL:** `base_url/teacher`

**Method:** `POST`

### getTeacher

**URL:** `base_url/teacher/:email`

**Method:** `GET`

### deleteTeacher

**URL:** `base_url/teacher/:email`

**Method:** `DELETE`

### getAllStudents

**URL:** `base_url/teacher-students/:teacher_email`

**Method:** `GET`

### updateTeacher

**URL:** `base_url/teacher/:email`

**Method:** `POST`

# STUDENT

### createTeacher

**URL:** `base_url/student`

**Method:** `POST`

### getTeacher

**URL:** `base_url/student`

**Method:** `GET`

### getTeacherByEmail

**URL:** `base_url/student/:email`

**Method:** `GET`

### deleteTeacher

**URL:** `base_url/student/:email`

**Method:** `DELETE`

### updateTeacher

**URL:** `base_url/student/:email`

**Method:** `POST`
