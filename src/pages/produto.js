import React, { Fragment, Component } from "react";
import { StyleSheet, Text , View ,ScrollView, FlatList, Button, TextInput,TouchableOpacity , Alert } from 'react-native';
import Modal from 'react-native-modal'
import Header from '../components/cabecalho/cabecalho'
import Icon from 'react-native-vector-icons/FontAwesome';


class Produto extends Component{
  state = {
    personagens: {
      id:0,
      nome:'',
      valor:0.0,
      quantidade:0
    },
    isModalVisible:false,
    itemPersonagens:{}
  }


    openModal = (item) =>{
      this.setState({
        isModalVisible:!this.state.isModalVisible
      });
      if(item){
        this.setState({
          itemPersonagens: {
            id:item.id,
            nome:item.nome,
            valor:item.valor,
            quantidade:item.quantidade
          }});  
        
        }else{
        Alert.alert('nadaaaaaa')
      }
      }
  async componentWillMount() {
    try {
      const response = await fetch('https://organizadbapi.herokuapp.com/v1/produto');
      const dataJson = await response.json();
      this.setState({ personagens: dataJson });
      console.log(this.state.personagens)
    } catch (error) {
      console.log(error);
    }
  }

  render() {
  const { isModalVisible } = this.state;
  return (
    
     <ScrollView>
       <View style={styles.container}>
        <View style={styles.header}>
        <Header>
          <Text style={styles.textHeader}>Js Organiza</Text>
        </Header>
        </View>
      <FlatList data={this.state.personagens} 
          renderItem={({item})=>
          <View style={styles.cardItem}>
              <Text >Id:{item.id}</Text>
              <Text >Nome do Produto:{item.nome}</Text>
              <Text >Valor:{item.valor}</Text>
              <Text >Quantidade:{item.quantidade}</Text>
              <Button title="Editar" type="outline" onPress={()=>this.openModal(item)}/> 
              <Button title="Deletar" type="outline"/> 
         </View>
  }> </FlatList>
        <Modal isVisible={this.state.isModalVisible} >
          <View style={styles.contentModal}>
            <View style={styles.viewForm}>
              <Text style={styles.textLabel}>Editar Produto: </Text>
              <TextInput style={styles.textInput} value={this.state.itemPersonagens.id} />
              <Text style={styles.textLabel}>{this.state.itemPersonagens.id}</Text>
              <TextInput style={styles.textInput} placeholder="nome"/>
              <TextInput style={styles.textInput} placeholder="Valor:"/>
              <TextInput style={styles.textInput} placeholder="Quantidade:"/>
              <TouchableOpacity style={styles.btnEdit}>
                <Text style={styles.btnEditText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnCancelar} onPress={()=>this.openModal()}>
                <Text style={styles.btnEditText}>Cancelar</Text>
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
  container:{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
  },
  header:{
      alignItems:"flex-start", 
      height: 70, 
      backgroundColor: 'powderblue',
      justifyContent:"center",
      padding:10
  },
  textHeader:{
    color: 'white' , 
    fontWeight: 'bold',
    fontSize:30,
  },
  cardItem:{
      borderWidth: 1,
      borderColor: "#20232a",
      borderRadius: 6,
      margin:10,
      alignItems:"center",
      textAlign: "center",
      fontSize: 20,
      padding:10
  },
  contentModal: {
    height: 400,
    width: "85%",
    borderRadius: 20,
    backgroundColor: "#fff",
    alignSelf: "center"
  },
  viewForm: {
    marginTop: 20,
    // marginLeft: 20
  },
  textLabel: {
    fontSize: 16,
    color: "#212121",
    fontWeight:"bold",
    marginLeft: 20

  },
  textInput: {
    height: 40,
    width: 280,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    marginLeft: 20
  },
  btnEdit: {
    height: 40,
    width: 180,
    backgroundColor: "#212121",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 30,
    alignSelf: "center"
  },
  btnEditText: {
    color: "#fff",
    fontSize: 14
  },
  btnCancelar: {
    height: 40,
    width: 180,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "center"
  }
});

