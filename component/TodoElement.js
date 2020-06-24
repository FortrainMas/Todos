import React from 'react';
import { Text, StyleSheet, View, CheckBox, Image } from 'react-native';

export default function TodoElement({todo}){
    return(
        <View style = {styles.container}>
            <View style = {styles.todoData}>
                <CheckBox value = {todo.isCompleted} />
                <Text style = {styles.text}>{todo.label}</Text>
            </View>
            <Image style = {styles.image} source = {require('../assets/more.png')} />
            <Image style = {styles.image} source = {require('../assets/Cross.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '97%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems:'center',
        justifyContent: 'space-between'
    },
    todoData:{
        flexDirection: 'row', 
        flexWrap: 'nowrap', 
        alignItems:'center',
        width:'73%',
    },
    image:{
        width: 20,
        height: 20,
    },
    text:{
        overflow:'hidden',
        width: '100%',
        flexWrap: 'wrap'
    }
})