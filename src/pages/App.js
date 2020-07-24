import React, { Component } from 'react';
import { StyleSheet, Text, View ,ScrollView, FlatList } from 'react-native';
import Button from '../components/button'
import Header from '../components/cabecalho/cabecalho'
class App extends Component {
  state = {
    personagens: {
      id:0,
      nome:'',
      valor:0.0,
      quantidade:0
    },
  }

  async componentWillMount() {
    try {
      const response = await fetch('https://organizadbapi.herokuapp.com/v1/produto');
      const dataJson = await response.json();

      this.setState({ personagens: dataJson });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    
  return (
    
     <ScrollView>
       <View style={styles.container}>
    <View style={styles.header}>
    <Header>
       <Text style={styles.textHeader}>Js Organiza</Text>
     </Header>
    </View>
     <View>
       <Button alerta="apertou o botao nos">
         <Text>Menu</Text>
       </Button>
       <Button alerta="apertou o botao n2">
         <Text>Perfil</Text>
       </Button>
    </View>
          <FlatList data={this.state.personagens} 
          renderItem={({item})=>
          <View style={styles.cardItem}>
              <Text >Id:{item.id}</Text>
              <Text >Nome do Produto:{item.nome}</Text>
              <Text >Valor:{item.valor}</Text>
              <Text >Quantidade:{item.quantidade}</Text>

          </View>
}> 
            
          </FlatList>
      </View>
    </ScrollView>
  );

   }
}

export default App;

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
