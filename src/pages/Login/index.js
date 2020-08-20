import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoNasaImg from '../../assets/logoNasa.png';

import styles from './styles';

import {read} from '../../database';

const Login = () => {
  //state
  const[usuario, setUsuario] = useState('');
    
  const[senha, setSenha] = useState('');
  
  //navigation
  const navigation = useNavigation();
  
  function navigateTo(nome, usuario){
    navigation.navigate(nome,{usuario});
  }

  //handler
  const handleLogin = () => {
    read('usuario',(errors,dataUsuario)=>{
      if(! errors){
        if(usuario===dataUsuario){
          read('senha',(errors, dataSenha)=>{
            if(!errors){
              if(senha===dataSenha){
                navigateTo('Main', {usuario: usuario})
              }else{
                alert('Usuário ou senha incorretos')
              }
            }else alert('Não foi possível recuperar os dados');
          })
        }else alert('Usuário ou senha incorretos');
      }else alert('Não foi possível recuperar os dados');
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logoNasaImg}/>
      <Text style={styles.text}>Portal do Astronauta:</Text>
      <TextInput 
        style={styles.textoInput} 
        placeholder={'Usuário'}
        onChangeText={(txt)=>setUsuario(txt)}
      />
      <TextInput
        style={styles.textoInput}
        secureTextEntry={true}
        placeholder={'Senha'}
        onChangeText={(txt)=>setSenha(txt)}
      />
      <TouchableOpacity onPress={() => handleLogin()} style={styles.botao}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateTo('Cadastro')} style={styles.cadastro}>
        <Text style={styles.cadastroTexto}>Cadastrar-se</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
