import React from 'react'

import Spinner from '../../components/Spinner/Spinner'
import Card from '../../components/Spinner/Card/index'

class Home extends React.Component {
    state = {
        details: [],
        loading: true
    }
    componentDidMount() {
        fetch('https://reqres.in/api/users?delay=3')
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setState({ details: data.data, loading: false })
            })
            .catch(err => console.log(err))
    }

    changeHandler = (e) => {
        const { details } = this.state;
        if (e.target.value === "firstname") {
            let newArray = details.sort((a, b) => {
                if (a.first_name.toUpperCase() > b.first_name.toUpperCase()) {
                    return 1
                }
                else {
                    return -1
                }
            })
            this.setState({ details: newArray })
        }
        else if (e.target.value === "lastname") {
            let newArray = details.sort((a, b) => {
                if (a.last_name.toUpperCase() > b.last_name.toUpperCase()) {
                    return 1
                }
                else {
                    return -1
                }
            })
            this.setState({ details: newArray })
        }
    }
    render() {

        return (
            <div className="container">
                {this.state.loading ? <Spinner /> :
                    <>
                        <label>Sort By</label>
                        <select onChange={this.changeHandler} >
                            <option value='none'>----------</option>
                            <option value='firstname'>First Name</option>
                            <option value='lastname'>Last Name</option>
                        </select>
                        <div className="row">
                            {this.state.details.map(el => <Card key={el.id} element={el} />)}
                        </div>
                    </>
                }
            </div>
        )
    }
}

export default Home
