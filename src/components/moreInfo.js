import React from 'react'
import '../App.css'

class Maintext extends React.Component{
    render(){
        return(
            <div>
                <h2><u>{this.props.title}</u></h2>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default Maintext