import { createStackNavigator } from 'react-navigation'
import Search from '../components/Search'
import FilmDetail from '../components/FilmDetail'
import Apropos from '../components/Apropos'

const SearchStackNavigator = createStackNavigator({
  Search: { 
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: { 
    screen: FilmDetail
  },
  Apropos: {
    screen: Apropos
  }
})

export default SearchStackNavigator