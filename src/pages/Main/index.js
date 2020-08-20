import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';

import logoNasaImg from '../../assets/logoNasa.png'

import styles from './styles';

const Main = () =>{
    return(
        <SafeAreaView style={styles.container}>
                <Image source={logoNasaImg} style={styles.logoImg}/>
                <Text style={styles.text}>Bem vindo Astronauta:</Text>
                <Text style={styles.textNome}>USUARIO</Text>
                <TouchableOpacity onPress={() => alert('Oi')} style={styles.botao}>
                    <Text style={styles.botaoText}>Sair</Text>
                </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Main;