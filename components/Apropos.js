import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class Apropos extends React.Component{
    render() {
        const { Apropos } = this.props
        return (
            <View style={styles.content_container}>
                <Image style={{ width: 100, height: 150 }} source={require('../img/deadpool.jpg')}/>
                <Text>Pseudo: Mike "Luzzy" F.</Text>
                <Text>Devise : Donde ésta la bibliotheca ?!</Text>
                <Image style={{ width: 100, height: 100 }} source={require('../img/vegeta.png')}/>
                <Text>Pseudo: Aleksandar "HostiL" G.</Text>
                <Text>Devise: In Tartiflette We Trust.</Text>
                <Image style={{ width: 100, height: 100 }} source={require('../img/oiseau.jpg')}/>
                <Text>Maxime "Camore The Pineapple" LT.</Text>
                <Text>Devise: It's finger lickin good.</Text>
                <Image style={{ width: 100, height: 100 }} source={require('../img/ryuji.png')}/>
                <Text>Adrien "Déné" C.</Text>
                <Text>Devise: ok ça marche pas, faut essayer autre chose.</Text>
            </View>
        )
      }
    }

    const styles = StyleSheet.create({
        content_container: {
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