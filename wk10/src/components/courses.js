import React from 'react'

const Courses = (props) => {
  const elements = []
  for (var i = 1; i <= props.code; i++) {
    elements.push(
      <p>
        Enrolled In Course Number <b>{i}</b>
      </p>,
    )
  }
  return elements
}

export default Courses
