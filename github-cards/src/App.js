import './App.css';
import React from 'react'
import axios from '../node_modules/axios'
import User from './User'

class App extends React.Component {
  state = {
    name:'cqian12',
    userData: [],
    followers: [],
    inputVal:''
  }
  
  componentDidMount() {
    axios.get(`https://api.github.com/users/cqian12`)
    .then(res => {
      this.setState({...this.state,userData:res.data})
      console.log(this.state.userData)
    })
    .then(axios.get(`https://api.github.com/users/cqian12/followers`)
      .then(response =>
        this.setState({...this.state,followers:response.data})
          ))
    .catch(err => console.log(err))
  }

  componentDidUpdate() {
    axios.get(`https://api.github.com/users/${this.state.name}`)
    .then(res => {
      this.setState({...this.state,userData:res.data})
    })
    .then(axios.get(`https://api.github.com/users/${this.state.name}/followers`)
      .then(response =>
        this.setState({...this.state,followers:response.data})
          ))
    .catch(err => console.log(err))
  }

  inputChange = (event) => {
    this.setState({...this.state,inputVal:event.target.value})
  }
  
  clickEvt = (event) => {
    event.preventDefault()
    this.setState({...this.state,name:this.state.inputVal,inputVal:''})
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
