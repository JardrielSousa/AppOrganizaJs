import React, { Fragment, Component } from "react";
import { StyleSheet, Text , View ,ScrollView, FlatList, Button, TextInput,TouchableOpacity } from 'react-native';
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
    isModalVisible:false
  }


    openModal = () =>{
      this.setState({
      isModalVisible:!this.state.isModalVisible
      })
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
              <Button title="Editar" type="outline" onPress={()=>this.openModal()}/> 
              <Button title="Deletar" type="outline"/> 
         </View>
  }> </FlatList>
        <Modal isVisible={this.state.isModalVisible} >
          <View style={styles.contentModal}>
          <View style={styles.viewForm}>
            <Text style={styles.textLabel}>Nome: </Text>
            <TextInput style={styles.textInput} placeholder="Name"/>
            <TouchableOpacity style={styles.btnEdit}>
              <Text style={styles.btnEditText}>Editar</Text>
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
    height: 300,
    width: "85%",
    borderRadius: 20,
    backgroundColor: "#fff",
    alignSelf: "center"
  },
  viewForm: {
    marginTop: 10,
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
    width: 240,
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
    marginTop: 50,
    alignSelf: "center"
  },
  btnEditText: {
    color: "#fff",
    fontSize: 14
  }
});

