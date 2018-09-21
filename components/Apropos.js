import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class Apropos extends React.Component{
    render() {
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
          flex: 1,
        },
      })
      
      export default Apropos