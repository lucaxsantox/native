import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';
import TextCenter from '../components/TextCenter';
import Button from '../components/Button'

const TelaB = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1501/produtos')
      .then((response) => response.json())
      .then((json) => setData(json))
  }, []);



  return (
    <View>
    <Button navigation={props.navigation}/>
    <TextCenter text="Produtos" /> 
    
    <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        numColumns={1}
        renderItem={({item})=>(

        <View >
        <Text style={css.titulo}>{item.descricao}</Text>
        <View style={css.card}>
          <Image  style={{width: 100, height: 100}} source={require(`./Imagens/${item.imagem}`)} />

        <View style={css.precos}>
          <Text style={css.precoinicial}> De: R$ {item.preco_inicial}</Text><br />
          <Text style={css.precofinal}> Por: R$ {item.preco_final}</Text>
        </View>

        </View>

        
        </View>

        )}

      />
    

  </View>
  )
}
const css = StyleSheet.create({
  card: {
      flexDirection: 'row',
      borderRadius: 10,
      borderColor: '#f54242',
      borderWidth: 5,
  },
  precos: {
    flexDirection: 'column',
    marginTop: 20
  },

  precoinicial: {
    fontSize: 20,
    color: 'gray',
    textDecorationLine: 'line-through'
  },

  precofinal: {
    fontSize: 30,
    color: 'red',
    fontWeight: 600
  },

  titulo: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10
  }

})

export default TelaB
