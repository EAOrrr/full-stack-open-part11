import {
  View,
  // Text,
  Image,
  StyleSheet
} from 'react-native'
import Text from './Text'
import theme from '../theme'
// import theme from '../theme'
const styles = StyleSheet.create({
  flexContainer: {

  },
  flexDetails: {
    flexDirection: 'column',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  language: {
    color: 'white',
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 3,
    marginVertical: 3
  }
})

const RepositoryItemDetail = ({ name, number}) => {
  const numberToDisplay = 
    number > 1000
    ? (number % 100) / 10 + 'k'
    : number
  // console.log(numberToDisplay)
  return (
    <View style={styles.flexDetails}>
      <Text fontWeight='bold'>
        {numberToDisplay}
      </Text>
      <Text color='textSecondary'>
        {name}
      </Text>
    </View>
  )
}

const RepositoryItem = ({ item }) => {
  return (
    <View style={{flexDirection:'column', backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', padding: 5}}>
        <Image 
          style={styles.avatar}
          source={{
            uri: item.ownerAvatarUrl
            }}
        />
        <View style={{flexDirection: 'column', justifyContent: 'space-around', paddingHorizontal: 10}}>
          <Text fontWeight='bold'>{item.fullName}</Text>
          <Text color='textSecondary'>{item.description} </Text>
          <Text style={styles.language}>{item.language} </Text>
          
        </View>
      </View>
      <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
        <RepositoryItemDetail name='Stars' number={item.stargazersCount}/>
        <RepositoryItemDetail name='Forks' number={item.forksCount} />
        <RepositoryItemDetail name='Reviews' number={item.reviewCount} />
        <RepositoryItemDetail name='Rating' number={item.ratingAverage} />
      </View>
    </View>     
  )
}

export default RepositoryItem