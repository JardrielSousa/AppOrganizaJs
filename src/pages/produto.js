import React, { Fragment, Component } from "react";
import axios from 'axios';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
    Button,
    TextInput,
    TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import Header from "../components/cabecalho/cabecalho";
import Icon from "react-native-vector-icons/FontAwesome";
import { scale } from "react-native-size-matters";

class Produto extends Component {
    state = {
        modalData: {
            nome: "",
            quantidade: "0",
            valor: 0,
        },

        isModalVisible: false,
    };

    openModal = (item) => {
        this.setState({
            isModalVisible: true,
        });

        this.setState({
            modalData: {
                nome: item.nome,
                quantidade: item.quantidade,
                valor: item.valor,
            },
        });
    };

    closeModal = () => {
        this.setState({
            isModalVisible: false,
        });
    };

    editarProduto = (item)=>{
        axios.put('http://localhost:8080/v1/produto/{id}',item.id,item)
      .then(res => {
        const modalData = res.data;
        this.setState({ modalData });
      })
    }
    async componentWillMount() {
        try {
            const response = await fetch(
                "https://organizadbapi.herokuapp.com//v1/produto"
            );
            const dataJson = await response.json();
            this.setState({ personagens: dataJson });
            console.log(dataJson);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { isModalVisible, modalData: { nome, valor, quantidade   } } = this.state;
  
        
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Header>
                            <Text style={styles.textHeader}>Js Organiza</Text>
                        </Header>
                    </View>
                    <FlatList
                        data={this.state.personagens}
                        renderItem={({ item }) => (
                            <View style={styles.cardItem}>
                                <Text>Nome do Produto:{item.nome}</Text>
                                <Text>Valor:{item.valor}</Text>
                                <Text>Quantidade:{item.quantidade}</Text>
                                <Button
                                    title="Editar"
                                    type="outline"
                                    onPress={() => this.openModal(item)}
                                />
                                <Button title="Deletar" type="outline" />
                            </View>
                        )}
                    ></FlatList>
                    <Modal isVisible={this.state.isModalVisible}>
                        <View style={styles.contentModal}>
                            <View style={styles.viewForm}>
                                <Text style={styles.textLabel}>
                                    Editar Produto:
                                </Text>

                                <TextInput
                                    style={styles.textInput}
                                    placeholder="nome"
                                    value={nome}
                                    onChangeText={(value) =>
                                        this.setState({
                                            modalData: { 
                                                nome: value,
                                                valor : this.state.modalData.valor,
                                                quantidade : this.state.modalData.quantidade,
                                             },
                                        })
                                    }
                                    editable={true}
                                />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Valor"
                                    value={String(valor)}
                                    onChangeText={(value) =>
                                        this.setState({
                                            modalData: { 
                                                nome: this.state.modalData.nome,
                                                valor : value,
                                                quantidade : this.state.modalData.quantidade,
                                             },
                                        })
                                    }
                                    editable={true}
                                />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Quantidade:"
                                    value={String(quantidade)}
                                    onChangeText={(value) =>
                                        this.setState({
                                            modalData: { 
                                                nome: this.state.modalData.nome,
                                                valor : this.state.modalData.valor,
                                                quantidade: value },
                                        })
                                    }
                                    editable={true}
                                />
                                <TouchableOpacity style={styles.btnEdit}>
                                    <Text style={styles.btnEditText} onPress={()=>this.editarProduto(item)}>
                                        Editar
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.btnCancelar}
                                    onPress={() => this.closeModal()}
                                >
                                    <Text style={styles.btnEditText}>
                                        Cancelar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            </ScrollView>
        );
    }
}

export default Produto;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
    },
    header: {
        alignItems: "flex-start",
        height: 70,
        backgroundColor: "powderblue",
        justifyContent: "center",
        padding: 10,
    },
    textHeader: {
        color: "white",
        fontWeight: "bold",
        fontSize: 30,
    },
    cardItem: {
        borderWidth: 1,
        borderColor: "#20232a",
        borderRadius: 6,
        margin: 10,
        alignItems: "center",
        textAlign: "center",
        fontSize: 20,
        padding: 10,
    },
    contentModal: {
        height: 400,
        width: scale(300),
        borderRadius: 20,
        backgroundColor: "#fff",
        alignSelf: "center",
        alignItems:"center"
    },
    viewForm: {
        marginTop: 20,
        // marginLeft: 20
    },
    textLabel: {
        fontSize: 16,
        color: "#212121",
        fontWeight: "bold",
        marginLeft: 20,
    },
    textInput: {
        height: 40,
        width: scale(280),
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        marginTop: 10,
        paddingLeft: 10,
        // marginLeft: 20,
    },
    btnEdit: {
        height: 40,
        width: 180,
        backgroundColor: "#212121",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,

        marginTop: 50,
        alignSelf: "center",
    },
    btnEditText: {
        color: "#fff",
        fontSize: 14,
    },

    btnCancelar: {
        height: 40,
        width: 180,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginTop: 10,
        alignSelf: "center",
    },
});
