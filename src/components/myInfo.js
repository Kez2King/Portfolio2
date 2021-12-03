import React from 'react'
import '../App.css'

class Findme extends React.Component{
    render(){
        return(
            <div class="minis">
                <h3>
                    <a href={this.props.src}>{this.props.location}</a>
                </h3>
            </div>
        )
    }
}

export default Findme