import React, { Component } from 'react'
import Profile from '../components/Profile'
import ProfileGen from '../components/ProfileGen'

const profilesStyle = {
    background: 'salmon',
}

class Profiles extends Component {

    constructor (){
        super()
        this.state = {
            profiles: [
                {
                    "id": '0',
                    "Name": 'John',
                    "Food": "Meatballs"
                }
            ]
        }
    }
    
    componentDidMount(){
        fetch('http://localhost:3001/profiles')
        .then(res => res.json())
        .then(profiles => this.setState({ profiles }))
    }

    render(){
        const profiles = this.state.profiles.map(profile => <Profile profile={profile}/>)
        return (
            <div style={profilesStyle}>
                {profiles}
                <ProfileGen /><br/>
                <img src={'https://wallpaperaccess.com/full/1209272.jpg'} alt={'Cat not found'}/>
            </div>
        )
    }
}
export default Profiles