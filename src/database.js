import AsyncStorage from '@react-native-community/async-storage';

const insertString = (key, value, callback=null)=>{
    try {
        AsyncStorage.setItem(key,value, callback);
    } catch (e) {
        throw new Error('Não foi possível inserir os dados');
    }
}

const insertObject = (key, value, callback=null) =>{
    try {
        const jsonValue = JSON.stringify(value);
        insertString(key, jsonValue, callback);
    } catch (e) {
        throw new Error('Não foi possível inserir os dados');
    }
}

const read = (key, callback=null) => {
    try {
        AsyncStorage.getItem(key, callback);
    } catch (e) {
        throw new Error('Não foi possível recuperar os dados');
    }
}

export {insertObject, insertString, read};