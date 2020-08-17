import React, { Fragment, Component } from "react";
import { StyleSheet, Text , View ,ScrollView, FlatList, Button } from 'react-native';
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
        <Modal isVisible={this.state.isModalVisible} style={{
          width:500}}>
        <form>
        <label>
          Nome:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
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
  }
});

