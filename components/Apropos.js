import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image } from 'react-native'

class Apropos extends React.Component{
    render() {
        const { Apropos } = this.props
        return (
            <View style={styles.content_container}>
                <Text>Mickael Filipe: étudiant Itescia</Text>
                <Text>Aleksandar Grbovic: étudiant Itescia</Text>
                <Text>Maxime Le Teno: étudiant Itescia</Text>
                <Text>Adrien Chemla: étudiant Itescia</Text>
            </View>
        )
      }
    }

    const styles = StyleSheet.create({
        main_container: {
          height: 190,
          flexDirection: 'row'
        },
        image: {
          width: 120,
          height: 180,
          margin: 5,
          backgroundColor: 'gray'
        },
        content_container: {
          flex: 1,
          margin: 5
        },
        header_container: {
          flex: 3,
          flexDirection: 'row'
        },
        title_text: {
          fontWeight: 'bold',
          fontSize: 20,
          flex: 1,
          flexWrap: 'wrap',
          paddingRight: 5
        },
        vote_text: {
          fontWeight: 'bold',
          fontSize: 26,
          color: '#666666'
        },
        description_container: {
          flex: 7
        },
        description_text: {
          fontStyle: 'italic',
          color: '#666666'
        },
        date_container: {
          flex: 1
        },
        date_text: {
          textAlign: 'right',
          fontSize: 14
        }
      })
      
      export default Apropos