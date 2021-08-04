import React from 'react'

class Follower extends React.Component {
    render() {
        return (
            <div>
                <p>Username: {this.props.info.login}</p>
                <p>URL: {this.props.info.url}</p>
            </div>
        )
    }
}

export default Follower