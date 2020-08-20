import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
 
    container: {
        alignItems: 'center',
        backgroundColor: '#250954',
        flex: 1,
    },
    header:{
        alignItems: 'center',
        flexDirection: 'row',
        width:'100%',
        height: 150,
        padding: 20
    },
    headerImg:{
        width:'40%',
        height:150,
        resizeMode: 'contain'
    },
    headerText:{
        color:'white',
        width:'60%',
        fontSize: 19,
        alignSelf:'flex-end'

    },
    body:{
        alignItems:'center',
        height: '60%',
        width:'100%',
        justifyContent:'space-evenly',
    },
    bodyField:{
        alignItems:'center',
        width:'70%',
    },
    fieldText:{
        alignSelf:'flex-start',
        color:'white',
        fontSize: 18
    },
    fieldInput: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'red',
        backgroundColor: 'white',
        paddingLeft: 15,
        fontSize: 25,
        margin: 5,
    },
    botao: {
        height: 50,
        width: '60%',
        backgroundColor: 'red',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'white',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      botaoText: {
        fontSize: 22,
        fontWeight: '600',
        color: 'white',
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