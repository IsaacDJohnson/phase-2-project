import { Component } from "react"
import ApiHandle from './GeneratedProfile'
// import Profiles from "../containers/Profiles"


const formStyle = {

    marginTop: '200px',
    width: '300px',
    padding: '15px',
    margin: '10px',
    background: 'lightblue',
    textDecoration: 'none',
    color: 'white'
}

const textAreaStyle ={
    width: '250px',
    height: '50px',
    padding: '15px' 
}

const buttonStyle = {
    width: '80px',
    margin: '5px',   
    background: 'indigo',
    textDecoration: 'none',
    color: 'white'
}

class CommentForm extends Component {

    constructor(){
        super()
        this.state = {
            comment: ''
            
        }
    }
handleChange = (e) => {
    this.setState({
        [e.target.name]: e.targte.value
    })
}
handleSubmit = (e) => {
    e.preventDefault()
}

    render(){
        return(
            <div>
                <ApiHandle />
                <form style={formStyle} onSubmit={this.handleSubmit}>
                    <textarea style={textAreaStyle} placeholder={'Leave a comment!'}></textarea>
                    <button style={buttonStyle}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
export default CommentForm