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
    botaoExit:{
        height: 30,
        width: '30%',
        backgroundColor: '#250954',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'red',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      exitText:{
        fontSize: 15,
        fontWeight: '600',
        color: 'white',
      },
});

export default styles;