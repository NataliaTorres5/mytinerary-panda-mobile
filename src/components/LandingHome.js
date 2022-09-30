import { ImageBackground, Image, StyleSheet,Text,TouchableOpacity,View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function LandingHome() {

  const navigation = useNavigation()
  const image = { uri: "https://i.im.ge/2022/09/28/1EujTY.photo-mobile.jpg"};
  const logo = {uri: "https://i.im.ge/2022/09/28/1EFqw1.WelcomeIntro.png"};

 return(
  <View style={styles.container}>
      <ImageBackground source={image}
      resizeMode="cover" style={styles.image}>
        <Image source={logo} style={styles.logo}></Image>
        <TouchableOpacity
                style={styles.text}
                onPress={() => navigation.navigate("Cities",)}>
                <Text>Click Here!!</Text>
            </TouchableOpacity>
      </ImageBackground> 
    </View>

 )
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 300,
    height: 300,
    justifyContent: "center",
    paddingLeft: 100,
  },
  text: {
    color: "white",
    fontSize: 60,
    width: 100,
    height: 50,
    lineHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#636fa4"
  }
});
 