import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/Components/Welcome'

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Cohort 31</Text>
      <StatusBar style="auto" />
      <Welcome/>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
