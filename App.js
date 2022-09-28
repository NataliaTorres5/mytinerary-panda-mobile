import { StatusBar } from 'expo-status-bar'; //maneja barra de estados 
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Navigation from './src/components/Navigation';
import Home from './src/screen/Home';
import Cities from './src/screen/Cities';
import { Provider } from 'react-redux';
import  Store  from './src/features/store';


export default function App() {

  return (
<Provider store={Store} >
    <View style={styles.container}>
      <Navigation style=""/>
      <Text>PANDA XIAO MEI!</Text>
      <Cities/>
      <StatusBar style="dark" />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
