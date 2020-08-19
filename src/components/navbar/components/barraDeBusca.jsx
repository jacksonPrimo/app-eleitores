import React from 'react'
export default class BarraDeBusca extends React.Component{
    render(){
        return(
            <form className="barraDeBusca" action="http://localhost:8080/pessoa/busca/">
                <input type="text" name="busca" placeholder={this.props.placeholder}/>
                <button type="submit"><i class="fas fa-search"></i></button>
            </form>
        )
    }
}