// import React from 'react';
// import { StyleSheet, Text, useColorScheme, View } from 'react-native';

// function AppPro(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <View style={styles.container}>
//       <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
//         hello Worlddd !
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     marginTop: 2,
//   },

//   whiteText: {
//     color: 'white',
//   },

//   blackText: {
//     color: 'black',
//   },
// });
// export default AppPro;
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './component/flatCards';
import ElevatedCard from './component/ElevatedCard';
import FancyCard from './component/fancyCard';
function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Text>hello anurag</Text> */}
        <FlatCards />
        <ElevatedCard />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
