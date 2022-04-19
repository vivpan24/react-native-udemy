import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';


const profile = () => {
  return (
    <View>
      <View style={styles.container}>
          <TextInput  style={styles.input} placeholder='Username'/>
          <TextInput  style={styles.input} placeholder='Password'/>
      </View>
      <View>
      <TouchableOpacity style={styles.button}>
      <Text>Submit</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
    alignItems:'center'
    },
    input:{
        height:50,   
    },
    button:{
        padding:5,
        backgroundColor:"#DDDDDD",
    }
})

export default profile;