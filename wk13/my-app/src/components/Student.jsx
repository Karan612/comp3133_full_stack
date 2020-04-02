import React from 'react'

const Student = ({ match }) => {
  const { studentname, studentno } = match.params
  let student1 = `The student name is "${studentname}"!`
  if (studentno !== undefined) {
    let student2 = `The student no is ${studentno}`
    return (
      <div>
        <p>Student</p>
        <div>{student1}</div>
        <div>{student2}</div>
      </div>
    )
  }
  return (
    <div>
      <p>Student</p>
      <div>{student1}</div>
    </div>
  )
}

export default Student
