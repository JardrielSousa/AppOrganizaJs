import api from '../routes'

class ProdutoService{
    state = {
        modalData: {
            nome: "",
            quantidade: "0",
            valor: 0,
        },
    };
    
    editarProduto = async (item)=>{
        const response = await api.put(`/${id}`,item);
        const dataJson = await response.json();
                this.setState({ personagens: dataJson });
                console.log(dataJson);
    }
}

export default ProdutoService;