import { PolyUtil } from "leaflet";

export default function Cadastrar(e){
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const options ={
        method: form.getAttribute('method'),
        body: new URLSearchParams(data)
    }
    fetch(form.action, options)
        .then(resp=> resp.json())
        .then(resp=>{
            console.log(resp);
            if(resp.erro){
                alert(resp.erro);
            }else{
                alert(resp.message);
            }
        })
        .catch(e=>{
            console.log('erro no fetch');
        })
}