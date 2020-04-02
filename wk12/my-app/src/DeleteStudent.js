import React, { Component } from 'react'
import axios from 'axios'

class AddStudent extends Component {
  state = {
    id: this.props.id,
  }

  handleChange = (event) => {
    this.setState({ id: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then((res) => {
        console.log(res)
        console.log(res.data)
        alert('Done')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Delete</button>
        </form>
      </>
    )
  }
}

export default AddStudent
