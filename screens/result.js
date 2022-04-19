import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'
import React from 'react';

const Result = ({navigation,route}) => {
    const params = route.params;
  return (
    <View>
      <Text>Result</Text>
      <Text>{params.score}</Text>
      <Image 
       source={require('../assets/banner.jpg')}
          style={styles.imgBanner}
           resizeMode = 'contain'
      />
      <View>
          <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.button}>
              <Text>Go to home</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
};

export default Result;

const styles = StyleSheet.create({
    imgBanner:{
        height:300,
        width:300,
    },
    button:{
        backgroundColor:'#4dc1db',
        padding:12,
        borderRadius:16,
        alignItems:'center',
        alignSelf:'center'
      }
})