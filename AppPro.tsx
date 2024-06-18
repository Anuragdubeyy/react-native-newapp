import { StyleSheet, Text, View, useColorScheme, } from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
        hello Worlddd
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 2,
  },

  whiteText: {
    color: 'white',
  },

  blackText: {
    color: 'black',
  },
});
export default AppPro;
