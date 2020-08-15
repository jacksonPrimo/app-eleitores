import React from 'react'
export default class BarraDeBusca extends React.Component{
    render(){
        return(
            <form action="http://localhost:8080/">
                <input type="text" name="busca" placeholder={this.props.placeholder}/>
                <button type="submit"></button>
            </form>
        )
    }
}