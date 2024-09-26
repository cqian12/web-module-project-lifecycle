import React from 'react'
import Follower from './Follower'

class User extends React.Component {
    render() {
        return (
            <div>
                <h2>Name: {this.props.userData.name}</h2>
                <p>Username: {this.props.userData.login}</p>
                <p>Location: {this.props.userData.location}</p>
                <p>URL: {this.props.userData.url}</p>
                <p>Bio: {this.props.userData.bio}</p>
                <h3>Followers:</h3>
                {this.props.followers.map(follower => 
                    <Follower info={follower} />)}
            </div>
        )
    }
}

export default User