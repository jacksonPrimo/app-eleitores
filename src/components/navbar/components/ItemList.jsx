import React from 'react'
export default class ItemList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ocult: true
        }
    }
    ocultar= e =>{
        this.setState({ocult: !this.state.ocult})
    }
    render(){
        return(
             <li className="item_list" onClick={e=>{this.ocultar(e)}}>
                <div>
                    <i className={this.props.fig}/>
                    <span>{this.props.txtSpan}</span>
                </div>
                {
                    this.state.ocult ? '' : this.props.children
                }
             </li>
        )
    }
}