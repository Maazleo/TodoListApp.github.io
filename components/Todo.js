import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}> </View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 30,
    height: 30,
    backgroundColor:'green',
    opacity: 0.5,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '100%',
  },
  circular: {
    width: 4,
    height:4,
    marginBottom:20,
    borderColor: 'red',
    borderWidth: 4,
    borderRadius: 4,
  },
});

export default Task;















// import react from 'react'
// import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

// export default function Todo(props)
// {
//   return(
//     <View style={styles.item}>
//       <View style={styles.itemleft}>
//         <TouchableOpacity style={styles.square}></TouchableOpacity>
//         <Text style={styles.itemtext}>{props.text}</Text>
//       </View>
//       <View style={styles.circular}> </View>
//     </View>
//   )
// }
// const styles=StyleSheet.create(
//   {
//     item:{
//       backgroundColor:'#FFF',
//       padding:15,
//       borderRadius:15,
//       flexDirection:'row',
//       allignItems:'center',
//       justifyContent:'space-between',
//       paddingRight:30,
//       marginBottom:20

//     },
//     itemleft:{
//       flexDirection:'row',
//       allignItems:'center',
//       flexWrap:'wrap',

//     },
//     square:{
//       width:22,
//       height:24,
//       backgroundColor:'blue',
//       opacity:0.7,
//       paddingRight:20,
//       marginRight:10
//     },
//     itemtext:{
//       maxWidth:'80%',
//       fontSize:15,
//       fontWeight:'bold',
//     },
//     circular:{
//       width:15,
//       height:15,
//       borderColor:'green',
//       borderWidth:3,
//       borderRadius:10,
//       allignItems:'center',
//       justifyContent:'center',
//       paddingTop:10,
//       marginTop:5,
//     }
//   }
// )

