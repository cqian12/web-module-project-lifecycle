import './App.css';
import React from 'react'
import axios from '../node_modules/axios'
import User from './User'

class App extends React.Component {
  state = {
    name:'cqian12',
    userData: [],
    followers: []
  }
  
  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.name}`)
    .then(res => {
      this.setState({...this.state,userData:res.data})
      console.log(this.state.userData)
    })
    .then(axios.get('https://api.github.com/users/cqian12/followers')
      .then(response =>
        this.setState({...this.state,followers:response.data})
          ))
    .catch(err => console.log(err))
  }

  componentDidUpdate() {
    axios.get(`https://api.github.com/users/${this.state.name}`)
    .then(res => {
      console.log(res.data)
      this.setState({...this.state,userData:res.data})
    })
    .catch(err => console.log(err))
  }

  inputChange = (event) => {
    this.setState({...this.state,name:event.target.value})
  }
  
  clickEvt = (event) => {
    event.preventDefault()
    
  }

  render() {
    return(
      <div>
        <h1>GitHub User Lookup</h1>
        <form>
          <input onChange={this.inputChange} />
          <button onClick={this.clickEvt}>Get User Info</button>
        </form>  
        <User userData = {this.state.userData} followers = {this.state.followers} />
      </div>
    )
  }
}

export default App;
