export default function Editar(e){
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const options ={
        method: 'put',
        body: new URLSearchParams(data)
    }
    fetch(form.action, options)
        .then(resp=> resp.json())
        .then(resp=>{
            console.log(resp);
            alert(resp.message);
        })
        .catch(e=>{
            console.log('erro no fetch');
        })
}