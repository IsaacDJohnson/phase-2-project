import React from 'react'

const buttonStyle = {
    width: '80px',
    margin: '5px',   
    background: 'indigo',
    textDecoration: 'none',
    color: 'white'   
}



class LikeButton extends React.Component {

    constructor() {
            
        super()
        this.state = {
            number: 0
        }
    } 

    likeCounter =() => {
        this.setState({ number: this.state.number + 1
        })
    }


    render () {  
        return (
            <div>
                <button style={buttonStyle} onClick={this.likeCounter}>Likes {this.state.number}</button>
            </div>
        )
    }
}
export default LikeButton