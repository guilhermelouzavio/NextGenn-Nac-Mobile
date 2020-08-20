import React, {useState} from 'react';
import {Image, SafeAreaView, TextInput, Text,TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoNasaImg from '../../assets/logoNasa.png';

import styles from './styles';

import {insertString} from '../../database';


const Cadastro = () => {
    //state
    const[usuario, setUsuario] = useState('');
    
    const[senha, setSenha] = useState('');
    
    //navigation
    const navigation = useNavigation();
  
    function navigateTo(nome){
      navigation.navigate(nome);
    }
   
    //handler
    const handleCadastrar = () => { 
        if(usuario.trim()!='' && senha.trim()!=''){
            insertString('usuario', usuario, (errors)=>{
                if(errors)alert('Erro  de Usuário ao cadastrar!')
                else{
                    insertString('senha', senha, (errors)=>{
                        if(errors) alert('Erro de Senha ao cadastrar!')
                        else{
                            alert('Cadastrado com sucesso');
                            navigateTo('Login');
                            console.log(usuario + senha);
                        }   
                    })
                }
            });           
        }else{
            alert('Insira um usuário e senha válidos');
        }
    }

    
    return(
        <SafeAreaView style={styles.container}>
            
            <View style={styles.header}>
                <Image source={logoNasaImg} style={styles.headerImg}/>
                <Text style={styles.headerText}>Faça seu cadastro{'\n'}para acessar o{'\n'}Portal do Astronauta</Text>
            </View>
            
            <View style={styles.body}>
                <View style={styles.bodyField}>
                    <Text style={styles.fieldText}>Cadastre um nome de usuário:</Text>
                    <TextInput 
                        style={styles.fieldInput} 
                        placeholder={'Usuário'}
                        onChangeText={(txt)=>setUsuario(txt)}
                    />
                </View>
                <View style={styles.bodyField}>
                    <Text style={styles.fieldText}>Cadastre uma senha:</Text>
                    <TextInput
                        style={styles.fieldInput}
                        secureTextEntry={true}
                        placeholder={'Senha'}
                        onChangeText={(txt)=>setSenha(txt)}
                    />
                </View>
                <TouchableOpacity 
                    onPress={() => handleCadastrar()} 
                    style={styles.botao}
                >
                    <Text style={styles.botaoText}>Cadastrar-se</Text>
                </TouchableOpacity>
                
            </View>
                <TouchableOpacity 
                    onPress={() => navigation.goBack() } 
                    style={styles.botaoExit}
                >
                    <Text style={styles.exitText}>Voltar</Text>
                </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Cadastro;