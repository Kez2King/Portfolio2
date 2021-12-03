import React from 'react'
import '../App.css'

class Details extends React.Component{
    render(){
        return(
            <div>
                <h4>{this.props.place}</h4>
                <h5>{this.props.term}</h5>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Details