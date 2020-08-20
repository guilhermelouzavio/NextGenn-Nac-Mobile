import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

import logoNasaImg from '../../assets/logoNasa.png'
import logoSpaceImg from '../../assets/logoSpace.png'

import styles from './styles';

//import {read} from '../../database';

const Main = () =>{
    const route = useRoute()
    const {usuario} = route.params

    //navigation
    const navigation = useNavigation();
  
    function navigateTo(nome){
        navigation.navigate(nome);
    }

    return(
        <SafeAreaView style={styles.container}>
                <Image source={logoNasaImg} style={styles.logoNasa}/>
                <View style={styles.certificateOut}>
                    <View style={styles.certificateIn}>
                        <Image source={logoSpaceImg} style={styles.logoSpace}/>
                        <Text style={styles.text}>Missão Espacial X</Text>
                        <Text style={styles.text}>Codenome do Astrounauta:</Text>
                        <Text style={styles.textNome}>{usuario}</Text>
                        <Text style={styles.textBottom}>Este passe garante acesso a todas
                         instalações e atividades, mantenha ele consigo a todo tempo. 
                         E mostre a equipe de segurança mediante solicitação.</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botaoExit}>
                    <Text style={styles.exitText}>Sair</Text>
                </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Main;