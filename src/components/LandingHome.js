import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';

export default function LandingHome() {

  const image = { uri: "https://i.im.ge/2022/09/28/1EujTY.photo-mobile.jpg" };
  const logo = {uri: "https://i.im.ge/2022/09/28/1EFqw1.WelcomeIntro.png"};


 return(
  <View style={styles.container}>
      <ImageBackground source={image}
      resizeMode="cover" style={styles.image}>
      <Image style={styles.logo} source={logo}/>
      <Text style={styles.text}>Cohort 31</Text>
      </ImageBackground> 
    </View>
 )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  logo: {
    width: 350,
    height: 350,
    justifyContent: "center",
    paddingLeft: 100,
  },
  text: {
    color: "blue",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});
 