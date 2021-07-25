import React from 'react'

const homeStyle = {
    background: 'navy'
}
const headerStyle = {
    color: 'white',
    textAlign: 'center',
    fontSize: '80px'
}
class Home extends React.Component {
    render () {
        return (
            <div style={homeStyle}>
                <h1 style={headerStyle}>Welcome to PawSpace</h1>
                <img src={'https://www.teahub.io/photos/full/4-47096_cat-wallpaper-background-data-src-free-download-cat.jpg'} alt={'Cat not found'}/>
            </div>
        )
    }
}

export default Home