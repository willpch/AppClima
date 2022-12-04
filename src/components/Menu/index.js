import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // hoock

export default function Menu(){

    const navigation = useNavigation();  // instanciar 

    return(
        // TouchableOpacity é o botao e estou abrindo o drawer
        <TouchableOpacity style={styles.container} onPress={ () => navigation.openDrawer()}>
            <Feather
                name="menu"
                size={36}
                color="#373737"
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        zIndex: 9, // fica em cima do home, acima de todos
        width: 70,
        height: 70,
        backgroundColor: '#FFF',
        alignItems: "center",
        justifyContent: "center",
        left: 15,
        top: 60,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation:2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset:{
            width: 1,
            height: 3
        }
    }
})