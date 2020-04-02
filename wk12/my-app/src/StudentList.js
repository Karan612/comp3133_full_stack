import React, { Component } from 'react'
import axios from 'axios'
import DeleteStudent from './DeleteStudent'
import AddStudent from './AddStudent'

class UserList extends Component {
  state = {
    users: [],
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      this.setState({ users: res.data })
    })
  }

  updateList = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      console.log(res.data)
      this.setState({ users: res.data })
    })
  }

  render() {
    return (
      <div>
        <AddStudent update={this.updateList} />
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>
              {user.name}
              <>
                <DeleteStudent id={user.id} update={this.updateList} />
              </>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default UserList
