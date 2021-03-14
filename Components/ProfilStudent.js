import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

class ProfilStudent extends React.Component {
    render() {
        console.log(this.props.navigation)
        const id = this.props.navigation.getParam("idStudent")
        const name = this.props.navigation.getParam("Name")
        const statut = this.props.navigation.getParam("Statut")
        const image = this.props.navigation.getParam("Image")
        const email = this.props.navigation.getParam("Email")
        const tel = this.props.navigation.getParam("Tel")
        const classe = this.props.navigation.getParam("Classe")

        return(
            <ScrollView style={styles.main_container}> 
                <View style={styles.cadre}>
                    <Image 
                        style={styles.image} 
                        source={{uri:image}}
                    />
                    <View style={styles.description}>
                        <Text style={styles.text}>{name}</Text>
                        <Text style={styles.text}>{statut}</Text>
                        <Text style={styles.text}>{email}</Text>
                        <Text style={styles.text}>{tel}</Text>
                        <Text style={styles.text}>{classe}</Text>
                    
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      backgroundColor: '#ECFFFA',
    },

    cadre: {
        backgroundColor : '#57B8FF',
        height: 500,
        margin : 40,
        borderRadius : 8,
        
    }, 

    image:{
        height:200,
        margin : 20
    },

    text:{
        textAlign : 'center',
        fontSize : 20,
        margin: 3,
        flexWrap:'wrap'
    }


  })

export default ProfilStudent