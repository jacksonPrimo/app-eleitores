module.exports = {
    expandir(e){            
        const id = e.target.getAttribute("id_button")
        localStorage.setItem('id', id)
        console.log(" expandiu " +  id)
    },
    editar(e){
        console.log(e.target.getAttribute("id_button") + " editou")
    },
    excluir(e){
        const id = e.target.getAttribute("id_button")
        const linha = document.getElementById(id)
        fetch(`http://localhost:8080/remover/${id}`, {method:'DELETE'})
            .then(resp=>resp.json())
            .then(resp=>{
                    linha.style.display = 'none'
                    alert(resp.message)
            })
    }
}