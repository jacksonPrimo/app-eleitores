import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React from 'react'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import PageDefault from '../../components/pageDefault/index'
import "./style.css";
import register from '../cadastro/utils/register'
export default class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            map_position: [-5.397273407690904,-46.166557061875096],
            zoom_map: 6,
            popup_content: 'options',
            popup_position: '',
            popup_info: '',
            markers: [],
        };
    }
    componentDidMount(){
        fetch('http://localhost:8080/marker/listar')
            .then(resp=>resp.json())
            .then(resp=>{
                if(resp.erro){
                    alert('erro ao recuperar marcações feitas no mapa')
                }else{
                    if(resp !== []){
                        let markers = resp.map(marker=>{
                            let latlng = marker.POSITION.split('/')
                            return {lat:parseFloat(latlng[0]), lng:parseFloat(latlng[1])}
                        })
                        this.setState({ markers});
                    }
                }
            })
            .catch(erro =>{
                console.log(erro)
            })
    }    
    voltar = e =>{
        this.setState({
            popup_content: 'options',
            popup_info: ''
        })
    }
    informar=(e)=>{
        const position = e.target.getAttribute("position")
        const config = {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({position: position})
        }
        fetch(`http://localhost:8080/marker/buscar`, config)
            .then(resp=>resp.json())
            .then(resp=>{
                if(resp.erro){
                    alert(resp.erro)
                }else{
                    const nome = resp[0].NOME 
                    console.log(nome)
                    if(nome === null){
                        this.setState({
                            popup_content: 'info'
                        })
                    }else{
                        this.setState({
                            popup_content: 'info',
                            popup_info: nome
                        })
                    }
                }
            })
    }
    editar = e =>{
        const position = e.target.getAttribute("position")
        this.setState({
            popup_content: 'editar',
            popup_position: position
        })
    }
    excluir = e =>{
        const position = e.target.getAttribute("position")
        console.log(e.target)
        const body = { position: position }
        const config = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        fetch(`http://localhost:8080/marker/remover`, config)
            .then(resp=>resp.json())
            .then(resp=>{
                if(resp.erro){
                    alert('erro ao excluir')
                }else{
                    console.log('excluiu')
                    this.componentDidMount()
                }
            })
    }
    addMarker = (e) => {
        const position = `${e.latlng.lat}/${e.latlng.lng}`
        const body = { position: position }
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        fetch(`http://localhost:8080/marker/adicionar`, config)
            .then(resp=>resp.json())
            .then(resp=>{
                if(resp.erro){
                    alert(resp.erro)
                }else{
                    const { markers } = this.state;
                    markers.push(e.latlng);
                    console.log(e.latlng)
                    this.setState({ markers });
                }
            })
            .catch(err =>{
                console.log(err)
            })
    }
    setCidade = e =>{
        let info = e.target.value.split('/')
        this.setState({
            map_position: [parseFloat(info[0]), parseFloat(info[1])],
            zoom_map: parseFloat(info[2])
        })
    }
    render(){
        let DefaultIcon = L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow
        });
        L.Marker.prototype.options.icon = DefaultIcon;
        return(
            <PageDefault>
                <div className="home">
                    <form className="form_home">
                        <select name="cidade_mapa" onChange={this.setCidade} className="select_cidade">
                            <option value="-5.397273407690904/-46.166557061875096/6">Cidade</option>
                            <option value="-1.2036010434416355/-46.019630969691626/15">Carutapera-MA</option>
                            <option value="-1.678179112974127/-46.01164708451035/15">Amapá-MA</option>
                            <option value="-1.4545022595109487/-45.72853315240408/15">Cândido Mendes-MA</option>
                            <option value="-2.579834/-44.194949/11">São Luís-MA</option>
                        </select>
                    </form>
                    <Map
                        center={this.state.map_position}
                        onClick={this.addMarker}
                        zoom={this.state.zoom_map}
                        maxZoom={18}
                        minZoom={5}   
                        style={{width: '100%',height: '100%'}}
                        >
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        />
                        {/* markers é um array e sua posição 0 possui um objeto com lat: #### e lng: #### */}
                        {
                            this.state.markers === []
                            ? ''
                            :this.state.markers.map((position, idx) =>
                                <Marker key={`marker-${idx}`} position={position} onClick={e=>{console.log(e)}}>
                                    <Popup>
                                        {   
                                            this.state.popup_content === 'editar'
                                            ?
                                            <div className="popup">
                                                <form action="http://localhost:8080/marker/atualizar" method="put" onSubmit={register}>
                                                    <input name="nome" placeholder="Nome"/>
                                                    <input style={{display: 'none'}} name="position" value={this.state.popup_position}/>
                                                    <button onClick={this.voltar}><i class="fas fa-arrow-circle-left"></i></button>
                                                    <button type="submit"><i class="fas fa-arrow-circle-right"></i></button>
                                                </form>
                                            </div>
                                            :
                                            this.state.popup_content === 'info'
                                            ?
                                            <div className="popup">
                                                <p>{this.state.popup_info}</p> 
                                                <button onClick={this.voltar}><i class="fas fa-arrow-circle-left"></i></button>
                                            </div>
                                            :
                                            <div className="popup">
                                                <button className="btn_popup">
                                                    <i className="fas fa-info-circle info"
                                                        position={`${position.lat}/${position.lng}`}
                                                        onClick={this.informar}></i>
                                                </button>
                                                <button className="btn_popup">
                                                    <i className="fas fa-pencil editar"
                                                        position={`${position.lat}/${position.lng}`}
                                                        onClick={this.editar}></i>
                                                </button>
                                                <button className="btn_popup">
                                                    <i className="fas fa-trash excluir"
                                                        position={`${position.lat}/${position.lng}`}
                                                        onClick={this.excluir}></i>
                                                </button>
                                            </div>
                                        }
                                    </Popup>
                                </Marker>
                            )
                        }
                    </Map>
                </div>
            </PageDefault>
        )
    }
}