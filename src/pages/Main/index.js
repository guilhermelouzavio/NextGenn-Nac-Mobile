import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import logoNasaImg from '../../assets/logoNasa.png'

import styles from './styles';

import {read} from '../../database';

const Main = (props) =>{
    //state
    //onst[usuario, setUsuario] = useState('');

    //navigation
    const navigation = useNavigation();
  
    function navigateTo(nome){
        navigation.navigate(nome);
    }

    return(
        <SafeAreaView style={styles.container}>
                <Image source={logoNasaImg} style={styles.logoImg}/>
                <Text style={styles.text}>Bem vindo Astronauta:</Text>
                <Text style={styles.textNome}>{props.usuario}</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botaoExit}>
                    <Text style={styles.exitText}>Sair</Text>
                </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Main;