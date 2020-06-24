import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TodoElement from '../component/TodoElement';

export default function Main(){
    const todos = [{
            label: 'Make readme.md',
            isCompleted: false
        },
        {
            label: 'Long todo to show how it will work',
            isCompleted: false
        },
        {
            label: 'Cross will delete todo',
            isCompleted: false
        },
        {
            label: 'Another icon will show more details',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        {
            label: 'Many todos',
            isCompleted: false
        },
        
    ]
    return(
        <View>
            <Text style = {styles.label}>Todo</Text>
            <ScrollView style = {styles.todos}>
                {
                    todos.map((item, i)=>{
                        return(<TodoElement todo = {item} key = {i}/>)
                    })
                }
            </ScrollView>
        </View>
    )  
};

const styles = StyleSheet.create({
    label:{
        fontSize:35
    },
    todos:{

    }
})