// Components/DisplayStudents.js

import React from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import members from "../members.json"
import StudentComponent from './StudentComponent'

class DisplayStudents extends React.Component {

    _displayProfil = (idStudent, Name, Statut, Image, Email, Tel, Classe) => {
        this.props.navigation.navigate("ProfilStudent", {idStudent: idStudent, Name:Name, Statut:Statut, Image:Image, Email, Tel, Classe})
    }


    render() {
        return(
            <View style={styles.main_container}>
                <FlatList
                    data={members}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <StudentComponent student={item} displayProfil={this._displayProfil}/>}
                />
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    main_container: {
        backgroundColor : '#ECFFFA',
        flex: 1
    },
    input: {
      marginRight : 20,
      marginLeft : 20,
      marginTop: 20,
      marginBottom : 10,
      height: 35,
      borderColor: '#000000',
      borderWidth: 0,
      paddingLeft: 5,
      borderRadius: 15,
      backgroundColor : '#E5E5E5'
    }
})

export default DisplayStudents