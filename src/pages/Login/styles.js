import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#250954',
  },
  text:{
    color:'white',
    fontSize: 19,
  },
  textoInput: {
    height: 50,
    width: '70%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'red',
    backgroundColor: 'white',
    paddingLeft: 15,
    fontSize: 25,
    margin: 15,
  },
  botao: {
    height: 50,
    width: '40%',
    backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'white',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoTexto: {
    fontSize: 25,
    fontWeight: '600',
    color: 'white',
  },
  cadastro: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cadastroTexto: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default styles;
