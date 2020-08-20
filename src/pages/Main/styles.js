import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
 
    container: {
        alignItems: 'center',
        backgroundColor: '#250954',
        flex: 1,
    },
    logoNasa:{
        resizeMode: 'contain',
        height:'30%',
    },
    certificateOut:{
        backgroundColor:'white',
        height:'50%',
        width:'95%',
        alignItems:'center',
        justifyContent:'center',
        
    },
    certificateIn:{
        alignItems:'center',
        justifyContent:'space-around',
        height:'98%',
        width:'98%',
        borderWidth: 5,
        borderColor:'red',
    },
    logoSpace:{
        resizeMode: 'contain',
        height:100,
        width:100,
    },
    text:{
        color:'#250954',
        fontSize: 19,
    },
    textNome:{
        color:'#250954',
        fontSize: 28,
        fontStyle:'italic',
        fontWeight:'700', 
        textDecorationLine:'underline',

    },
    textBottom:{
        color:'#250954',
        fontSize: 15,
        textAlign:'center',
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
        marginTop:40
      },
      exitText:{
        fontSize: 15,
        fontWeight: '600',
        color: 'white',
      },
});

export default styles;