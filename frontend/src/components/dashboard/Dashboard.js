import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';




class Dashboard extends Component {

    state = {
        logout: false
    }

    logout = () => {
        localStorage.removeItem('access_key');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        this.setState({ logout: true });
    }


    render() {
        if (!localStorage.getItem('access_key') || !localStorage.getItem('name') || !localStorage.getItem('email')) {
            return <Redirect to='/' />
        }

        if (this.state.logout === true) {
            return <Redirect to='/' />
        }

        return (
            <div>
                <div className="component-holder">

                </div>
            </div>
        )
    }
}




export default Dashboard
