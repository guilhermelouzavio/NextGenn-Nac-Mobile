import React from 'react';
import {Image, SafeAreaView, TextInput, Text,TouchableOpacity, View} from 'react-native';

import logoNasaImg from '../../assets/logoNasa.png'

import styles from './styles'
import {  } from 'react-native-gesture-handler';


const Cadastro = () => {
    return(
        <SafeAreaView style={styles.container}>
            
            <View style={styles.header}>
                <Image source={logoNasaImg} style={styles.headerImg}/>
                <Text style={styles.headerText}>Cadastre-se para acessar o portal NASA</Text>
            </View>
            
            <View style={styles.body}>
                <View style={styles.bodyField}>
                    <Text style={styles.fieldText}>Cadastre um nome de usuário:</Text>
                    <TextInput style={styles.fieldInput} placeholder={'Usuário'}/>
                </View>
                <View style={styles.bodyField}>
                    <Text style={styles.fieldText}>Cadastre uma senha:</Text>
                    <TextInput
                        style={styles.fieldInput}
                        secureTextEntry={true}
                        placeholder={'Senha'}
                    />
                </View>
                <TouchableOpacity onPress={() => alert('Oi')} style={styles.botao}>
                    <Text style={styles.botaoText}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default Cadastro;