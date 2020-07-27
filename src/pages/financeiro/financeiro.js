import React, { Fragment, Component } from "react";
import { StyleSheet, Text , View ,ScrollView, FlatList } from 'react-native';

import Header from '../../components/cabecalho/cabecalho'


class Financeiro extends Component{
  
  render() {
    
  return (
    
     <ScrollView>
       <View style={styles.container}>
        <View style={styles.header}>
            <Header>
                <Text style={styles.textHeader}>Js Organiza</Text>
            </Header>
        </View>
        <Text>Financeiro</Text>
      </View>
    </ScrollView>
  );

   }
}

export default Financeiro;

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

