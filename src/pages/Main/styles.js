import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
 
    container: {
        alignItems: 'center',
        backgroundColor: '#250954',
        flex: 1,
    },
    logoImg:{
        resizeMode: 'contain'
    },
    text:{
        color:'white',
        fontSize: 19,
    },
    textNome:{
        color:'white',
        fontSize: 40,
        paddingTop: 30,
        paddingBottom:120,
    },
    botao: {
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'white',
        height: 30,
        margin: 20,
        justifyContent: 'center',
        width: '25%',
      },
      botaoText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
      },
});

export default styles;