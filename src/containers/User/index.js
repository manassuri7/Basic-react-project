import React, { Component } from 'react'

import Spinner from '../../components/Spinner/Spinner'

class User extends Component {
    state = {
        details: [],
        loading: true
    }
    componentDidMount() {
        fetch(`https://reqres.in/api/users/${this.props.match.params.id}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setState({ details: data.data, loading: false })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="container">
                {this.state.loading ? <Spinner /> :
                    <div className="card" style={{ width: "600px" }}>
                        <img className="card-img-top" src={this.state.details.avatar} alt="Card image" />
                        <div className="card-body">
                            <h4 className="card-title">{this.state.details.first_name} {this.state.details.last_name}</h4>
                            <p className="card-text">{this.state.details.email}</p>
                        </div>
                    </div>}
            </div>
        )
    }
}

export default User