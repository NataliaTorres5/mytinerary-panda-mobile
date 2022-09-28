import { StatusBar } from 'expo-status-bar'; //maneja barra de estados 
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screen/Home';
import Cities from './src/screen/Cities';
import { Provider } from 'react-redux';
import  Store  from './src/features/store';
import Drawer from './src/navigation/Drawer';


export default function App() {

  return (
<Provider store={Store} >

    <NavigationContainer>

    <Drawer/>
      
    {/* <View style={styles.container}>
      
      <Text>PANDA XIAO MEI!</Text>
      <Cities/>
      <StatusBar style="dark" />
    </View> */}
    </NavigationContainer>
    
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
