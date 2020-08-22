import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React from 'react'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import PageDefault from '../../components/pageDefault/index'
import "./style.css";
export default class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            popup: 'descrição',
            markers: [],
        };
    }
    addMarker = (e) => {
        const { markers } = this.state;
        //markers.pop();
        markers.push(e.latlng);
        console.log(e.latlng)
        this.setState({ markers });
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
                    <Map
                        center={[-1.2036010434416355, -46.019630969691626]}
                        onClick={this.addMarker}
                        zoom={15}
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
                                        <div className="popup">
                                            <button className="btn_popup">
                                                <i className="fas fa-arrows-alt info" 
                                                    id_button={"1"}
                                                    onClick={e=>{console.log('função de informar')}}>
                                                </i>
                                            </button>
                                            <button className="btn_popup">
                                                <i className="fas fa-pencil editar" 
                                                    id_button={"2"}
                                                    onClick={e=>{console.log('função de editar')}}>    
                                                </i>
                                            </button>
                                            <button className="btn_popup">
                                                <i className="fas fa-trash excluir" 
                                                    id_button={"3"}
                                                    onClick={e=>{console.log('função de excluir')}}>
                                                </i>
                                            </button>
                                        </div>
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