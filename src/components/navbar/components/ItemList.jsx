import React from 'react'
import {Link} from 'react-router-dom'
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
        if(this.props.children){
            return(
                 <li className="item_list" onClick={e=>{this.ocultar(e)}}>
                    <div className="div-item-list">
                        <i className={this.props.fig}/>
                        <span>{this.props.txtSpan}</span>
                    </div>
                    {
                        this.state.ocult ? '' : this.props.children
                    }
                 </li>
            )
        }
        else{
            return(
                <li className="item_list" style={{textDecoration:'none'}}>
                   <Link to={this.props.url} className="div-item-list">
                       <i className={this.props.fig}/>
                       <span>{this.props.txtSpan}</span>
                   </Link>
                </li>
           )
        }
    }
}