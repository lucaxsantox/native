import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Button from '../components/Button'
import TextCenter from '../components/TextCenter'

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Rio de Janeiro', 
      ad: 'Rua do Arquiteto, 150. - Recreio dos Bandeirantes',
      phone: '(21) 2121-2121'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Minas Gerais',
      ad: 'Rua São Marcelino, 208. - Novo Cruzeiro',
      phone: '(31) 3131-3131'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'São Paulo',
      ad: 'Rua da Estação, 35. - Osasco',
      phone: '(11) 1111-11'
    },
  ];

  const Item = ({ title, ad, phone }) => (
    <View style={styles.item}>
      <Text style={styles.titulo}>{title}</Text>
      <Text style={styles.title}>{ad}</Text>
      <Text style={styles.title}>{phone}</Text>

    </View>
  );

const TelaC = (props) => { 
    const renderItem = ({ item }) => (
        <Item title={item.title} ad={item.ad} phone={item.phone}/>
      );    

    return (
        <SafeAreaView style={styles.container} >
        <Button navigation={props.navigation} />
     <TextCenter text="Nossas Lojas" /> 
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#e8e6e6',
      padding: 15,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 25,
    },
    titulo: {
      color: '#f54242',
      fontSize: 25,
      fontWeight: 550
    }
  });



export default TelaC
