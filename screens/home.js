import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native'
import React from 'react'



const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
      <Image 
       source={require('../assets/banner.jpg')}
          style={styles.imgBanner}
           resizeMode = 'contain'
      />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Quiz')} style={styles.button}>
         <Text style={styles.buttonText}>Start</Text> 
      </TouchableOpacity>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container:{
    paddingTop:40,
    paddingHorizontal:30,
  },
    imgBanner:{
        height:300,
        width:300,
    },
    bannerContainer:{
        alignItems:'center',
        justifyContent:'center',

    },
    button:{
      backgroundColor:'#4dc1db',
      width:'100%',
      padding:20,
      borderRadius:16,
      alignItems:'center'
    },
    buttonText:{
      fontSize:24,
      fontWeight:'600',
      color:'white',
    }
});

