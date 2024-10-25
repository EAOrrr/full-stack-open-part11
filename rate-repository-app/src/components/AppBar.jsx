import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appbar,
    flexDirection: 'row',
    // ...
  },
  tab: {
    margin: 5,
  },
  tabText: {
    color: 'white'
  },
  ScrollView: {
    // marginVertical: 10
    flex: 1
  }
  // ...
});

const tabs = [
  {
    label: 'Repositories',
    to: '/'
  },
  {
    label: "Sign In",
    to: '/sign-in'
  },
]

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.ScrollView}>
        {tabs.map(t => (
          <Link key={t.label} style={styles.tab} to={t.to}> 
          <Text style={styles.tabText}>{t.label} </Text>
          </Link>
        ))}
        </ScrollView>
    </View>
    );
};

export default AppBar;