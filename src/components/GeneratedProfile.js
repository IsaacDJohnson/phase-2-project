import React, {Component} from 'react'
import LikeButton from './LikeButton'


const buttonStyle = {
    textAlign: 'center',
    width: '70px',
    height: '35px',
    padding: '10px',
    margin: '5px',   
    background: 'indigo',
    textDecoration: 'none',
    color: 'white'
}

const profileStyle = {
    padding: '10px',
    marginBottom: '6px',
    margin: '15px'
}

let postFood
let postName

class GeneratedProfile extends Component {

    constructor(){
    super()
    this.state = {
        name: 'john',
        food: 'doe',
        picture: '',
    }
}
    componentDidMount = () => {
        this.handleClick()
}
    
    handleClick = () => {

        fetch('https://random-data-api.com/api/food/random_food?size=2&dish')
                    .then(res => res.json())
                    .then(data => {
                        const favFood = data[0]
                        this.setState( 
                            postFood = {
                                food: favFood.dish
                            }); 
                        console.log(postFood)
                    })

        fetch('https://random-data-api.com/api/name/random_name?size=2')                   
                    .then(res => res.json())
                    .then(data => {
                        const catName = data[0]
                        this.setState( postName = {
                            name: catName.name
                    }); 
                    console.log(postName)
                })
            
        fetch('https://thatcopy.pw/catapi/rest/')
                .then(res => res.json())
                .then(data => {
                    const info = data.url
                    this.setState({
                        picture: info
                })
            })

        fetch('http://localhost:3001/profiles', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },            
            body: JSON.stringify({
                name: postName, 
                "food": postFood
            })
        }).then((res)=>{
            console.log(res)
        })
    }

    render(){
        return(
            <div style={profileStyle}>
                <h1>Name: {this.state.name}</h1>
                <h2>Favorite Food: {this.state.food}</h2>
                <img src={ this.state.picture } alt='ERROR! >^..^< cat img not found' width='300px' height='250px'></img>
                <button style={buttonStyle} onClick={this.handleClick}>Refresh</button>
                <LikeButton />
            </div>
        )
    }
}
export default GeneratedProfile