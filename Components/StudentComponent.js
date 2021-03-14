// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


class StudentComponent extends React.Component {
  render() {
    const id = this.props.student.id
    const name = this.props.student.name
    const statut = this.props.student.statut
    const image = this.props.student.image
    const email = this.props.student.email
    const tel = this.props.student.tel
    const classe = this.props.student.classe

    return (
      <TouchableOpacity 
        style={styles.main_container}
        onPress={() => this.props.displayProfil(id, name, statut, image, email, tel, classe)}>
        <Image
            style={styles.image}
            source={{uri: this.props.student.image}}
        />
        <Text style={styles.title_text} numberOfLines={1}>{this.props.student.name}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 180, 
    backgroundColor : '#57B8FF', 
    borderRadius : 8, 
    margin : 80,
    marginBottom : 0,
    marginTop: 20
  },

  image: {
    flex :4,
    marginTop: 5,
    marginLeft: 30,
    marginRight : 30, 
    alignContent : 'center'
  },

  title_text: {
    fontSize : 20,
    flex: 1,
    textAlign : 'center'
  }
})

export default StudentComponent