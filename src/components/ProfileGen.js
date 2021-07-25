import React, {Component} from 'react'
import { Link }from 'react-router-dom'



 const buttonStyle = {
    flexDirection: 'center',
    marginTop: '20px',
    padding: '15px',
    margin: '1 6px 6px',
    background: 'none',
    textDecoration: 'none',
    color: 'white',
    border: 'none',
    textAlign: 'center',
    fontSize: '80px'
 }


class ProfileGen extends Component {
    render(){
        return(
            <Link to={'/profiles/new'}>              
                    <button style={buttonStyle}>Click to Find a Profile</button>
            </Link>
        )
    }
}
export default ProfileGen