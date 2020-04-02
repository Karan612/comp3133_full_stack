import React, { Component } from 'react'
import axios from 'axios'

class AddStudent extends Component {
  state = {
    name: '',
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    axios
      .post('https://jsonplaceholder.typicode.com/users', {
        name: this.state.name,
      })
      .then((res) => {
        console.log(res)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input
              type="text"
              value={this.state.value}
              name="name"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default AddStudent
