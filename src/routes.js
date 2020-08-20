import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Main from './pages/Main';

const Stack = createStackNavigator();

const Routes = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login}/> 
                <Stack.Screen name="Cadastro" component={Cadastro}/>
                <Stack.Screen name="Main" component={Main}/>  
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;